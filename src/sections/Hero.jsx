import React from "react"
import { FaWhatsapp } from "react-icons/fa"

export default function Hero() {
  return (
    <header
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl px-6 fade-in-up">
        <img
          src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png"
          alt="SpyDishTest logo"
          className="mx-auto w-28 h-auto mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-brandTitle">
          SpyDishTest
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          An innovative WhatsApp bot connecting diners with restaurants while
          delivering intelligent data to businesses
        </p>
        <a
          href="https://wa.me/11234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-full text-lg font-semibold transition"
        >
          <FaWhatsapp size={24} /> Start Now
        </a>
      </div>
    </header>
  )
}
