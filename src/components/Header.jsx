"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 shadow-md py-2"
          : "bg-white shadow-sm py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ACLSS Logo"
            width={scrolled ? 40 : 70}
            height={scrolled ? 40 : 70}
            className="rounded transition-all duration-300"
            priority
          />
          <span
            className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? "text-white" : "text-blue-600"
            }`}
          >
            Smart Solutions Ltd
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex gap-6 font-medium transition-colors duration-300 ${
            scrolled ? "text-white" : "text-black"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? scrolled
                      ? "text-sky-300 font-semibold"
                      : "text-blue-600 font-semibold"
                    : scrolled
                    ? "hover:text-sky-300"
                    : "hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
              {/* Underline animation + active state */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-sky-300 transition-all duration-300 ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded focus:outline-none ${
            scrolled ? "text-white" : "text-blue-600"
          }`}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden shadow-lg ${
              scrolled
                ? "bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white"
                : "bg-white text-black"
            }`}
          >
            <ul className="flex flex-col items-center gap-4 py-6 font-medium">
              {navItems.map((item) => (
                <li key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`transition-colors ${
                      pathname === item.href
                        ? scrolled
                          ? "text-sky-300 font-semibold"
                          : "text-blue-600 font-semibold"
                        : scrolled
                        ? "hover:text-sky-300"
                        : "hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-sky-300 transition-all duration-300 ${
                      pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
