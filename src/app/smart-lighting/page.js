"use client"
import Image from "next/image"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaLightbulb, FaBolt, FaHome, FaLeaf } from "react-icons/fa"

// ✅ Counter Component
function Counter({ from = 0, to, duration = 2 }) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.floor(latest))

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: "easeOut" })
    return controls.stop
  }, [count, to, duration])

  return <motion.span>{rounded}</motion.span>
}

export default function SmartLightingPage() {
  // ✅ Keen slider setup for testimonials
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    duration: 1200,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 5000)
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24 text-center px-6 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Smart Lighting Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl"
        >
          Brighten your spaces intelligently — lighting that adapts, saves energy,
          and enhances comfort for modern living and smart environments.
        </motion.p>
      </section>

      {/* OVERVIEW 1 */}
      <section className="py-20 bg-blue-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/smart-lighting.jpg"
              alt="Smart Lighting System"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
              Smart Lighting
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              At ACL Smart Solutions, we bring cutting-edge lighting technology
              that blends automation, efficiency, and elegance. Our Smart Lighting
              Systems adapt to your environment, giving you control, comfort, and
              significant energy savings.
              <br />
              <br />
              Achieving intelligent and efficient lighting automation through 
              the K-BUS smart control system, providing users with an 
              energy-saving, efficient, customizable, and stable lighting environment.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Request a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW 2 - Smart Switching */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text first, image second */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
              Smart Switching
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              Controlled by smart screen, smart panel, mobile APP, etc. 
              Provides flexibility for both individual and group lighting fixture control.
              <br />
              <br />
              Our ultimate goal is to achieve lighting automation with just one click.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/smart-switching.jpg"
              alt="Smart Switching"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW 3 - Smart Dimming */}
      <section className="py-20 bg-blue-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image first, text second */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/smart-dimming.jpg"
              alt="Smart Dimming"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
              Smart Dimming
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              0~100% lighting brightness adjustment. <br />
              2700-6500K lighting color temperature adjustment. <br />
              Colorful variations of red, orange, yellow, green, cyan, blue, and purple.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SMART LIGHTING BY SCENES */}
      <section className="py-20 bg-white px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
            Smart Lighting by Scenes
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Preset multiple scenarios in advance according to needs.
            <br />
            All scene requirements can be switched instantly with one key.
            <br />
            Let the light and shadow move with your heart.
          </p>
          <h2 className="text-blue-700 font-semibold text-xl mb-10">
            K-BUS Smart Lighting System
          </h2>

          {/*K-BUS IMAGE PLACEHOLDER */}
          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/kbus-lighting.jpg" 
              alt="K-BUS Smart Lighting System"
              width={900}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our Smart Lighting?
          </h2>
          <p className="text-gray-600 text-lg">
            Experience innovation, sustainability, and total control over your
            lighting environment.
          </p>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaLightbulb size={40} className="text-blue-600" />,
              title: "Energy Efficient",
              desc: "Reduce your power bills with adaptive LED lighting systems.",
            },
            {
              icon: <FaHome size={40} className="text-blue-600" />,
              title: "Smart Home Integration",
              desc: "Control lighting via mobile app, Alexa, or Google Assistant.",
            },
            {
              icon: <FaBolt size={40} className="text-blue-600" />,
              title: "Full Automation",
              desc: "Set schedules, motion triggers, and brightness automation.",
            },
            {
              icon: <FaLeaf size={40} className="text-blue-600" />,
              title: "Eco-Friendly Design",
              desc: "Promote sustainability through smart energy use and LEDs.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Light Up Your Space the Smart Way?
        </motion.h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Transform your environment with intelligent, automated lighting systems
          designed by ACL Smart Solutions. Smart, efficient, and elegant.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-100 transition"
        >
          Get Started
        </Link>
      </section>
    </>
  )
}
