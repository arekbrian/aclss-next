"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, use } from "react"
import { FaChevronRight } from "react-icons/fa6"
import products from "@/data/products"

export default function ProductDetail({ params }) {
  const resolvedParams = use(params)

  const [showSticky, setShowSticky] = useState(false)
  const [related, setRelated] = useState([])
  const [product, setProduct] = useState(null)

  // ✅ Set product once params resolve
  useEffect(() => {
    const found = products.find((p) => p.key === resolvedParams.slug)
    setProduct(found || null)
  }, [resolvedParams.slug])

  // ✅ Scroll handler
  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 200)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ✅ Related products
  useEffect(() => {
    if (product) {
      const randomized = products
        .filter((p) => p.key !== product.key)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
      setRelated(randomized)
    }
  }, [product])

  // ✅ If no product found after mounting
  if (product === null) return null
  if (!product) return notFound()

  // ✅ Structured data
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.title,
    description: product.short,
    image: product.image,
    brand: {
      "@type": "Organization",
      name: "ACL Smart Solutions Ltd",
    },
    offers: {
      "@type": "Offer",
      url: `https://aclss.co.ke/products/${product.key}`,
      priceCurrency: "KES",
      availability: "https://schema.org/InStock",
    },
  }

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          {product.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl"
        >
          {product.short}
        </motion.p>
      </section>

      {/* BREADCRUMB */}
      <div className="bg-gray-100 py-4 px-6 text-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-600">
          <Link href="/" className="hover:text-blue-600 font-medium">
            Home
          </Link>
          <FaChevronRight size={12} />
          <Link href="/products" className="hover:text-blue-600 font-medium">
            Products
          </Link>
          <FaChevronRight size={12} />
          <span className="text-blue-700 font-semibold">{product.title}</span>
        </div>
      </div>

      {/* PRODUCT DETAIL */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={400}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              About {product.title}
            </h2>
            <ul className="list-disc list-inside space-y-3 text-slate-700">
              {product.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>

            <div className="mt-8 flex gap-4 flex-wrap">
              {product.button && (
                <Link
                  href={product.button.href}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
                >
                  {product.button.label}
                </Link>
              )}

              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
              >
                Contact Sales
              </Link>

              <Link
                href="/products"
                className="bg-gray-200 text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-300 transition"
              >
                ← Back to Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Related Products
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {related.map((rel, idx) => (
              <motion.div
                key={rel.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow hover:shadow-2xl transition overflow-hidden flex flex-col"
              >
                <Image
                  src={rel.image}
                  alt={rel.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-blue-700 mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-slate-600 flex-1">{rel.short}</p>
                  <Link
                    href={`/products/${rel.key}`}
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY CTA */}
      {showSticky && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full bg-white shadow-inner border-t border-gray-200 flex sm:hidden z-50"
        >
          <Link
            href="/contact"
            className="flex-1 text-center bg-blue-600 text-white py-4 font-semibold hover:bg-blue-700 transition"
          >
            Request Quote
          </Link>
          <a
            href="tel:+254713588308"
            className="flex-1 text-center bg-green-500 text-white py-4 font-semibold hover:bg-green-600 transition"
          >
            Call Us
          </a>
        </motion.div>
      )}
    </>
  )
}
