import './globals.css'
import Link from 'next/link'
import Footer from './components/footer';
export const metadata = {
  title: 'Dino',
  description : 'The home of best drops'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {/* Navbar Starts Here */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-black tracking-tighter text-black">
              <span className="font-bold text-xl">DINO</span>
            </Link>

            {/* Links */}
            <div className="flex gap-8 items-center">
              <Link href="/" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-black transition">
                Home
              </Link>
              <Link href="/products" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-black transition">
                Shop
              </Link>
              <Link href="/products" className="bg-black text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition">
                New Drops
              </Link>
            </div>
          </div>
        </nav>

        {/* This is where your page content goes */}
        <main className="pt-20">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}