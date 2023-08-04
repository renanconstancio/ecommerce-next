import { z } from 'zod'

const categoryResponse = {
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().default(''),
  images: z.string().default(''),
  active: z.boolean(),
  position: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
}

const schemaCategory = z.object({
  ...categoryResponse,
  childrens: z.array(z.object({ ...categoryResponse })),
})

type CategoryProps = z.output<typeof schemaCategory>

const attributeResponse = {
  id: z.string().cuid(),
  type: z.enum([
    'COLOR',
    'SIZE',
    'FLAVOR',
    'SHIPPING',
    'TEXT',
    'ESPECIFICATION',
    'DESCRIPTION',
    'BRAND',
  ]),
  name: z.string(),
  description: z.string().default(''),
  active: z.boolean(),
  position: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
}

const schemaAttribute = z.object({
  ...attributeResponse,
  childrens: z.array(
    z.object({
      ...attributeResponse,
      palette: z.array(z.string()),
      shipping: z.array(z.string()),
    }),
  ),
})

type AttributeProps = z.output<typeof schemaAttribute>

export type { AttributeProps, CategoryProps }
