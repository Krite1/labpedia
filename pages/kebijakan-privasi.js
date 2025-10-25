import Layout from '../components/Layout'
export default function KebijakanPrivasi() {
  const meta = { title: 'Kebijakan Privasi - Labpedia', description: 'Kebijakan privasi Labpedia' }
  return (
    <Layout meta={meta}>
      <h2 className="text-2xl font-bold mb-4">Kebijakan Privasi</h2>
      <p className="mt-4">Kami menghormati privasi pengunjung. Data yang dikumpulkan hanya untuk analitik dan perbaikan situs. Penggunaan cookie mengikuti kebijakan umum browser.</p>
    </Layout>
  )
}
