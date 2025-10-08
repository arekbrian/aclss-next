"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  FaWhatsapp,
  FaArrowUp,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6"
import { useState, useEffect } from "react"

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Main Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          {/* Company Branding */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start gap-3 mb-3"
            >
              <Image
                src="/logo.jpg" // ✅ replace with your logo
                alt="ACL Smart Solutions Logo"
                width={50}
                height={50}
                className="rounded-md"
              />
              <h2 className="text-white text-2xl font-bold">
                Smart Solutions
              </h2>
            </Link>
            <p className="text-gray-400 text-sm">
              The Future is SMART, Are You? <br />
              Innovative automation & security solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Contact"].map((link, idx) => {
                const href =
                  link === "Home"
                    ? "/"
                    : `/${link.toLowerCase().replace(/\s+/g, "")}`
                return (
                  <li key={idx}>
                    <Link href={href} className="relative group transition">
                      {link}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaPhone /> (+254) 713-588-308
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope /> info@aclss.co.ke
              </li>
            </ul>
          </div>

          {/* Socials + WhatsApp */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-3">Connect With Us</h3>
            <div className="flex justify-center md:justify-start gap-3 mb-4">
              {[
                {
                  icon: <FaLinkedin size={20} />,
                  href: "https://www.linkedin.com",
                  hover: "hover:bg-blue-600",
                },
                {
                  icon: <FaEnvelope size={20} />,
                  href: "mailto:info@aclss.co.ke",
                  hover: "hover:bg-red-500",
                },
                {
                  icon: <FaWhatsapp size={20} />,
                  href: "https://wa.me/254713588308",
                  hover: "hover:bg-green-600",
                },
                {
                  icon: <FaFacebookF size={20} />,
                  href: "https://www.facebook.com/profile.php?id=61566529975376",
                  hover: "hover:bg-blue-700",
                },
                {
                  icon: <FaXTwitter size={20} />,
                  href: "https://x.com",
                  hover: "hover:bg-gray-500",
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-gray-800 rounded-full transition ${social.hover}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Chat with Us Button */}
            <Link
              href="https://wa.me/254713588308"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105"
            >
              <FaWhatsapp size={22} />
              Chat with Us
            </Link>
          </div>
        </div>

        {/* Copyright Strip */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} ACL Smart Solutions Ltd. All rights reserved.{" "}
          Designed by{" "}
          <Link
            href="https://arekbrian.github.io/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Brian Arek
          </Link>
        </div>
      </motion.footer>

      {/* Scroll-to-top button */}
      {showScroll && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </>
  )
}
