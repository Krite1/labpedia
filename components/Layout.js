import SEO from './SEO'
export default function Layout({ children, meta }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO {...meta} />
      <header className="border-b py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold brand">{meta?.siteName || 'Labpedia'}</h1>
          <nav>
            <a href="/" className="mr-4">Home</a>
            <a href="/tentang" className="mr-4">Tentang</a>
            <a href="/kontak" className="mr-4">Kontak</a>
            <a href="/kebijakan-privasi">Privasi</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="border-t py-6 mt-12 text-center">© {new Date().getFullYear()} {meta?.siteName || 'Labpedia'}</footer>
    </div>
  )
}
