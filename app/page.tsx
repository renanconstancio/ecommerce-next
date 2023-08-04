import Container from '@/components/container'
import Header from '@/components/header/header'

export default function Home() {
  return (
    <main className="flex flex-1 flex-col h-screen">
      <Header />
      <Container>
        <main className="flex flex-row flex-nowrap m-4">
          <aside className="flex-initial w-80">A</aside>

          <section className="flex-1">B</section>
        </main>
      </Container>
    </main>
  )
}
