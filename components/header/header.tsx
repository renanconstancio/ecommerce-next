import { Suspense } from 'react'

import Container from '@/components/container'
import Navigation from '@/components/header/navigation'
import NavigationSkeleton from '@/components/header/navigation-skeleton'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-b-zinc-300">
      <Container>
        <section className="flex flex-row justify-between py-4">
          <Link href="/">logo</Link>
        </section>
      </Container>

      <Suspense fallback={<NavigationSkeleton />}>
        <Navigation />
      </Suspense>
    </header>
  )
}
