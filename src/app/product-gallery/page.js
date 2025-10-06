"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ProductGallery() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24 text-center px-6 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Product Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mt-6 max-w-3xl mx-auto text-lg md:text-xl"
        >
          Explore our collection of smart living products — built to make homes
          safer, more efficient, and intelligent.
        </motion.p>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-20 bg-blue-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "/gallery1.jpg",
            "/gallery2.jpg",
            "/gallery3.jpg",
            "/gallery4.jpg",
            "/gallery5.jpg",
            "/gallery6.jpg",
            "/gallery7.jpg",
            "/gallery8.jpg",
            "/gallery9.jpg",
            "/gallery10.jpg",
            "/gallery11.jpg",
            "/gallery12.jpg",
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <Image
                src={src}
                alt={`Product ${index + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
