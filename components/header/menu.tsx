import MenuItem from './menu-list'

type MenuProps = {
  id: string
  name: string
  children: MenuProps[]
}

export default function Menu({ data }: { data: MenuProps[] }) {
  return (
    <ul className="flex flex-row flex-nowrap space-x-2">
      {data.map((item) => (
        <MenuItem key={item.id} id={item.id} name={item.name} />
      ))}
    </ul>
  )
}
