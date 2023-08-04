import { prisma } from '@/libs/prisma'
import { Prisma } from '@prisma/client'
import dateFormat from '@/libs/dateFormat'

import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { type: string[] } | undefined },
) {
  try {
    let where: Prisma.AttributeWhereInput = {
      attibuteId: null,
      deletedAt: null,
    }

    if (params?.type?.length) {
      const paramsType = params.type[0].toLocaleUpperCase()
      where = { type: paramsType, ...where }
    }

    const response = await prisma.attribute.findMany({
      where: { ...where },
      include: {
        childrens: {
          orderBy: {
            position: 'asc',
          },
        },
      },
      orderBy: {
        position: 'asc',
      },
    })

    const attibutes = response.map((item) => ({
      id: item.id,
      type: item.type,
      name: item.name,
      description: item.description,
      position: item.position,
      active: item.active,
      createdAt: dateFormat(item.createdAt),
      updatedAt: dateFormat(item.updatedAt),
      deletedAt: dateFormat(item.deletedAt),
      childrens: item.childrens.map((child) => ({
        id: child.id,
        attibuteId: child.attibuteId,
        type: child.type,
        name: child.name,
        description: child.description,
        palette: child.palette?.split(','),
        shipping: child.shipping?.split(','),
        position: child.position,
        active: child.active,
        createdAt: dateFormat(child.createdAt),
        updatedAt: dateFormat(child.updatedAt),
        deletedAt: dateFormat(child.deletedAt),
      })),
    }))

    return NextResponse.json({ data: attibutes })
  } catch (error) {
    return NextResponse.json(
      { message: String(error).toString() },
      { status: 500 },
    )
  }
}
