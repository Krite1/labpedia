import Layout from '../components/Layout'
import AdSense from '../components/AdSense'

export default function Home() {
  const meta = { title: 'Labpedia - Senyawa Kimia & Edukasi', description: 'Labpedia adalah situs edukatif yang membahas senyawa kimia dan penerapannya dalam kehidupan sehari-hari.', siteName: 'Labpedia' }
  return (
    <Layout meta={meta}>
      <section>
        <h2 className="text-2xl font-bold mb-4">Artikel Terbaru: Senyawa Kimia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-4 border rounded">
            <h3 className="text-lg font-semibold"><a href="/posts/air-h2o">Air (H₂O)</a></h3>
            <p className="mt-2 text-sm">Pembahasan struktur, sifat fisika, dan peran biologis air.</p>
          </article>
          <article className="p-4 border rounded">
            <h3 className="text-lg font-semibold"><a href="/posts/natrium-klorida-nacl">Natrium Klorida (NaCl)</a></h3>
            <p className="mt-2 text-sm">Sifat garam meja, titik leleh, dan penggunaan industri.</p>
          </article>
          <article className="p-4 border rounded">
            <h3 className="text-lg font-semibold"><a href="/posts/etanol-c2h5oh">Etanol (C₂H₅OH)</a></h3>
            <p className="mt-2 text-sm">Etanol sebagai pelarut dan bahan bakar, serta sifatnya.</p>
          </article>
        </div>
      </section>

      <div className="my-8">
        {/* AdSense placeholder (disabled during review) */}
        <div style={{display: 'block', textAlign: 'center', margin: '16px auto'}}>Iklan AdSense (aktifkan setelah diterima)</div>
      </div>
    </Layout>
  )
}
