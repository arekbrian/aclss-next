"use client" 
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { FaChevronRight } from "react-icons/fa6"
import blogPosts from "@/data/blog"

export default function BlogDetail({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  // Pick 2 related posts
  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2)

  const siteUrl = "https://www.aclss.co.ke" // ✅ Replace with your real domain
  const postUrl = `${siteUrl}/blog/${post.slug}`

  return (
    <>
      {/* SEO META TAGS */}
      <Head>
        <title>{post.title} | ACL Smart Solutions</title>
        <meta name="description" content={post.excerpt} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={`${siteUrl}${post.image}`} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:site_name" content="ACL Smart Solutions" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={`${siteUrl}${post.image}`} />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              image: `${siteUrl}${post.image}`,
              author: {
                "@type": "Organization",
                name: "ACL Smart Solutions",
              },
              publisher: {
                "@type": "Organization",
                name: "ACL Smart Solutions",
                logo: {
                  "@type": "ImageObject",
                  url: `${siteUrl}/logo.jpg`,
                },
              },
              datePublished: post.date,
              url: postUrl,
            }),
          }}
        />
      </Head>

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold drop-shadow-lg"
        >
          {post.title}
        </motion.h1>
        <p className="mt-4 text-sm text-gray-200">
          {new Date(post.date).toDateString()}
        </p>
      </section>

      {/* BREADCRUMB */}
      <div className="bg-gray-100 py-4 px-6 text-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-600">
          <Link href="/" className="hover:text-blue-600 font-medium">Home</Link>
          <FaChevronRight size={12} />
          <Link href="/blog" className="hover:text-blue-600 font-medium">Blog</Link>
          <FaChevronRight size={12} />
          <span className="text-blue-700 font-semibold">{post.title}</span>
        </div>
      </div>

      {/* CONTENT */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Image
            src={post.image}
            alt={post.title}
            width={900}
            height={500}
            className="w-full h-80 object-cover rounded-xl shadow-lg mb-10"
          />
          <article
            className="prose prose-lg max-w-none text-slate-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* RELATED POSTS */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-10">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {related.map((rel, idx) => (
              <motion.div
                key={rel.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 rounded-xl shadow hover:shadow-xl transition overflow-hidden flex flex-col"
              >
                <Image
                  src={rel.image}
                  alt={rel.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-blue-700 mb-2">{rel.title}</h3>
                  <p className="text-slate-600 flex-1">{rel.excerpt}</p>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
