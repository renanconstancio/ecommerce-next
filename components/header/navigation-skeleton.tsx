import menu from './menu.module.css'

import Container from '@/components/container'

export default function NavigationSkeleton() {
  return (
    <div className="h-14 w-14 absolute right-0 top-0 sm:w-auto sm:relative flex flex-row items-center bg-slate-400">
      <Container>
        <ul className={menu.menu} style={{ height: '30px' }}>
          <li className="animate-pulse bg-slate-500 w-28 rounded-lg"></li>
          <li className="animate-pulse bg-slate-500 w-28 rounded-lg"></li>
          <li className="animate-pulse bg-slate-500 w-28 rounded-lg"></li>
          <li className="animate-pulse bg-slate-500 w-28 rounded-lg"></li>
        </ul>
      </Container>
    </div>
  )
}
