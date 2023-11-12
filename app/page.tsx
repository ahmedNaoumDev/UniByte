import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Members from '@/components/Members'
import Nav from '@/components/Nav'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 px-0 pb-0 bg-white w-full">
      <Nav/>
      <Banner/>
      <Hero/>
      <Stats/>
      <Members/>
      <Footer/>
    </main>
  )
}
