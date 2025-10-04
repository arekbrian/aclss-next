import products from "@/data/products"
import blogPosts from "@/data/blog" // ✅ make sure you have this file like data/products.js

export default function sitemap() {
  const baseUrl = "https://aclss.co.ke"

  // ✅ Product URLs
  const productUrls = products.map((p) => ({
    url: `${baseUrl}/products/${p.key}`,
    lastModified: new Date().toISOString(),
  }))

  // ✅ Blog URLs
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date || new Date().toISOString(),
  }))

  return [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/services`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/products`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() }, // ✅ new main blog page
    ...productUrls,
    ...blogUrls,
  ]
}
