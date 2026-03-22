'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-charcoal">
        <video autoPlay muted loop playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center z-0">
          <source src="/Lizzy's Hero Video.mp4" type="video/mp4" />
          <img src="/PNG image.png" alt="Lizzy walking a dog" className="w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 z-10" style={{background:'linear-gradient(to top,rgba(20,20,20,0.88) 0%,rgba(20,20,20,0.30) 55%,rgba(20,20,20,0.10) 100%)'}}></div>
        <i className="ph-fill ph-paw-print absolute top-36 right-24 text-white/10 text-7xl float pointer-events-none select-none z-20"></i>

        <div className="relative z-20 w-full pb-20 pt-44">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white backdrop-blur-sm rounded-full font-heading font-bold text-xs uppercase tracking-widest mb-8">
                <i className="ph-fill ph-map-pin text-orange"></i> Florida&apos;s Premium Pet Care
              </div>
              <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] text-white mb-8 drop-shadow-lg">
                Your Pet<br />Deserves<br />
                <span className="text-teal">Someone</span><br />
                <span className="relative inline-block">
                  Extraordinary
                  <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 500 12" preserveAspectRatio="none">
                    <path d="M0 9 Q125 1 250 9 Q375 17 500 9" stroke="#F07A30" strokeWidth="5" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-white/80 font-light leading-relaxed mb-10 max-w-xl drop-shadow">
                Certified trainer. Former ICU nurse. 20+ years of compassionate care. Relocated from Germany to Florida — now here for your pets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange text-white font-heading font-bold text-lg rounded-full hover:bg-orange/90 shadow-xl shadow-orange/30 hover:-translate-y-1 transition-all duration-300">
                  Book a Visit <i className="ph ph-arrow-right"></i>
                </Link>
                <Link href="/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-heading font-bold text-lg rounded-full hover:bg-white hover:text-teal transition-all duration-300 backdrop-blur-sm">
                  Meet Lizzy <i className="ph ph-user-circle"></i>
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Petco Certified Trainer','AKC CGC Evaluator','20+ Yrs Healthcare'].map(b => (
                  <span key={b} className="flex items-center gap-1.5 text-sm font-medium text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <i className="ph-fill ph-check-circle text-orange"></i> {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-12" preserveAspectRatio="none">
            <path d="M0 30 Q360 60 720 30 Q1080 0 1440 30 L1440 60 L0 60Z" fill="#FAFAF8"/>
          </svg>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="py-10 bg-cream overflow-hidden relative">
        <div className="absolute top-1/2 right-[-6%] w-[340px] h-[340px] bg-teal/12 blob pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-[-6%] w-[280px] h-[280px] bg-orange/8 blob-b pointer-events-none -translate-y-1/2"></div>
        <div className="marquee-inner">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-8" aria-hidden={i === 1}>
              <span className="font-heading font-bold text-2xl text-charcoal whitespace-nowrap"><span className="text-orange">20+</span> Years Healthcare</span>
              <i className="ph-fill ph-paw-print text-teal/30 text-2xl flex-shrink-0"></i>
              <span className="font-heading font-bold text-2xl text-charcoal whitespace-nowrap"><span className="text-teal">Petco</span> Certified Trainer</span>
              <i className="ph-fill ph-paw-print text-orange/30 text-2xl flex-shrink-0"></i>
              <span className="font-heading font-bold text-2xl text-charcoal whitespace-nowrap"><span className="text-orange">AKC</span> CGC Evaluator</span>
              <i className="ph-fill ph-paw-print text-teal/30 text-2xl flex-shrink-0"></i>
              <span className="font-heading font-bold text-2xl text-charcoal whitespace-nowrap"><span className="text-teal">7</span> Premium Services</span>
              <i className="ph-fill ph-paw-print text-orange/30 text-2xl flex-shrink-0"></i>
              <span className="font-heading font-bold text-2xl text-charcoal whitespace-nowrap"><span className="text-orange">Florida</span> Based &amp; Trusted</span>
              <i className="ph-fill ph-paw-print text-teal/30 text-2xl flex-shrink-0"></i>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-28 bg-cream relative overflow-hidden">
        <div className="absolute right-0 top-0 w-72 h-72 bg-orange/6 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <div className="font-heading font-extrabold text-[9rem] leading-none text-teal/8 select-none -mb-10">&ldquo;</div>
              <blockquote className="font-heading font-extrabold text-3xl md:text-4xl text-charcoal leading-snug mb-6">
                Caring for others isn&apos;t just what I do.<br />
                <span className="text-teal">It&apos;s who I am.</span>
              </blockquote>
              <p className="text-charcoal/65 text-lg font-light leading-relaxed mb-8 max-w-lg">
                After 20+ years as an ICU nurse in Germany and relocating to Florida, I bring medical-grade attentiveness to every pet visit. My clients don&apos;t just get a sitter — they get a true professional.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-teal font-heading font-bold text-lg group hover:gap-4 transition-all">
                Read My Full Story <i className="ph ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
            <div className="relative reveal" style={{transitionDelay:'.15s'}}>
              <div className="absolute -inset-4 bg-orange/8 rounded-[50px] transform -rotate-2"></div>
              <div className="relative bg-gradient-to-br from-teal/25 to-orange/10 rounded-[44px] aspect-square overflow-hidden shadow-2xl border-4 border-white max-w-md mx-auto lg:max-w-none">
                <Image src="/PNG image copy.png" alt="Lizzy caring for a pet" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-orange text-white font-heading font-bold px-5 py-4 rounded-2xl shadow-2xl float">
                <div className="text-lg">ICU Nurse</div>
                <div className="text-xs font-normal opacity-80 mt-0.5">Germany · 20+ Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="font-heading font-bold text-orange text-xs uppercase tracking-[0.2em]">What We Offer</span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-charcoal mt-3">Services <span className="text-teal">&amp; Pricing</span></h2>
            <p className="text-charcoal/55 text-lg mt-4 max-w-xl mx-auto font-light">A few of our most popular services — with many more available.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="tilt bg-cream rounded-3xl p-8 border border-teal/10 reveal flex flex-col">
              <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center text-teal mb-6"><i className="ph ph-paw-print text-3xl"></i></div>
              <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Group Dog Walk</h3>
              <div className="text-orange font-heading font-extrabold text-3xl mb-4">$45</div>
              <p className="text-charcoal/60 font-light text-sm leading-relaxed flex-grow">Socialized, structured walks in a small group setting. Best for trained, non-aggressive dogs.</p>
            </div>
            <div className="tilt bg-teal text-white rounded-3xl p-8 reveal flex flex-col" style={{transitionDelay:'.1s'}}>
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6"><i className="ph ph-house-line text-3xl"></i></div>
              <h3 className="font-heading font-bold text-xl mb-2">Pet Sitting</h3>
              <div className="font-heading font-extrabold text-3xl text-orange mb-1">$55<span className="text-lg font-medium text-white/60">/hr</span></div>
              <div className="text-white/50 text-sm mb-4">$75/hr for 2 pets</div>
              <p className="text-white/80 font-light text-sm leading-relaxed flex-grow">Attentive one-on-one care in the comfort of your home. Your pet stays happy, safe, and on routine.</p>
            </div>
            <div className="tilt bg-charcoal text-white rounded-3xl p-8 reveal flex flex-col" style={{transitionDelay:'.2s'}}>
              <div className="w-14 h-14 bg-orange/20 rounded-2xl flex items-center justify-center text-orange mb-6"><i className="ph ph-moon-stars text-3xl"></i></div>
              <h3 className="font-heading font-bold text-xl mb-2">Overnight Stay</h3>
              <div className="text-orange font-heading font-extrabold text-3xl mb-4">from $225</div>
              <p className="text-white/70 font-light text-sm leading-relaxed flex-grow">Your pet sleeps safe and sound with Lizzy all night long. No crates, no strangers. 10 PM – 7 AM.</p>
            </div>
          </div>
          <div className="text-center mt-14 reveal">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white font-heading font-bold text-lg rounded-full hover:bg-teal transition-all duration-300 hover:-translate-y-1 shadow-xl">
              View All 7 Services <i className="ph ph-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST PILLARS ── */}
      <section className="py-24 bg-cream border-y border-teal/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-charcoal">Why Pet Owners in Florida <span className="text-teal">Trust Lizzy</span></h2>
            <div className="w-20 h-1.5 bg-orange rounded-full mx-auto mt-5"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { icon:'ph-heartbeat', color:'teal', title:'Healthcare-Level Professionalism', copy:'20+ years as an ICU nurse means Lizzy notices things others miss.' },
              { icon:'ph-certificate', color:'orange', title:'Certified & Trained', copy:'Petco Trainer, AKC CGC Evaluator — real expertise, not just love of animals.' },
              { icon:'ph-shield-check', color:'teal', title:'Calm Under Pressure', copy:'Clinical background means she stays composed when it counts most.' },
              { icon:'ph-chat-circle-text', color:'orange', title:'Clear Communication', copy:'Honest, reliable updates so you always know how your pet is doing.' },
            ].map((p, i) => (
              <div key={p.title} className="reveal flex flex-col items-center" style={{transitionDelay:`${i*0.1}s`}}>
                <div className={`w-20 h-20 bg-white rounded-full flex items-center justify-center text-${p.color} shadow-lg border border-${p.color}/10 mb-5`}>
                  <i className={`ph ${p.icon} text-4xl`}></i>
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">{p.title}</h3>
                <p className="text-charcoal/55 font-light text-sm leading-relaxed">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]" style={{backgroundImage:'radial-gradient(circle at 2px 2px,white 2px,transparent 0)',backgroundSize:'40px 40px'}} aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="font-heading font-bold text-orange text-xs uppercase tracking-[0.2em]">Testimonials</span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mt-3">What Pet Owners <span className="text-teal">Are Saying</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { letter:'H', color:'teal', name:'Happy Client', quote:'"Lizzy treated our dog like her own. The communication was incredible — we felt at ease the entire trip."' },
              { letter:'G', color:'orange', name:'Grateful Pet Parent', quote:'"Her nursing background really shows — she noticed a health issue our vet later confirmed. I trust her completely."' },
              { letter:'F', color:'teal', name:'Florida Dog Mom', quote:'"The overnight stay was perfect. Our anxious rescue slept through the night for the very first time ever."' },
            ].map((t, i) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-3xl p-8 reveal backdrop-blur-sm" style={{transitionDelay:`${i*0.15}s`}}>
                <div className="flex gap-0.5 text-orange mb-5 text-sm">
                  {[...Array(5)].map((_, s) => <i key={s} className="ph-fill ph-star"></i>)}
                </div>
                <p className="text-white/80 italic leading-relaxed mb-7 font-light">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-${t.color}/30 rounded-full flex items-center justify-center font-heading font-bold text-${t.color}`}>{t.letter}</div>
                  <div>
                    <div className="font-heading font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-white/35">Florida</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIG CTA ── */}
      <section className="py-28 bg-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage:'radial-gradient(circle at 2px 2px,white 1px,transparent 0)',backgroundSize:'28px 28px'}} aria-hidden="true"></div>
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-white/6 text-[320px] pointer-events-none select-none" aria-hidden="true"><i className="ph-fill ph-paw-print"></i></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 reveal">
          <h2 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Ready to Give Your Pet<br />the <span className="text-orange">Very Best?</span>
          </h2>
          <p className="text-white/75 text-xl font-light mb-12 max-w-lg mx-auto">Book a visit with Lizzy today — your pet deserves extraordinary care.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-orange text-white font-heading font-extrabold text-xl rounded-full hover:bg-white hover:text-orange transition-all duration-300 shadow-2xl hover:-translate-y-1">
            Book a Visit <i className="ph ph-paw-print text-2xl"></i>
          </Link>
        </div>
      </section>
    </>
  )
}
