import { API } from '@/constants'
import type { AttributeProps } from '@/types'

export async function getAttributes(): Promise<{ data: AttributeProps[] }> {
  const result = await fetch(`${API}/attributes`)

  return result.json()
}
