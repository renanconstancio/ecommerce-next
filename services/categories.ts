import { API } from '@/constants'
import type { CategoryProps } from '@/types'

export async function getCategories(): Promise<{ data: CategoryProps[] }> {
  const result = await fetch(`${API}/categories`)

  return result.json()
}
