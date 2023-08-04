interface MenuItemProps {
  id: string
  name: string
}

export default function MenuItem({ id, name }: MenuItemProps) {
  return (
    <li className="p-1" key={id}>
      {name}
    </li>
  )
}
