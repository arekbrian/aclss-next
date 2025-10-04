const products = [
  {
    key: "smart-switches",
    title: "Smart Switches",
    short:
      "Modern KNX smart switches designed for seamless control of lighting and devices.",
    image: "/products/smart-switch.jpg",
    category: "switches", // ✅ added
    details: [
      "Touch-sensitive glass panels for premium look & feel",
      "Fully compatible with KNX automation systems",
      "Customizable LED indicators with multiple colors",
      "Durable build with multiple design finishes",
    ],
  },
  {
    key: "sensors",
    title: "Smart Sensors",
    short:
      "Advanced sensors for motion, temperature, and environment monitoring.",
    image: "/products/sensor.jpg",
    category: "sensors", // ✅ added
    details: [
      "Motion detection with adjustable sensitivity",
      "Temperature & humidity monitoring",
      "Energy-saving automation triggers",
      "Compact design for easy installation",
    ],
  },
  {
    key: "controllers",
    title: "Smart Controllers",
    short:
      "Reliable KNX controllers ensuring smooth integration of automation systems.",
    image: "/products/controller.jpg",
    category: "controllers", // ✅ added
    details: [
      "Manages lighting, HVAC, and security devices",
      "Built-in fail-safe operations",
      "Cloud-ready for remote management",
      "Supports scalable automation networks",
    ],
  },
  {
    key: "intercoms",
    title: "Video Intercoms",
    short:
      "High-performance video intercom systems for security and communication.",
    image: "/products/intercom.jpg",
    category: "security", // ✅ added
    details: [
      "HD video quality for clear communication",
      "Supports mobile app integration",
      "Two-way audio with noise cancellation",
      "Secure access control with door release",
    ],
  },
  {
    key: "hvac",
    title: "HVAC Controllers",
    short:
      "Energy-efficient solutions for heating, ventilation, and air conditioning.",
    image: "/products/hvac.jpg",
    category: "hvac", // ✅ added
    details: [
      "Smart thermostat with scheduling options",
      "Optimized for energy efficiency",
      "Supports centralized & zone control",
      "Compatible with leading HVAC systems",
    ],
  },
  {
    key: "music",
    title: "Smart Music Devices",
    short:
      "Enhance your lifestyle with integrated smart music automation.",
    image: "/products/music.jpg",
    category: "entertainment", // ✅ added
    details: [
      "Hands-free music playback with voice control",
      "Seamless integration with Alexa & Google",
      "High-fidelity sound experience",
      "Multi-room audio synchronization",
    ],
  },
]

export default products
