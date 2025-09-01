import React from "react"
import {
  HiOutlineChartBar,
  HiOutlineAnnotation,
  HiOutlineMap
} from "react-icons/hi"

const features = [
  {
    icon: <HiOutlineChartBar size={40} className="text-brandFigure" />,
    title: "Data Analysis Suite",
    desc:
      "Competitor pricing, dish ranking, sentiment analytics and heatmaps that reveal demand trends"
  },
  {
    icon: <HiOutlineAnnotation size={40} className="text-brandFigure" />,
    title: "AI Driven Campaigns",
    desc:
      "Automated notifications and smart pricing suggestions to boost engagement"
  },
  {
    icon: <HiOutlineMap size={40} className="text-brandFigure" />,
    title: "Weekly Executive Reports",
    desc:
      "Receive competitive insights and key trends straight to your inbox"
  }
]

export default function Restaurants() {
  return (
    <section className="py-20 bg-brandBg">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          For Restaurants
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition bg-white"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm md:text-base">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-brandFigure hover:bg-brandTitle text-white px-8 py-3 rounded-full text-lg font-semibold transition"
          >
            Subscribe to Pro Plan
          </a>
        </div>
      </div>
    </section>
  )
}
