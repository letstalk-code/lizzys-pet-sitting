'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  const active = (href) => path === href ? 'text-teal font-heading font-bold text-sm' : 'text-charcoal hover:text-teal font-heading font-semibold text-sm transition-colors'

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-charcoal text-white text-xs py-2 px-4 flex justify-center md:justify-end md:pr-8 gap-6">
        <a href="tel:+18134938759" className="flex items-center gap-1.5 hover:text-orange transition-colors font-medium">
          <i className="ph-fill ph-phone text-orange"></i> (813) 493-8759
        </a>
        <a href="mailto:hello@lizzyandco.pet" className="flex items-center gap-1.5 hover:text-teal transition-colors font-medium">
          <i className="ph-fill ph-envelope-simple text-teal"></i> hello@lizzyandco.pet
        </a>
      </div>
      <div className="nav-glass border-b border-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <Link href="/">
            <Image src="/lizzy-co-pet-concierge-logo.png" alt="Lizzy & Co. Pet Concierge" width={260} height={80} className="h-16 w-auto" priority />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/"         className={active('/')}>Home</Link>
            <Link href="/about"    className={active('/about')}>About</Link>
            <Link href="/services" className={active('/services')}>Services</Link>
            <Link href="/contact"  className={active('/contact')}>Contact</Link>
          </nav>

          <Link href="/contact" className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-orange text-white font-heading font-bold text-sm rounded-full hover:bg-orange/90 shadow-lg shadow-orange/25 hover:-translate-y-0.5 transition-all">
            Book Now <i className="ph-fill ph-paw-print"></i>
          </Link>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-charcoal">
            <i className={`ph ${open ? 'ph-x' : 'ph-list'} text-2xl`}></i>
          </button>
        </div>

        <div className={open ? 'mobile-menu-open md:hidden' : 'mobile-menu-closed md:hidden'}>
          <div className="pb-6 pt-3 space-y-3 border-t border-teal/10">
            <Link href="/"         onClick={() => setOpen(false)} className="block font-heading font-bold text-teal py-1.5">Home</Link>
            <Link href="/about"    onClick={() => setOpen(false)} className="block font-heading font-semibold text-charcoal py-1.5">About</Link>
            <Link href="/services" onClick={() => setOpen(false)} className="block font-heading font-semibold text-charcoal py-1.5">Services</Link>
            <Link href="/contact"  onClick={() => setOpen(false)} className="block font-heading font-semibold text-charcoal py-1.5">Contact</Link>
            <Link href="/contact"  onClick={() => setOpen(false)} className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-orange text-white font-heading font-bold rounded-full text-sm">
              Book Now <i className="ph-fill ph-paw-print"></i>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}
