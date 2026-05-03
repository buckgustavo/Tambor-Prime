import { useScrollReveal } from './hooks/useScrollReveal'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsBar } from './components/StatsBar'
import { ProductSection } from './components/ProductSection'
import { Differentials } from './components/Differentials'
import { BrasaAlta } from './components/BrasaAlta'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ProductSection />
        <Differentials />
        <BrasaAlta />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
