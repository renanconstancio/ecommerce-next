import menu from './menu.module.css'

import Menu from './menu'

type MenuItemProps = {
  id: string
  name: string
  childrens?: MenuItemProps[]
}

export default function MenuItem({ id, name, childrens }: MenuItemProps) {
  return (
    <li key={id}>
      {name}
      {childrens && <Menu data={childrens} className={menu.menu__sub} />}
    </li>
  )
}
