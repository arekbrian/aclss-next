"use client"
import Image from "next/image"
import { useEffect } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"

/* -------------------------
   Counter component (animated)
------------------------- */
function Counter({ from = 0, to, duration = 2 }) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.floor(latest))

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: "easeOut" })
    return controls.stop
  }, [count, to, duration])

  return <motion.span>{rounded}</motion.span>
}

/* -------------------------
   Services Data
------------------------- */
const services = [
  {
    key: "smart-home",
    title: "Smart Home",
    short:
      "Highly stable smart home systems for high-end residences and commercial spaces.",
    image: "/services/smart-home.jpg",
  },
  {
    key: "smart-lighting",
    title: "Smart Lighting",
    short:
      "Intelligent K-BUS lighting control providing energy-saving and customizable solutions.",
    image: "/services/smart-lighting.jpg",
  },
  {
    key: "smart-video",
    title: "Smart Video Intercoms",
    short:
      "Customized analog & digital intercom solutions ensuring cost-effectiveness and high performance.",
    image: "/services/smart-intercom.jpg",
  },
  {
    key: "smart-curtains",
    title: "Smart Curtains",
    short:
      "Classy curtain automation for double volumes and high ceilings. Works with Alexa, Google, Tuya and wireless control.",
    image: "/services/smart-curtains.jpg",
  },
  {
    key: "hvac",
    title: "HVAC Systems",
    short:
      "Heating, Ventilation, and Air Conditioning systems for full home comfort, air quality, and humidity control.",
    image: "/services/hvac.jpg",
  },
  {
    key: "access-control",
    title: "Access Control",
    short:
      "Manage access to buildings, rooms, and assets with identity-based customized security levels.",
    image: "/services/access-control.jpg",
  },
  {
    key: "integrated-security",
    title: "Integrated Security Systems",
    short:
      "Centralized platform integrating alarms, access, and video surveillance for enhanced protection.",
    image: "/services/integrated-security.jpg",
  },
  {
    key: "smart-music",
    title: "Smart Music Automation",
    short:
      "Handsfree music automation to integrate with your lifestyle, ensuring your home always has the perfect soundtrack.",
    image: "/services/smart-music.jpg",
  },
  {
    key: "support",
    title: "Support & Consulting",
    short:
      "Business consulting, mentorship programs, and funding support to help businesses thrive.",
    image: "/services/support.jpg",
  },
]

/* -------------------------
   FAQs
------------------------- */
const faqs = [
  {
    q: "Are your systems compatible with Alexa & Google Home?",
    a: "Yes ✅, our automation systems integrate seamlessly with Alexa, Google Assistant, and Tuya platforms.",
  },
  {
    q: "How much does smart home automation cost?",
    a: "Costs depend on scope, but we offer scalable solutions for both small apartments and large commercial projects.",
  },
  {
    q: "Do you provide after-sales support?",
    a: "Absolutely. We provide training, maintenance, and 24/7 support for all clients.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Smart Home
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl"
        >
          Specializing in providing stable smart home systems for high-end residential and commercial spaces
        </motion.p>
      </section>

      {/* MAIN SERVICES GRID */}
      <section className="py-20 bg-gray-50 px-6 relative overflow-hidden">
        {/* floating background glow */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),transparent_70%)]"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow hover:shadow-2xl transition overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden">
                <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.4 }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-700 flex-1">{service.short}</p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center"
                >
                  {/* Request Demo → */}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMPACT COUNTERS */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white px-6">
        <div className="max-w-7xl mx-auto text-center grid md:grid-cols-3 gap-10">
          <motion.div whileHover={{ scale: 1.1 }} className="p-6">
            <p className="text-5xl font-extrabold">
              <Counter to={500} />+
            </p>
            <p className="mt-2 text-lg">Projects Completed</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="p-6">
            <p className="text-5xl font-extrabold">
              <Counter to={20} />+
            </p>
            <p className="mt-2 text-lg">Industries Served</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="p-6">
            <p className="text-5xl font-extrabold">
              <Counter to={100} />%
            </p>
            <p className="mt-2 text-lg">Commitment to Quality</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow cursor-pointer"
              >
                <summary className="font-semibold text-lg text-blue-700 cursor-pointer">
                  {faq.q}
                </summary>
                <p className="mt-2 text-slate-700">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <motion.section
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="relative py-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-[length:200%_200%] text-white text-center px-6 overflow-hidden"
      >
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative text-3xl md:text-4xl font-bold mb-8"
        >
          Ready to Experience Smart Living?
        </motion.h2>
        <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
          >
            📩 Contact Us
          </a>
          <motion.a
            href="https://wa.me/254713588308"
            target="_blank"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-600 transition"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            💬 Chat on WhatsApp
          </motion.a>
          <a
            href="/company-profile.pdf"
            download
            className="bg-yellow-200 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-500 transition"
          >
            📄 Download Profile
          </a>
        </div>
      </motion.section>
    </>
  )
}
