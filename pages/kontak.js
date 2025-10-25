import Layout from '../components/Layout'
export default function Kontak() {
  const meta = { title: 'Kontak - Labpedia', description: 'Hubungi Labpedia' }
  return (
    <Layout meta={meta}>
      <h2 className="text-2xl font-bold mb-4">Kontak</h2>
      <p className="mt-4">Untuk pertanyaan atau kerja sama, hubungi: <strong>labpedia@gmail.com</strong></p>
    </Layout>
  )
}
