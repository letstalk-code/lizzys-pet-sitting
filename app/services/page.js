'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Services() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const services = [
    { icon:'ph-paw-print', color:'teal', title:'Group Dog Walk', price:'$45', unit:'per walk', desc:'Socialized, structured walks in a small group setting. Your dog gets exercise, fresh air, and social interaction in a safe, supervised environment.', note:'Best for non-aggressive, trained dogs.' },
    { icon:'ph-house-line', color:'teal', title:'Pet Sitting', price:'$55/hr', unit2:'$75/hr for 2 pets', desc:'Attentive, one-on-one care in the comfort of your home. Your pet stays happy, safe, and on their normal routine — without the stress of a new environment.' },
    { icon:'ph-door-open', color:'teal', title:'Home Visits', price:'$85', unit:'per hour', desc:'A complete visit that covers everything — a health check-in, feeding, a walk, and dedicated playtime. Everything your pet needs while you\'re away.', tags:['Greeting','Health Check','Feeding','Walking','Play Time'] },
    { icon:'ph-person-simple-lotus', color:'orange', title:'Dog Yoga (Doga) Classes', price:'$115', unit:'per session', desc:'A calming, fun class for 2 owners and 1 pet. Strengthen the bond between you and your dog through mindful movement, breath, and relaxation.', note:'2 Owners + 1 Pet per session' },
    { icon:'ph-hands-praying', color:'orange', title:'Private Owner Yoga Lessons', price:'$185', unit:'per session', desc:'A fully tailored private yoga session for 2 owners and 1 pet. Personalized to your goals, your schedule, and your dog\'s temperament.', note:'2 Owners + 1 Pet · Private setting' },
    { icon:'ph-car-profile', color:'teal', title:'Pet Pick-Ups', price:'$95', unit:'per hour', desc:'Stress-free transport for your pet. We handle all the logistics so you don\'t have to rearrange your day.', tags:['Grooming','Vet Visits','Vaccinations','Daycare'] },
  ]

  return (
    <>
      {/* HERO */}
      <section className="hero-clip relative pt-44 pb-44 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage:'radial-gradient(circle at 2px 2px,white 2px,transparent 0)',backgroundSize:'36px 36px'}} aria-hidden="true"></div>
        <div className="absolute top-0 right-[-12%] w-[500px] h-[500px] bg-teal/25 blob pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-8%] w-[380px] h-[380px] bg-orange/20 blob-b pointer-events-none"></div>
        <div className="absolute top-1/2 left-[30%] w-[280px] h-[280px] bg-teal/10 blob-c pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block font-heading font-bold text-orange text-xs uppercase tracking-[0.2em] mb-6">What We Offer</span>
          <h1 className="font-heading font-extrabold text-6xl sm:text-7xl md:text-8xl text-white leading-[1.0] mb-6">
            Every Pet.<br /><span className="text-teal">Every Need.</span>
          </h1>
          <p className="text-white/70 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Seven premium services, all delivered with the same commitment — your pet&apos;s safety, comfort, and happiness. Always.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-28 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={s.title} className="svc-card reveal bg-white rounded-3xl p-8 border border-teal/10 flex flex-col" style={{transitionDelay:`${i*0.05}s`}}>
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 bg-${s.color}/10 rounded-2xl flex items-center justify-center text-${s.color}`}>
                    <i className={`ph ${s.icon} text-3xl`}></i>
                  </div>
                  <div className="text-right">
                    <div className="text-orange font-heading font-extrabold text-3xl">{s.price}</div>
                    {s.unit && <div className="text-charcoal/40 text-xs font-medium mt-0.5">{s.unit}</div>}
                    {s.unit2 && <div className="text-orange font-heading font-bold text-xl">{s.unit2}</div>}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-charcoal mb-3">{s.title}</h3>
                <p className="text-charcoal/60 font-light text-sm leading-relaxed flex-grow">{s.desc}</p>
                {s.note && (
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <p className={`text-xs text-${s.color} font-medium italic flex items-center gap-1.5`}>
                      <i className="ph-fill ph-info"></i> {s.note}
                    </p>
                  </div>
                )}
                {s.tags && (
                  <div className="mt-5 pt-5 border-t border-gray-100 flex flex-wrap gap-2">
                    {s.tags.map(t => <span key={t} className="text-xs font-medium text-charcoal/50 bg-cream px-2 py-1 rounded-lg">{t}</span>)}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Overnight — featured */}
          <div className="reveal mt-8" style={{transitionDelay:'.3s'}}>
            <div className="bg-charcoal text-white rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden">
              <div className="absolute right-[-4%] top-[-20%] text-white/5 text-[300px] pointer-events-none select-none" aria-hidden="true"><i className="ph-fill ph-moon-stars"></i></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20">
                <div className="flex-grow">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange/20 text-orange border border-orange/30 rounded-full font-heading font-bold text-xs uppercase tracking-wide mb-5">
                    <i className="ph-fill ph-star"></i> Premium Service
                  </div>
                  <h3 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">Overnight Stay</h3>
                  <p className="text-white/65 text-lg font-light leading-relaxed max-w-xl">Your pet sleeps safe and sound with Lizzy all night long. No crates, no strangers — just warmth and expert care from 10 PM to 7 AM.</p>
                </div>
                <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col gap-5">
                  {[{price:'$225',label:'1 Pet'},{price:'$395',label:'Up to 3 Pets'}].map(o => (
                    <div key={o.label} className="bg-white/8 border border-white/15 rounded-2xl px-8 py-6 text-center min-w-[180px]">
                      <div className="text-orange font-heading font-extrabold text-4xl mb-1">{o.price}</div>
                      <div className="text-white/55 text-sm font-medium">{o.label}</div>
                      <div className="text-white/35 text-xs mt-1">10:00 PM – 7:00 AM</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="py-16 bg-teal text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { icon:'ph-shield-check', title:'Safety First', copy:'Medical-grade attentiveness on every visit' },
              { icon:'ph-chat-circle-dots', title:'Clear Communication', copy:'Real-time updates so you\'re never left wondering' },
              { icon:'ph-heart', title:'Genuine Love', copy:'Every pet treated like family — no exceptions' },
            ].map((p,i) => (
              <div key={p.title} className="reveal flex flex-col items-center" style={{transitionDelay:`${i*0.1}s`}}>
                <i className={`ph-fill ${p.icon} text-4xl text-orange mb-3`}></i>
                <div className="font-heading font-bold text-lg">{p.title}</div>
                <p className="text-white/65 text-sm font-light mt-1">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-cream relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10 reveal">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
            Ready to Book a <span className="text-teal">Service?</span>
          </h2>
          <p className="text-charcoal/60 text-lg font-light mb-10">Tell Lizzy about your pet and she&apos;ll help you find the perfect care plan.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-orange text-white font-heading font-extrabold text-xl rounded-full hover:bg-teal transition-all duration-300 shadow-2xl hover:-translate-y-1">
            Get in Touch <i className="ph ph-arrow-right text-2xl"></i>
          </Link>
        </div>
      </section>
    </>
  )
}
