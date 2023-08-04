'use client'

import { use } from 'react'

import menu from './menu.module.css'

import Container from '@/components/container'
import Menu from '@/components/header/menu'

import type { CategoryProps } from '@/types'
import { getCategories } from '@/actions/categories'

export interface HeaderProps {
  data: CategoryProps[]
}

export default function Navigation() {
  const { data: dataCategories } = use(getCategories())

  return (
    <nav className="h-14 w-14 absolute right-0 top-0 sm:w-auto sm:relative flex flex-row items-center bg-slate-400">
      <Container>
        <Menu data={dataCategories} className={menu.menu} />
      </Container>
    </nav>
  )
}
