import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-10 pb-10 border-b border-white/10">

          <div className="flex flex-col items-center md:items-start">
            <Image src="/Favicon 1.png" alt="Lizzy's Pet Sitting" width={48} height={48} className="h-12 w-12 mb-3 rounded-2xl" />
            <p className="text-white/35 text-sm italic font-light">The peace of mind you need.<br />The expertise your pet deserves.</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <Link href="/"         className="text-white/55 hover:text-orange transition-colors font-medium text-sm">Home</Link>
            <Link href="/about"    className="text-white/55 hover:text-orange transition-colors font-medium text-sm">About</Link>
            <Link href="/services" className="text-white/55 hover:text-orange transition-colors font-medium text-sm">Services</Link>
            <Link href="/contact"  className="text-white/55 hover:text-orange transition-colors font-medium text-sm">Contact</Link>
          </nav>

          <div className="flex justify-center md:justify-end gap-4">
            <a href="#" className="w-10 h-10 bg-white/6 hover:bg-orange rounded-full flex items-center justify-center text-white transition-all border border-white/10" aria-label="Instagram">
              <i className="ph-fill ph-instagram-logo text-lg"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-white/6 hover:bg-teal rounded-full flex items-center justify-center text-white transition-all border border-white/10" aria-label="Facebook">
              <i className="ph-fill ph-facebook-logo text-lg"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-white/30 text-sm font-light gap-3">
          <p>© 2025 Lizzy &amp; Co. Pet Concierge. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-white/30">
            <p className="flex items-center gap-1.5"><i className="ph-fill ph-map-pin text-teal"></i> Florida, USA</p>
            <a href="tel:+18134938759" className="flex items-center gap-1.5 hover:text-white transition-colors"><i className="ph-fill ph-phone text-orange"></i> (813) 493-8759</a>
          </div>
        </div>
        <p className="text-center text-sm font-light mt-4">
          <span className="text-white">Created with </span><span className="heartbeat text-base leading-none">❤️</span><span className="text-white"> at </span><a href="https://creativelygrow.com" target="_blank" rel="noopener noreferrer" className="text-orange font-medium hover:text-orange/80 transition-colors">Creatively Grow</a>
        </p>
      </div>
    </footer>
  )
}
