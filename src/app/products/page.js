"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaSearch, FaFilter } from "react-icons/fa" // ✅ icons
import products from "@/data/products"

export default function ProductsPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")

  // ✅ Extract unique categories
  const categories = ["all", ...new Set(products.map((p) => p.category))]

  // ✅ Filtered products based on search + category
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.short.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === "all" || p.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Our Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl"
        >
          Explore our range of KNX-certified smart automation products built for smarter,
          safer, and more efficient living.
        </motion.p>
      </section>

      {/* FILTERS */}
      <section className="bg-gray-50 py-10 px-6 border-b">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Search Bar with Icon */}
          <div className="relative w-full md:w-1/2">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg shadow-sm 
                         focus:ring-2 focus:ring-blue-500 outline-none
                         text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Category Dropdown with Icon */}
          <div className="relative">
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="pl-10 pr-4 py-3 border rounded-lg shadow-sm 
                         focus:ring-2 focus:ring-blue-500 outline-none
                         text-gray-900"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c.charAt(0).toUpperCase() + c.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <motion.div
                key={product.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow hover:shadow-2xl transition overflow-hidden flex flex-col"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">{product.title}</h3>
                  <p className="text-slate-700 flex-1">{product.short}</p>
                  <Link
                    href={`/products/${product.key}`}
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-600">
              No products found matching your search.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white text-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Looking for Full Product Catalog?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Get detailed specifications and options for all ACL Smart Solutions KNX-certified products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/company-profile.pdf"
            download
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
          >
            📄 Download Catalog
          </a>
          <Link
            href="/contact"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-600 transition"
          >
            💬 Request a Quote
          </Link>
        </div>
      </motion.section>
    </>
  )
}
