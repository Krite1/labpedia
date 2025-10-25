import Layout from '../components/Layout'
export default function Tentang() {
  const meta = { title: 'Tentang - Labpedia', description: 'Labpedia adalah situs edukatif yang membahas senyawa kimia dan penerapannya dalam kehidupan sehari-hari.' }
  return (
    <Layout meta={meta}>
      <h2 className="text-2xl font-bold mb-4">Tentang Labpedia</h2>
      <p className="mt-4">Labpedia dibuat untuk membantu pelajar dan pembaca umum memahami konsep senyawa kimia dengan penjelasan sederhana dan contoh aplikasi nyata.</p>
    </Layout>
  )
}
