"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import blogPosts from "@/data/blog"

export default function BlogPage() {
  const siteUrl = "https://www.aclss.co.ke" // ✅ replace with your domain

  return (
    <>
      {/* SEO META TAGS */}
      <Head>
        <title>Blog & Resources | ACL Smart Solutions</title>
        <meta
          name="description"
          content="Explore expert insights, guides, and the latest updates on smart home automation, security systems, and innovative technologies from ACL Smart Solutions."
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog & Resources | ACL Smart Solutions" />
        <meta
          property="og:description"
          content="Explore expert insights, guides, and the latest updates on smart home automation, security systems, and innovative technologies from ACL Smart Solutions."
        />
        <meta property="og:image" content={`${siteUrl}/blog-cover.jpg`} />
        <meta property="og:url" content={`${siteUrl}/blog`} />
        <meta property="og:site_name" content="ACL Smart Solutions" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog & Resources | ACL Smart Solutions" />
        <meta
          name="twitter:description"
          content="Explore expert insights, guides, and the latest updates on smart home automation, security systems, and innovative technologies."
        />
        <meta name="twitter:image" content={`${siteUrl}/blog-cover.jpg`} />

        {/* Structured Data (BlogListing) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              headline: "ACL Smart Solutions Blog",
              description:
                "Expert resources, tips, and insights on smart automation, security systems, and IoT innovation.",
              url: `${siteUrl}/blog`,
              publisher: {
                "@type": "Organization",
                name: "ACL Smart Solutions",
                logo: {
                  "@type": "ImageObject",
                  url: `${siteUrl}/logo.jpg`,
                },
              },
              blogPost: blogPosts.map((post) => ({
                "@type": "BlogPosting",
                headline: post.title,
                description: post.excerpt,
                url: `${siteUrl}/blog/${post.slug}`,
                datePublished: post.date,
                image: `${siteUrl}${post.image}`,
              })),
            }),
          }}
        />
      </Head>

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Blog & Resources
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl"
        >
          Insights, tips, and updates on smart automation, security systems, and
          the future of connected living.
        </motion.p>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow hover:shadow-2xl transition overflow-hidden flex flex-col"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  {post.title}
                </h3>
                <p className="text-slate-700 flex-1">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
