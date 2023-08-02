import { prisma } from "@/libs/prisma";
import dateFormat from "@/libs/dateFormat";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const response = await prisma.attibute.findMany({
      where: { attibuteId: null, deletedAt: null, active: true },
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
        createdAt: dateFormat(child.createdAt),
        updatedAt: dateFormat(child.updatedAt),
        deletedAt: dateFormat(child.deletedAt),
      })),
    }));

    return NextResponse.json({ data: attibutes });
  } catch (error) {
    return NextResponse.json({ error: error.toString() }, { status: 500 });
  }
}
