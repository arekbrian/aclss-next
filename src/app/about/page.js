"use client"
import Image from "next/image"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import {
  FaShieldAlt,
  FaTools,
  FaUsers,
  FaGlobe,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa"

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

export default function AboutPage() {
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
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24 text-center px-6 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          About ACL Smart Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mt-6 max-w-3xl mx-auto text-lg md:text-xl"
        >
          Empowering smarter, safer, and more connected living through
          cutting-edge smart solutions in Kenya and beyond.
        </motion.p>
      </section>

      {/* COMPANY OVERVIEW */}
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
              src="/about-team.jpg"
              alt="Our Team at ACLSS"
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
              Who We Are
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              ACL Smart Solutions is a leading provider of smart home automation
              and certified KNX partner in Kenya. As one of Kenya’s earliest
              high-tech enterprises, we deliver innovative solutions for smart
              homes, security systems, and commercial automation.
              <br />
              <br />
              From smart electric fences and access controls to POS systems and
              intercoms, we integrate the latest technology to ensure safety,
              efficiency, and seamless living experiences.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Talk to Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MISSION, VISION, VALUES */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
            Our Mission, Vision & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl text-blue-700 mb-4">🎯 Mission</h3>
              <p className="text-slate-700">
                To empower individuals and businesses with intelligent, secure, and sustainable smart solutions.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl text-blue-700 mb-4">🌍 Vision</h3>
              <p className="text-slate-700">
                To be the leading provider of smart automation solutions in Africa, aligned with global standards.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl text-blue-700 mb-4">💡 Values</h3>
              <p className="text-slate-700">
                Innovation, reliability, integrity, and customer satisfaction drive everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPACT / STATS */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Impact in Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div whileHover={{ scale: 1.1 }} className="p-6">
              <p className="text-5xl font-extrabold"><Counter to={10} />+</p>
              <p className="mt-2 text-lg">Years of Experience</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="p-6">
              <p className="text-5xl font-extrabold"><Counter to={200} />+</p>
              <p className="mt-2 text-lg">Smart Homes Automated</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="p-6">
              <p className="text-5xl font-extrabold"><Counter to={15} />+</p>
              <p className="mt-2 text-lg">Corporate Partners</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="p-6">
              <p className="text-5xl font-extrabold"><Counter to={100} />%</p>
              <p className="mt-2 text-lg">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARTNERS & CERTIFICATIONS */}
      <section className="py-20 bg-blue-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
            Partners
          </h2>
          <div className="grid md:grid-cols-4 gap-8 items-center">
            {[
              { src: "/knx-logo.png", alt: "KNX Partner" },
              { src: "/itc-logo.jpg", alt: "ITC Partner" },
              { src: "/hikvision-logo.png", alt: "HikVision Partner" },
              { src: "/partner3.png", alt: "Partner 3" },
            ].map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={150}
                  height={100}
                  className="mx-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
            What Our Clients Say
          </h2>
          <div ref={sliderRef} className="keen-slider">
            {[
              {
                text: "ACL Smart Solutions transformed our home into a fully automated smart house. Highly recommended!",
                author: "— Client A",
              },
              {
                text: "Their professionalism and innovation are unmatched in Kenya. The KNX system works flawlessly.",
                author: "— Client B",
              },
              {
                text: "The ACLSS team went above and beyond in installing access control and intercom systems for us.",
                author: "— Client C",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="keen-slider__slide flex flex-col justify-center items-center bg-blue-50 p-8 rounded-xl shadow min-h-[220px]"
              >
                <p className="italic text-slate-700 max-w-2xl leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <h4 className="mt-4 font-semibold text-blue-700">
                  {testimonial.author}
                </h4>
              </div>
            ))}
          </div>

          {/* ✅ Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition ${
                  currentSlide === idx ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
            Why Choose ACL Smart Solutions?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
              <FaShieldAlt className="text-5xl text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2 text-blue-700">Trusted Security</h3>
              <p className="text-slate-700">
                Reliable smart security solutions for safer homes & businesses.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
              <FaTools className="text-5xl text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2 text-blue-700">Expert Installation</h3>
              <p className="text-slate-700">
                Professional setup with precision, stability, and scalability.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
              <FaUsers className="text-5xl text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2 text-blue-700">Dedicated Team</h3>
              <p className="text-slate-700">
                A passionate team delivering quality and innovation every day.
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
              <FaGlobe className="text-5xl text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2 text-blue-700">Global Standards</h3>
              <p className="text-slate-700">
                We follow international standards for automation and KNX systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 bg-blue-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jonah Kyathe",
                role: "CEO & Founder",
                img: "/team1.jpg",
                linkedin: "#",
                email: "mailto:jonah.kyathe@aclss.com",
              },
              {
                name: "XXXX",
                role: "Marketing",
                img: "/team1.jpg",
                linkedin: "#",
                email: "mailto:xxxx@aclss.com",
              },
              {
                name: "YYYYYY",
                role: "Technical Director",
                img: "/team2.jpg",
                linkedin: "#",
                email: "mailto:yyy@aclss.com",
              },
              {
                name: "Michael Brown",
                role: "Smart Solutions Engineer",
                img: "/team3.jpg",
                linkedin: "#",
                email: "mailto:michael@aclss.com",
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.07 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition flex flex-col items-center transform hover:-translate-y-2"
              >
                <div className="relative group">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full object-cover mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-blue-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-blue-700">{member.name}</h3>
                <p className="text-slate-700 mb-3">{member.role}</p>
                <div className="flex gap-4">
                  <Link href={member.linkedin} target="_blank" className="text-blue-600 hover:text-blue-800">
                    <FaLinkedin size={24} />
                  </Link>
                  <Link href={member.email} className="text-red-500 hover:text-red-700">
                    <FaEnvelope size={24} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Ready to Make Your Space Smarter?
        </motion.h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
          >
            📩 Contact Us
          </Link>
          <Link
            href="https://wa.me/254700000000"
            target="_blank"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-600 transition"
          >
            💬 Chat on WhatsApp
          </Link>
          <a
            href="/company-profile.pdf"
            download
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-500 transition"
          >
            📄 Download Profile
          </a>
        </div>
      </section>
    </>
  )
}
