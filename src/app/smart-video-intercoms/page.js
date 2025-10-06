"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaShieldAlt,
  FaBrain,
  FaBell,
  FaVideo,
  FaUserCheck,
  FaCloud,
  FaUsers,
} from "react-icons/fa";
import { MdRecordVoiceOver } from "react-icons/md";
import { BiFace } from "react-icons/bi"; // ✅ Better Face Recognition Icon

export default function SmartVideoIntercomsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24 text-center px-6 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Smart Video Intercoms
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl"
        >
          Over 20 years of expertise in delivering reliable, high-definition
          video intercom systems for homes, offices, and commercial properties.
        </motion.p>
      </section>

      {/* FUNCTION REALIZATION */}
      <section className="py-20 bg-blue-50 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-12"
        >
          Function Realization
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <MdRecordVoiceOver size={42} className="text-blue-600" />,
              title: "Call Recording",
              desc: "Automatically record and store all audio/video calls for safety and reference.",
            },
            {
              icon: <FaShieldAlt size={42} className="text-blue-600" />,
              title: "Security Monitoring",
              desc: "Real-time surveillance integration with camera feeds for enhanced security.",
            },
            {
              icon: <FaBrain size={42} className="text-blue-600" />,
              title: "Intelligent Call",
              desc: "Smart routing ensures you never miss important calls through AI-based detection.",
            },
            {
              icon: <FaBell size={42} className="text-blue-600" />,
              title: "Property Notice",
              desc: "Instant property notifications and alerts directly to your indoor unit or mobile app.",
            },
            {
              icon: <FaVideo size={42} className="text-blue-600" />,
              title: "Video Call",
              desc: "Two-way HD video calling between residents, visitors, and management units.",
            },
            {
              icon: <FaUsers size={42} className="text-blue-600" />,
              title: "Visitor Management",
              desc: "Log, verify, and manage visitor access with real-time approval and records.",
            },
            {
              icon: <BiFace size={42} className="text-blue-600" />, // ✅ Updated Better Icon
              title: "Face Recognition",
              desc: "Instant biometric face detection with liveness check and ultra-fast accuracy.",
            },
            {
              icon: <FaCloud size={42} className="text-blue-600" />,
              title: "Cloud Intercom",
              desc: "Connect and communicate securely over the cloud anytime, anywhere.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-transform hover:scale-105"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-blue-700"
          >
            S-Series Products
          </motion.h2>
          <p className="text-slate-600 mt-4 text-lg">
            Designed for reliability, security, and intelligent user interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Outdoor Station SO801",
              desc: "2MP HD camera, 8-inch IPS display (800×1280), multiple-face detection, tracking, liveness, and mask recognition. Supports 10,000-person database with <25ms recognition speed and 0.1% error rate.",
              model: "Model SO801",
              img: "/so801.jpg",
            },
            {
              title: "Mini Outdoor Station SO001",
              desc: "Compact design for small installations while maintaining full communication functionality and durability.",
              model: "Model SO001",
              img: "/so001.jpg",
            },
            {
              title: "Guard Unit SIA01",
              desc: "10-inch IPS display (1280×800), one-click emergency unlocking, remote unlocking of outdoor/fence units, and live monitoring of cameras.",
              model: "Model SIA01",
              img: "/sia01.jpg",
            },
            {
              title: "7-inch Indoor Monitor SI701",
              desc: "High-definition RGB display (1024×600), Wi-Fi cloud intercom, POE power, 8 defense zones, and smart home integration.",
              model: "Model SI701",
              img: "/si701.jpg",
            },
            {
              title: "10-inch Monitor SIA02",
              desc: "SIP-based main device for video door phone systems supporting video calls, unlocking, and real-time monitoring.",
              model: "Model SIA02",
              img: "/sia02.jpg",
            },
          ].map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative h-56 bg-gray-200">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">
                  {product.title}
                </h3>
                <p className="text-slate-700 mb-3">{product.desc}</p>
                <span className="font-semibold text-blue-600">
                  {product.model}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-10"
          >
            Why Choose ACL Smart Solutions
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaShieldAlt size={40} />,
                title: "Trusted Expertise",
                desc: "Over two decades of experience in delivering high-performance intercom and automation systems.",
              },
              {
                icon: <FaPhoneAlt size={40} />,
                title: "Smart Integration",
                desc: "Seamless connection with home automation, security, and access control systems.",
              },
              {
                icon: <FaCloud size={40} />,
                title: "Reliable Support",
                desc: "Comprehensive customer care and technical assistance throughout installation and use.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 rounded-2xl p-8 shadow-lg"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
