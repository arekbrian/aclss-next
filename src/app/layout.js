// src/app/layout.js
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from "react-hot-toast"
import { SpeedInsights } from "@vercel/speed-insights/next" // ✅ Added

export const metadata = {
  title: {
    default: "ACL Smart Solutions Ltd – The Future is SMART, Are You?",
    template: "%s | ACL Smart Solutions Ltd",
  },
  description: "Smart automation, security & IoT solutions in Kenya.",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://aclss.co.ke",
    siteName: "ACL Smart Solutions Ltd",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aclss",
    creator: "@aclss",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900 relative">
        <Header />

        {/* ✅ Main content */}
        <main className="min-h-screen pt-28">{children}</main>

        <Footer />

        {/* ✅ Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: { background: "#10B981", color: "#fff" },
            },
            error: {
              style: { background: "#EF4444", color: "#fff" },
            },
          }}
        />

        {/* ✅ Vercel Speed Insights (performance analytics) */}
        <SpeedInsights />
      </body>
    </html>
  )
}
