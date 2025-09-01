import React from "react"
import { MdRestaurantMenu, MdRateReview, MdSearch } from "react-icons/md"

const features = [
  {
    icon: <MdSearch size={40} className="text-brandFigure" />,
    title: "Explore Restaurants",
    desc: "Discover dining spots tailored to your taste and location"
  },
  {
    icon: <MdRestaurantMenu size={40} className="text-brandFigure" />,
    title: "Featured Menus",
    desc: "Find trending dishes and curated menus near you"
  },
  {
    icon: <MdRateReview size={40} className="text-brandFigure" />,
    title: "Read Authentic Reviews",
    desc: "Gain insights from real diners to elevate your experience"
  }
]

export default function Diners() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          For Diners
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition bg-brandBg"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm md:text-base">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <img
            src="https://images.pexels.com/photos/2792181/pexels-photo-2792181.jpeg"
            alt="Chat demo"
            className="w-full md:w-2/3 rounded-lg shadow-lg"
          />
          <p className="text-sm mt-4 text-slate-600">
            Example of a personalized chat with the SpyDishTest bot
          </p>
        </div>
      </div>
    </section>
  )
}
