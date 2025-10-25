import Head from 'next/head'
import { useRouter } from 'next/router'

export default function SEO({ title, description, keywords, image, date, author, siteName }) {
  const router = useRouter()
  const siteUrl = process.env.SITE_URL || 'https://example.com'
  const url = `${siteUrl}${router.asPath}`
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || 'kimia, senyawa, Labpedia'} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content={date ? 'article' : 'website'} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <link rel="canonical" href={url} />
      {date && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "headline": title,
          "image": image ? [image] : [],
          "datePublished": date,
          "dateModified": date,
          "author": { "@type": "Person", "name": author || 'Penulis' },
          "publisher": { "@type": "Organization", "name": siteName || process.env.SITE_NAME || 'Labpedia', "logo": { "@type":"ImageObject", "url": `${siteUrl}/logo.png` } }
        }) }} />
      )}
    </Head>
  )
}
