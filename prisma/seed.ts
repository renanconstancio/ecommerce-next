import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.upsert({
    where: { id: "1" },
    update: {},
    create: {
      name: "Categoria A",
      description: "",
      images: "",
      childrens: {
        create: [
          {
            name: "Categoria A - A",
            description: "",
            images: "",
          },
          {
            name: "Categoria A - B",
            description: "",
            images: "",
          },
        ],
      },
    },
  });

  await prisma.attribute.upsert({
    where: { id: "" },
    update: {},
    create: {
      type: "COLOR",
      name: "Cores",
      active: true,
      position: 1,
      childrens: {
        create: [
          {
            type: "COLOR",
            name: "Vermelho",
            active: true,
            palette: "#FF9,#FF9",
            position: 1,
          },
          {
            type: "COLOR",
            name: "Preto",
            palette: "#000,#000",
            active: true,
            position: 2,
          },
        ],
      },
    },
  });

  await prisma.attribute.upsert({
    where: { id: "" },
    update: {},
    create: {
      type: "SIZE",
      name: "Tamanhos",
      active: true,
      position: 2,
      childrens: {
        create: [
          {
            type: "SIZE",
            name: "20",
            active: true,
            position: 1,
          },
          {
            type: "SIZE",
            name: "22",
            active: true,
            position: 2,
          },
          {
            type: "SIZE",
            name: "24",
            active: true,
            position: 3,
          },
        ],
      },
    },
  });

  await prisma.promotion.create({
    data: {
      name: "Boleto",
      type: "%",
      discont: "50",
    },
  });

  await prisma.promotion.create({
    data: {
      name: "A Vista",
      type: "$",
      discont: "50.00",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
