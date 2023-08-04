import menu from './menu.module.css'

import Container from '@/components/container'
import Menu from '@/components/header/menu'

import type { CategoriesProps } from '@/types'

interface HeaderProps {
  data: CategoriesProps[]
}

export default function Header({ data }: HeaderProps) {
  return (
    <header className="bg-slate-400">
      <Container>
        <nav className="h-14 flex flex-row items-center">
          <Menu data={data} className={menu.menu} />
        </nav>
      </Container>
    </header>
  )
}
