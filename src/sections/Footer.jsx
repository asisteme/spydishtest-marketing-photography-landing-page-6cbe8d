import React from "react"
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-brandFigure text-white py-12">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">SpyDishTest</h3>
          <p className="text-sm">
            Transforming dining with data driven insights and delightful
            experiences
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:dasdas@gmail.com" className="hover:underline">
                Email Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-emerald-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-emerald-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-emerald-400">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-8">
        © {new Date().getFullYear()} SpyDishTest. All rights reserved.
      </div>
    </footer>
  )
}
