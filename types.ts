import { z } from 'zod'

const schemaCategory = z.object({
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().default(''),
  images: z.string().default(''),
  active: z.boolean(),
  position: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
})

export type CategoriesProps = z.output<typeof schemaCategory> & {
  childrens: CategoriesProps[]
}
