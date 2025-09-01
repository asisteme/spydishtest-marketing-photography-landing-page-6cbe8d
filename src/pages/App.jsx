import React from "react"
import Hero from "../sections/Hero"
import Diners from "../sections/Diners"
import Restaurants from "../sections/Restaurants"
import Testimonials from "../sections/Testimonials"
import Footer from "../sections/Footer"

export default function App() {
  return (
    <main className="font-sans leading-relaxed">
      <Hero />
      <Diners />
      <Restaurants />
      <Testimonials />
      <Footer />
    </main>
  )
}
