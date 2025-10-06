"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaMobileAlt,
  FaBolt,
  FaRegClock,
  FaBrain,
  FaTemperatureHigh,
  FaCloudSun,
  FaWifi,
  FaChartLine,
  FaPlug,
  FaLayerGroup,
} from "react-icons/fa";

export default function SmartThermostatPage() {
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
          Smart Thermostat Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl"
        >
          Experience intelligent climate control designed to maximize comfort,
          improve energy efficiency, and adapt to your lifestyle with just a tap.
        </motion.p>
      </section>

      {/* ABOUT SECTION */}
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
              src="/energy-saving.webp"
              alt="Smart Thermostat"
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
              Smarter Temperature, Smarter Living
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              Our Smart Thermostat system allows you to automatically control your
              home’s temperature with precision and ease. Whether you’re at home or away,
              you can manage your climate remotely and optimize energy usage for a greener tomorrow.
              <br />
              <br />
              Designed with advanced sensors and intelligent algorithms, the system learns your
              habits and adjusts in real-time for the perfect comfort level every time.
            </p>
            {/* <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Get a Free Consultation
            </Link> */}
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-white px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-12"
        >
          Key Features
        </motion.h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: <FaMobileAlt size={36} />,
              title: "Remote Control",
              desc: "Adjust your home temperature anywhere using your smartphone or tablet.",
            },
            {
              icon: <FaBolt size={36} />,
              title: "Energy Optimization",
              desc: "Save energy and reduce costs by learning your routines and adjusting automatically.",
            },
            {
              icon: <FaRegClock size={36} />,
              title: "Smart Scheduling",
              desc: "Set custom schedules for day and night to maintain the perfect climate 24/7.",
            },
            {
              icon: <FaBrain size={36} />,
              title: "AI Temperature Learning",
              desc: "Adapts intelligently to your preferences over time, enhancing comfort and savings.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-2xl shadow-md p-6 hover:bg-blue-100 transition"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ADDITIONAL SECTIONS */}
      <section className="py-20 bg-blue-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Versatile Compatibility */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/thermostat-compatibility.jpg"
              alt="Versatile Compatibility"
              width={600}
              height={400}
              className="rounded-xl shadow-xl mb-6"
            />
            <div className="flex items-center gap-3 mb-4">
              <FaPlug size={36} className="text-blue-600" />
              <h2 className="text-3xl font-bold text-blue-700">
                Versatile Compatibility
              </h2>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed">
              Supporting both wired and wireless installation, seamlessly integrates with
              various heating systems, including gas boilers, combi boilers, and heat pumps,
              ensuring compatibility and ease of use.
            </p>
          </motion.div>

          {/* Scalable for Smarter Home */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/thermostat-scalable.jpg"
              alt="Scalable Smart Home"
              width={600}
              height={400}
              className="rounded-xl shadow-xl mb-6"
            />
            <div className="flex items-center gap-3 mb-4">
              <FaLayerGroup size={36} className="text-blue-600" />
              <h2 className="text-3xl font-bold text-blue-700">
                Scalable for Smarter Home
              </h2>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed">
              Powered by GVS advanced M+O solution and compatibility with the Tuya system,
              the thermostat seamlessly integrates with existing smart home systems or acts
              as a foundation for expanding your intelligent control network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT MODELS SECTION */}
      <section className="py-20 bg-white px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-12"
        >
          Smart Thermostat Product Models
        </motion.h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              image: "/thermostat-st300.jpg",
              name: "Wi-Fi Smart Thermostat ST300",
              desc: "ST300 offers smart weather updates, advanced scheduling, mobile app control, and premium cloud alerts for HVAC service reminders.",
            },
            {
              image: "/thermostat-tj919t.jpg",
              name: "Wi-Fi Smart Thermostat TJ-919T",
              desc: "TJ-919T provides intelligent scheduling, mobile app control, and weather forecast integration for efficient home climate control.",
            },
            {
              image: "/thermostat-st100.jpg",
              name: "SmartTemp ST100 / ST200",
              desc: "Ideal for homes with gas boilers and heat pumps. ST200 supports wireless installations; ST100 is for wired-only setups.",
            },
            {
              image: "/thermostat-tj560.jpg",
              name: "Wi-Fi Smart Thermostat TJ-560",
              desc: "Features a 4-inch full touch screen, Alexa/Google compatibility, app and voice control, and energy-saving automation.",
            },
          ].map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <Image
                src={model.image}
                alt={model.name}
                width={400}
                height={300}
                className="object-cover w-full h-56"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">
                  {model.name}
                </h3>
                <p className="text-slate-700">{model.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-blue-50 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-12"
        >
          Why Choose Us
        </motion.h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: <FaTemperatureHigh size={36} />,
              title: "Precision Control",
              desc: "Advanced sensors ensure accurate temperature regulation in every room.",
            },
            {
              icon: <FaCloudSun size={36} />,
              title: "Weather Sync",
              desc: "Automatically adapts to outdoor weather changes for consistent comfort.",
            },
            {
              icon: <FaWifi size={36} />,
              title: "Seamless Integration",
              desc: "Works smoothly with other smart home devices via WiFi or K-BUS network.",
            },
            {
              icon: <FaChartLine size={36} />,
              title: "Energy Reports",
              desc: "Monitor energy consumption and receive reports for smarter energy management.",
            },
          ].map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 hover:bg-blue-100 transition"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="font-semibold text-xl text-slate-800 mb-2">
                {reason.title}
              </h3>
              <p className="text-slate-600 text-base">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
