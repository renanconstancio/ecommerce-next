import MenuItem from './menu-list'

type MenuProps = {
  id: string
  name: string
  childrens: MenuProps[]
}

export default function Menu({
  data,
  className,
  ...rest
}: {
  data: MenuProps[]
  className?: string
}) {
  return (
    <ul className={className} {...rest}>
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
