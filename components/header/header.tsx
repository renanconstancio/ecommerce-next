import Container from '@/components/container'
import Menu from '@/components/header/menu'

import type { CategoriesProps } from '@/types'

interface HeaderProps {
  data: CategoriesProps[]
}

export default function Header({ data }: HeaderProps) {
  return (
    <header>
      <Container>
        <nav>
          <Menu data={data} />
        </nav>
      </Container>
    </header>
  )
}
