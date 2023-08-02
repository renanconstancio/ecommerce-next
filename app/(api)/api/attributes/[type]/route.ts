import { prisma } from "@/libs/prisma";
import dateFormat from "@/libs/dateFormat";

import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { type: string | null } }
) {
  try {
    let where = { attibuteId: null, deletedAt: null, active: true };

    if (!params.type) throw new Error("");

    where = { type: String(params.type).toLocaleUpperCase(), ...where };

    console.log(where);

    const response = await prisma.attibute.findMany({
      where,
      include: {
        childrens: true,
      },
    });

    const attibutes = response.map((item) => ({
      id: item.id,
      type: item.type,
      name: item.name,
      description: item.description,
      createdAt: dateFormat(item.createdAt),
      updatedAt: dateFormat(item.updatedAt),
      deletedAt: dateFormat(item.deletedAt),
      childrens: item.childrens.map((child) => ({
        id: child.id,
        type: child.type,
        name: child.name,
        description: child.description,
        palette: child.palette?.split(","),
        shipping: child.shipping?.split(","),
        createdAt: dateFormat(child.createdAt),
        updatedAt: dateFormat(child.updatedAt),
        deletedAt: dateFormat(child.deletedAt),
      })),
    }));

    return NextResponse.json({ data: attibutes });
  } catch (error) {
    return NextResponse.json(
      { message: String(error).toString() },
      { status: 500 }
    );
  }
}
