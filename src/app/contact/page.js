"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaUser, 
  FaRegEnvelope, 
  FaCommentDots 
} from "react-icons/fa"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [successMsg, setSuccessMsg] = useState("")

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required."
        break
      case "email":
        if (!value.trim()) return "Email is required."
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return "Invalid email format."
        break
      case "message":
        if (!value.trim()) return "Message is required."
        break
      default:
        return ""
    }
    return ""
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccessMsg("") // clear old success

    const newErrors = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    const toastId = toast.loading("Sending your message...")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast.success("✅ Thank you! Your message has been sent.", { id: toastId })
        setFormData({ name: "", email: "", message: "" })
        setErrors({})
        setSuccessMsg("✅ Thank you! Your message has been successfully sent. We’ll get back to you soon.")
      } else {
        toast.error("❌ Failed to send message. Please try again later.", { id: toastId })
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong. Please try again.", { id: toastId })
    }

    setLoading(false)
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  }

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
        min-h-[50vh] flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl"
        >
          Let’s talk about how ACL Smart Solutions can help make your space
          smarter, safer, and more connected.
        </motion.p>
      </section>

      {/* CONTACT INFO */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <FaMapMarkerAlt className="text-3xl text-blue-600 mx-auto mb-4" />,
              title: "Address",
              lines: ["ACL Smart Solutions", " 28th Street, Kijabe, Kenya"],
            },
            {
              icon: <FaPhoneAlt className="text-3xl text-green-600 mx-auto mb-4" />,
              title: "Phone",
              lines: [
                <a key="1" href="tel:+254713588308" className="block text-gray-600 hover:text-blue-600">
                  (+254) 713-588-308
                </a>,
                <a key="2" href="tel:+254783588308" className="block text-gray-600 hover:text-blue-600">
                  (+254) 783-588-308
                </a>,
              ],
            },
            {
              icon: <FaEnvelope className="text-3xl text-red-500 mx-auto mb-4" />,
              title: "Email",
              lines: [
                <a key="1" href="mailto:info@aclss.co.ke" className="block text-gray-600 hover:text-blue-600">
                  info@aclss.co.ke
                </a>,
                <a key="2" href="mailto:customer@aclss.co.ke" className="block text-gray-600 hover:text-blue-600">
                  customer@aclss.co.ke
                </a>,
                <a key="3" href="mailto:jonah.kyathe@aclss.co.ke" className="block text-gray-600 hover:text-blue-600">
                  jonah.kyathe@aclss.co.ke
                </a>,
              ],
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {card.icon}
              <h3 className="font-semibold text-lg text-blue-700">{card.title}</h3>
              <div className="mt-2 text-gray-600">{card.lines}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Send Us a Message</h2>
            
            {successMsg && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm">
                {successMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <FaUser className="absolute left-3 top-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`peer w-full pl-10 pr-4 pt-5 pb-2 border rounded-lg shadow-sm focus:ring-2 
                    focus:ring-blue-500 focus:border-blue-500 text-gray-900 outline-none transition ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder=" "
                />
                <label className="absolute left-10 top-2.5 text-gray-500 text-sm transition-all 
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                  peer-focus:top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                  Your Name
                </label>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="relative">
                <FaRegEnvelope className="absolute left-3 top-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`peer w-full pl-10 pr-4 pt-5 pb-2 border rounded-lg shadow-sm focus:ring-2 
                    focus:ring-blue-500 focus:border-blue-500 text-gray-900 outline-none transition ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder=" "
                />
                <label className="absolute left-10 top-2.5 text-gray-500 text-sm transition-all 
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                  peer-focus:top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                  Your Email
                </label>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div className="relative">
                <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`peer w-full pl-10 pr-4 pt-5 pb-2 border rounded-lg shadow-sm focus:ring-2 
                    focus:ring-blue-500 focus:border-blue-500 text-gray-900 outline-none transition resize-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder=" "
                />
                <label className="absolute left-10 top-2.5 text-gray-500 text-sm transition-all 
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                  peer-focus:top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">
                  Your Message
                </label>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg h-[450px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8262427108716!2d36.8181253!3d-1.2777412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172cf7782fab%3A0xab9f793eddab1214!2sKijabe%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1759553522749!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  )
}
