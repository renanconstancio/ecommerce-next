'use client'

import menu from './menu.module.css'

import { API } from '@/constants'

import delay from '@/utils/delay'
import Container from '@/components/container'
import Menu from '@/components/header/menu'

import type { CategoriesProps } from '@/types'
import { use } from 'react'

export async function getCategories(): Promise<{ data: CategoriesProps[] }> {
  const result = await fetch(`${API}/categories`)

  return result.json()
}

export interface HeaderProps {
  data: CategoriesProps[]
}

export default function Navigation() {
  const { data: dataCategories } = use(getCategories())
  use(delay())

  return (
    <nav className="h-14 w-14 absolute right-0 top-0 sm:w-auto sm:relative flex flex-row items-center bg-slate-400">
      <Container>
        <Menu data={dataCategories} className={menu.menu} />
      </Container>
    </nav>
  )
}
