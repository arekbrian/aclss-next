"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaHome, FaLightbulb, FaVideo } from "react-icons/fa"

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
    duration: 1500,
  })

  // Auto play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 4000)
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Smart ICT Solutions with ACLSS 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 max-w-2xl text-lg md:text-xl"
        >
          We deliver innovative, efficient, and scalable solutions to keep your
          business ahead.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/services"
            className="bg-white text-blue-600 px-6 py-3 rounded-full shadow hover:scale-105 hover:bg-blue-50 transition"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="bg-blue-800 px-6 py-3 rounded-full shadow hover:scale-105 hover:bg-blue-900 transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>

      {/* SPLIT SECTION */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Carousel */}
          <motion.div
            ref={sliderRef}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="keen-slider rounded-xl overflow-hidden shadow-xl max-w-xl md:max-w-2xl mx-auto h-72 md:h-96"
          >
            <div className="keen-slider__slide">
              <Image
                src="/carousel1.jpg"
                alt="Smart Home 1"
                width={800}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="keen-slider__slide">
              <Image
                src="/carousel2.jpg"
                alt="Smart Home 2"
                width={800}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="keen-slider__slide">
              <Image
                src="/carousel3.jpg"
                alt="Smart Home 3"
                width={800}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
              Empowering Smart Living Solutions
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              <span className="font-semibold text-blue-600">
                ACL Smart Solutions
              </span>{" "}
              is a leading provider of innovative smart home automation and a{" "}
              <span className="font-semibold text-blue-600">
                Certified KNX Partner
              </span>{" "}
              providing all KNX Smart Home products in Kenya.
              <br />
              <br />
              As one of Kenya’s earliest high-tech enterprises, ACL Smart
              Solutions is dedicated to providing smart home and building
              intercom system products and services for global high-end
              residential and commercial spaces.
            </p>
            <Link
              href="/about"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW SECTION */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 animate-gradient-x"></div>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-blue-700 mb-12"
          >
            Our Key Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Smart Home */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <FaHome className="text-5xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Smart Home</h3>
              <p className="text-gray-600 mb-4">
                Providing highly stable smart home systems specifically designed
                for high-end residences and commercial spaces.
              </p>
              <Link href="/services" className="text-blue-600 font-medium hover:underline">
                Learn More →
              </Link>
            </motion.div>

            {/* Card 2 - Smart Lighting */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <FaLightbulb className="text-5xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Smart Lighting</h3>
              <p className="text-gray-600 mb-4">
                Achieving intelligent and efficient control of lighting through the
                K-BUS smart control system, delivering an energy-saving,
                customizable, and stable lighting environment.
              </p>
              <Link href="/services" className="text-blue-600 font-medium hover:underline">
                Learn More →
              </Link>
            </motion.div>

            {/* Card 3 - Smart Video Intercoms */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <FaVideo className="text-5xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Smart Video Intercoms</h3>
              <p className="text-gray-600 mb-4">
                Customized solutions for analog and digital intercom systems with
                high performance and cost-effectiveness backed by a diverse product
                portfolio.
              </p>
              <Link href="/services" className="text-blue-600 font-medium hover:underline">
                Learn More →
              </Link>
            </motion.div>
          </div>

          {/* View All Services Button */}
          <div className="mt-12">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT US PREVIEW SECTION */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 via-white to-gray-100 px-6 overflow-hidden">
        {/* Decorative wave background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg
            className="absolute bottom-0 left-0 w-full h-40 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              d="M0,160L60,186.7C120,213,240,267,360,272C480,277,600,235,720,213.3C840,192,960,192,1080,213.3C1200,235,1320,277,1380,298.7L1440,320L1440,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/about-preview.jpg"
              alt="About ACLSS"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              About Us
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Empowering Smart Living Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              ACL Smart Solutions is a leading provider of innovative smart home
              automation and a Certified KNX Partner in Kenya. With expertise in smart
              security systems, home automation, POS systems, and access controls, we
              deliver cutting-edge technology that makes your space smarter, safer,
              and more efficient.
            </p>

            {/* Highlights */}
            <ul className="grid sm:grid-cols-2 gap-4 mb-6 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-blue-600 text-lg">✔</span> Smart Security &
                Automation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 text-lg">✔</span> POS & Biometric
                Systems
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 text-lg">✔</span> Professional Expertise
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600 text-lg">✔</span> Trusted in Kenya &
                beyond
              </li>
            </ul>

            <Link
              href="/about"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
