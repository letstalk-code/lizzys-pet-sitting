'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
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
      {/* HERO */}
      <section className="hero-clip relative pt-44 pb-44 bg-teal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:'radial-gradient(circle at 2px 2px,white 1.5px,transparent 0)',backgroundSize:'32px 32px'}} aria-hidden="true"></div>
        <div className="absolute top-10 right-[-10%] w-[450px] h-[450px] bg-white/10 blob pointer-events-none"></div>
        <div className="absolute bottom-[-5%] left-[-8%] w-[350px] h-[350px] bg-orange/20 blob-b pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block font-heading font-bold text-orange text-xs uppercase tracking-[0.2em] mb-6">The Person Behind The Care</span>
            <h1 className="font-heading font-extrabold text-6xl sm:text-7xl md:text-8xl text-white leading-[1.0] mb-8">
              Meet<br /><span className="text-orange">Elisabeth.</span><br />
              <span className="text-white/60 text-5xl sm:text-6xl">Everyone calls her Lizzy.</span>
            </h1>
            <p className="text-white/80 text-xl font-light leading-relaxed max-w-xl">
              Former ICU nurse. Certified dog trainer. Yoga instructor. AKC Evaluator. And above all — someone who genuinely loves caring for others.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-28 bg-cream relative overflow-hidden">
        <div className="absolute right-0 top-20 w-80 h-80 bg-teal/6 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="relative reveal">
              <div className="absolute -inset-5 bg-orange/10 rounded-[60px] rotate-2"></div>
              <div className="relative bg-gradient-to-br from-teal/25 to-orange/15 rounded-[52px] aspect-[3/4] overflow-hidden border-4 border-white shadow-2xl max-w-md mx-auto lg:max-w-none">
                <Image src="/PNG image.png" alt="Lizzy with a pet" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 lg:-right-10 bg-orange text-white font-heading font-bold px-5 py-4 rounded-2xl shadow-2xl float">
                <div className="text-lg">ICU Nurse</div>
                <div className="text-xs font-normal opacity-80 mt-0.5">Germany · 20+ Years</div>
              </div>
            </div>
            <div className="reveal" style={{transitionDelay:'.1s'}}>
              <span className="font-heading font-bold text-orange text-xs uppercase tracking-[0.2em]">Lizzy&apos;s Story</span>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-charcoal mt-3 mb-8 leading-tight">
                Looking for someone you can <span className="text-teal">truly trust?</span>
              </h2>
              <div className="space-y-6 text-charcoal/70 text-lg font-light leading-relaxed">
                <p className="font-medium text-charcoal text-xl">You&apos;re in the right place.</p>
                <p>After relocating from Germany to Florida in 2023, I&apos;ve built my life around one thing: caring for others. Whether that&apos;s a rescue pup who needs patience, a senior dog who needs gentle handling, or a family who needs peace of mind while they&apos;re away — I&apos;m here for all of it.</p>
                <p>My background isn&apos;t your typical pet sitter&apos;s story. I spent over 20 years as an ICU nurse in Germany — managing high-pressure situations, making careful decisions under stress, and providing compassionate care when it mattered most. That same level of professionalism and attentiveness is what I bring to every single pet visit.</p>
                <p>I&apos;m also a certified Petco Positive Dog Trainer, a Yoga Trainer, and an AKC Canine Good Citizen Evaluator. When you trust me with your pet, you&apos;re not just hiring a sitter — you&apos;re getting a trained professional who truly loves animals.</p>
              </div>
              <div className="mt-10 bg-teal/8 border border-teal/20 rounded-3xl p-7">
                <p className="font-heading font-bold text-2xl text-teal italic leading-snug">&ldquo;Caring for others isn&apos;t just what I do. It&apos;s who I am.&rdquo;</p>
                <p className="text-charcoal/50 font-medium text-sm mt-3">— Elisabeth (Lizzy)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-28 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(circle at 2px 2px,white 2px,transparent 0)',backgroundSize:'36px 36px'}} aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="font-heading font-bold text-orange text-xs uppercase tracking-[0.2em]">Credentials</span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mt-3">Certified. Trained. <span className="text-teal">Trusted.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon:'ph-graduation-cap', color:'teal', title:'Petco Positive Dog Trainer', desc:'Graduate of the Petco certified positive reinforcement dog training program.' },
              { icon:'ph-person-simple-lotus', color:'orange', title:'Certified Yoga Trainer', desc:'Qualified yoga instructor offering doga classes and private owner sessions with pets.' },
              { icon:'ph-medal', color:'teal', title:'AKC CGC Evaluator', desc:'American Kennel Club Canine Good Citizen certified evaluator — a prestigious designation.' },
              { icon:'ph-first-aid', color:'orange', title:'ICU Nurse — Retired', desc:'20+ years of intensive care nursing in Germany. Medical expertise on every visit.' },
            ].map((c, i) => (
              <div key={c.title} className="cred-card bg-white/6 border border-white/10 rounded-3xl p-8 reveal flex flex-col items-center text-center backdrop-blur-sm" style={{transitionDelay:`${i*0.1}s`}}>
                <div className={`w-16 h-16 bg-${c.color}/20 rounded-2xl flex items-center justify-center text-${c.color} mb-5`}>
                  <i className={`ph-fill ${c.icon} text-4xl`}></i>
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">{c.title}</h3>
                <p className="text-white/50 font-light text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="font-heading font-bold text-orange text-xs uppercase tracking-[0.2em]">What Drives Me</span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-charcoal mt-3">My <span className="text-teal">Values</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="reveal bg-white rounded-3xl p-10 border border-teal/8 hover:border-teal/25 transition-colors group">
              <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center text-teal mb-6 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                <i className="ph-fill ph-shield-check text-3xl"></i>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-charcoal mb-3">Safety First. Always.</h3>
              <p className="text-charcoal/60 font-light leading-relaxed">Every decision I make starts with your pet&apos;s safety. My nursing background means I spot potential health issues early.</p>
            </div>
            <div className="reveal bg-teal text-white rounded-3xl p-10" style={{transitionDelay:'.1s'}}>
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <i className="ph-fill ph-heart text-3xl"></i>
              </div>
              <h3 className="font-heading font-extrabold text-2xl mb-3">Genuine Compassion</h3>
              <p className="text-white/80 font-light leading-relaxed">I don&apos;t just care for pets — I connect with them. Every animal gets the same warmth I&apos;d give to my own family.</p>
            </div>
            <div className="reveal bg-white rounded-3xl p-10 border border-orange/8 hover:border-orange/25 transition-colors group" style={{transitionDelay:'.2s'}}>
              <div className="w-14 h-14 bg-orange/10 rounded-2xl flex items-center justify-center text-orange mb-6 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                <i className="ph-fill ph-chat-circle-dots text-3xl"></i>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-charcoal mb-3">Open Communication</h3>
              <p className="text-charcoal/60 font-light leading-relaxed">You&apos;ll never be left wondering. Transparent, timely updates so you always feel connected to your pet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage:'radial-gradient(circle at 2px 2px,white 1px,transparent 0)',backgroundSize:'28px 28px'}} aria-hidden="true"></div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10 reveal">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Let&apos;s Care for Your Pet <span className="text-orange">Together.</span>
          </h2>
          <p className="text-white/75 text-lg font-light mb-10 max-w-xl mx-auto">Reach out today and let&apos;s find the perfect care plan for your furry family member.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange text-white font-heading font-bold text-lg rounded-full hover:bg-white hover:text-orange transition-all duration-300 shadow-2xl hover:-translate-y-1">
              Book a Visit <i className="ph ph-arrow-right"></i>
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-heading font-bold text-lg rounded-full hover:bg-white hover:text-teal transition-all duration-300">
              See Services <i className="ph ph-list"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
