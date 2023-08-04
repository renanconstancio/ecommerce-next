import { prisma } from '@/libs/prisma'
import dateFormat from '@/libs/dateFormat'

import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await prisma.category.findMany({
      where: { categoryId: null, deletedAt: null },
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

    const categories = response.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      images: item.images,
      active: item.active,
      position: item.position,
      createdAt: dateFormat(item.createdAt),
      updatedAt: dateFormat(item.updatedAt),
      deletedAt: dateFormat(item.deletedAt),
      childrens: item.childrens.map((child) => ({
        id: child.id,
        categoryId: child.categoryId,
        name: child.name,
        description: child.description,
        images: child.images,
        active: child.active,
        position: child.position,
        createdAt: dateFormat(child.createdAt),
        updatedAt: dateFormat(child.updatedAt),
        deletedAt: dateFormat(child.deletedAt),
      })),
    }))

    return NextResponse.json({ data: categories })
  } catch (error) {
    return NextResponse.json(
      { message: String(error).toString() },
      { status: 500 },
    )
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export async function POST() {}
