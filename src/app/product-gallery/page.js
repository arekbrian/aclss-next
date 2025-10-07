"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function ProductGallery() {
  // ✅ Support for mixed file formats
  const images = [
    "/product-gallery/gallery1.jpg",
    "/product-gallery/gallery2.jpg",
    "/product-gallery/gallery3.jpg",
    "/product-gallery/gallery4.jpg",
    "/product-gallery/gallery5.webp",
    "/product-gallery/gallery6.jpg",
    "/product-gallery/gallery7.jpg",
    "/product-gallery/gallery8.jpg",
    "/product-gallery/gallery9.jpg",
    "/product-gallery/gallery10.jpg",
    "/product-gallery/gallery11.jpg",
    "/product-gallery/gallery12.jpg",
    "/product-gallery/gallery13.jpg",
    "/product-gallery/gallery14.jpg",
    "/product-gallery/gallery15.webp",
    "/product-gallery/gallery16.webp",
    "/product-gallery/gallery17.webp",
    "/product-gallery/gallery18.webp",
    "/product-gallery/gallery19.webp",
    "/product-gallery/gallery20.jpg",
    "/product-gallery/gallery21.webp",
    "/product-gallery/gallery22.webp",
    "/product-gallery/gallery23.webp",
    "/product-gallery/gallery24.webp",
    "/product-gallery/gallery25.webp",
    "/product-gallery/gallery26.webp",
    "/product-gallery/gallery27.webp",
    "/product-gallery/gallery28.webp",
    "/product-gallery/gallery29.webp",
    "/product-gallery/gallery30.webp",
    "/product-gallery/gallery31.webp",
    "/product-gallery/gallery32.webp",
    "/product-gallery/gallery33.jpg",
    "/product-gallery/gallery34.webp",
  ]

  const [selectedImage, setSelectedImage] = useState(null)

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
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMAGE MODAL VIEW */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full view"
                width={800}
                height={600}
                className="rounded-2xl object-contain w-full h-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 bg-white/90 text-black px-3 py-1 rounded-full shadow-md font-semibold hover:bg-white"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
