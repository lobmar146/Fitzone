import BenefitsSection from '../components/Home/BenefitsSection'
import FeaturedActivities from '../components/Home/FeaturedActivities'
import Hero from '../components/Home/Hero'
import ProductList from '../components/Home/ProductList'
import { ElementosGlobales } from '../context/ElementosGlobales'
import { useContext, useState } from 'react'

function Home() {
  const { products, error, loading } = useContext(ElementosGlobales)

  return (
    <section>
      <Hero />
      <BenefitsSection />
      <FeaturedActivities />
    </section>
  )
}
export default Home
