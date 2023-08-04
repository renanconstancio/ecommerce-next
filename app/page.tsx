import { API } from '@/constants'
import { CategoriesProps } from '@/types'

import Header from '@/components/header/header'

export async function getCategories(): Promise<{ data: CategoriesProps[] }> {
  const result = await fetch(`${API}/categories`)
  return result.json()
}

export default async function Home() {
  const { data: dataCategories } = await getCategories()

  console.log(dataCategories)

  return (
    <main className="flex flex-1 flex-col h-screen">
      <Header data={dataCategories} />
    </main>
  )
}
