import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../../components/Layout'
import AdSense from '../../components/AdSense'

export default function Post({ frontmatter, content }) {
  const meta = { title: frontmatter.title, description: frontmatter.excerpt, siteName: 'Labpedia' }
  return (
    <Layout meta={meta}>
      <article>
        <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
        <p className="text-sm text-slate-500">{frontmatter.date}</p>
        <div className="mt-6 prose" dangerouslySetInnerHTML={{ __html: content }} />
        <div className="my-8">
          {/* AdSense placeholder (enable after approval) */}
          <div style={{display: 'block', textAlign: 'center', margin: '16px auto'}}>Iklan AdSense (aktifkan setelah diterima)</div>
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({ params: { slug: filename.replace('.md', '') } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)
  const html = require('remark').remark().use(require('remark-html')).processSync(content).toString()
  return { props: { frontmatter, content: html } }
}
