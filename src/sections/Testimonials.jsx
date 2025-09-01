import React from "react"

const testimonials = [
  {
    quote:
      "SpyDishTest helped us adjust our prices in real time and boosted revenue by fifteen percent in one month.",
    author: "Maria P, Bistro Owner"
  },
  {
    quote:
      "The personalized dish recommendations made dining out exciting again.",
    author: "Alex G, Foodie"
  },
  {
    quote:
      "Heatmaps revealed peak demand hours allowing us to optimize staffing.",
    author: "James L, Restaurant Manager"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Success Stories
        </h2>
        <div className="space-y-12">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="relative p-8 bg-brandBg rounded-lg shadow-inner"
            >
              <p className="text-lg md:text-xl italic mb-4">{t.quote}</p>
              <footer className="font-semibold">{t.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
