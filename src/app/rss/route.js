import { NextResponse } from "next/server"
import blogPosts from "@/data/blog"

export async function GET() {
  const siteUrl = "https://www.aclss.co.ke" // ✅ replace with your domain
  const rssItems = blogPosts
    .map(
      (post) => `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${siteUrl}/blog/${post.slug}</link>
        <description><![CDATA[${post.excerpt}]]></description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <guid>${siteUrl}/blog/${post.slug}</guid>
      </item>`
    )
    .join("")

  const rssFeed = `
    <rss version="2.0">
      <channel>
        <title>ACL Smart Solutions Blog</title>
        <link>${siteUrl}/blog</link>
        <description>Insights and resources on smart automation, IoT, and security systems.</description>
        <language>en-us</language>
        ${rssItems}
      </channel>
    </rss>`

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
