import Container from '@/components/container'
import Header from '@/components/header/header'
import NavLeft from '@/components/nav-left/aside'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="flex flex-1 flex-col h-screen">
      <Header />
      <Container>
        <main className="flex flex-row flex-nowrap m-4">
          <Suspense fallback={'A'}>
            <NavLeft />
          </Suspense>
          <section className="flex-1">B</section>
        </main>
      </Container>
    </main>
  )
}
