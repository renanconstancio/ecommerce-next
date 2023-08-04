// import menu from './menu.module.css'

import MenuItem from './menu-list'

type MenuProps = {
  id: string
  name: string
  childrens: MenuProps[]
}

export default function Menu({ data, ...rest }: { data: MenuProps[] }) {
  return (
    <ul {...rest}>
      {data.map((item) => (
        <MenuItem
          key={item.id}
          id={item.id}
          name={item.name}
          childrens={item.childrens}
        />
      ))}
    </ul>
  )
}
