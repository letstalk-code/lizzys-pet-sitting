'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)
  const [activeCity, setActiveCity] = useState('Clearwater')

  const cityMaps = {
    'Clearwater':       'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56394!2d-82.8001!3d27.9659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e54bc7539e1f%3A0x39a5d9fd5d34d1bc!2sClearwater%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000001',
    'St. Petersburg':   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56394!2d-82.6400!3d27.7676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c4c36a8bfe3d%3A0x17040f96d2e82e67!2sSt.%20Petersburg%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000002',
    'Largo':            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28197!2d-82.7873!3d27.9095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e3e0c4b3b3b3%3A0x1c1c1c1c1c1c1c1c!2sLargo%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000003',
    'Dunedin':          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28197!2d-82.7746!3d28.0197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f0e0e0e0e0e0%3A0x1c1c1c1c1c1c1c1c!2sDunedin%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000004',
    'Safety Harbor':    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28197!2d-82.6929!3d27.9939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e8e8e8e8e8e8%3A0x1c1c1c1c1c1c1c1c!2sSafety%20Harbor%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000005',
    'Tarpon Springs':   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28197!2d-82.7568!3d28.1489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f4f4f4f4f4f4%3A0x1c1c1c1c1c1c1c1c!2sTarpon%20Springs%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000006',
    'Palm Harbor':      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28197!2d-82.7640!3d28.0789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f2f2f2f2f2f2%3A0x1c1c1c1c1c1c1c1c!2sPalm%20Harbor%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000007',
    'Seminole':         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28197!2d-82.7987!3d27.8395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e1e1e1e1e1e1%3A0x1c1c1c1c1c1c1c1c!2sSeminole%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000008',
    'Pinellas Park':    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28197!2d-82.6996!3d27.8428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e2e2e2e2e2e2%3A0x1c1c1c1c1c1c1c1c!2sPinellas%20Park%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000009',
    'Belleair':         'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14098!2d-82.8079!3d27.9278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e5e5e5e5e5e5%3A0x1c1c1c1c1c1c1c1c!2sBelleair%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000010',
    'Indian Rocks Beach':'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14098!2d-82.8468!3d27.8867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e6e6e6e6e6e6%3A0x1c1c1c1c1c1c1c1c!2sIndian%20Rocks%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000011',
    'Oldsmar':          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28197!2d-82.6651!3d28.0434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2edededededed%3A0x1c1c1c1c1c1c1c1c!2sOldsmar%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000012',
  }

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const faqs = [
    { q:'Do you work with all dog breeds?', a:'Elizabeth works with most breeds and all sizes. For group dog walks, she prefers dogs that are trained and non-aggressive. Pet sitting, home visits, and overnight stays are available for all temperaments.' },
    { q:'What areas of Florida do you serve?', a:'Elizabeth is Florida-based and serves the local area. Please reach out via the contact form to confirm she covers your specific location.' },
    { q:'How does an overnight stay work?', a:'Overnight stays run from 10:00 PM to 7:00 AM. Elizabeth stays with your pet through the entire night — no crates, no leaving. Pricing is $225 for 1 pet and $395 for up to 3 pets.' },
    { q:"What's your background with animals?", a:"Elizabeth is a certified Petco Positive Dog Trainer graduate, an AKC CGC Evaluator, and a certified Yoga Trainer. She also spent 20+ years as an ICU nurse in Germany, bringing extraordinary attentiveness to every interaction." },
  ]

  return (
    <>
      {/* HERO */}
      <section className="hero-clip relative pt-52 pb-44 bg-orange text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:'radial-gradient(circle at 2px 2px,white 2px,transparent 0)',backgroundSize:'36px 36px'}} aria-hidden="true"></div>
        <div className="absolute top-0 right-[-10%] w-[460px] h-[460px] bg-white/15 blob pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-8%] w-[360px] h-[360px] bg-teal/30 blob-b pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block font-heading font-bold text-white/70 text-xs uppercase tracking-[0.2em] mb-6">Let&apos;s Connect</span>
          <h1 className="font-heading font-extrabold text-6xl sm:text-7xl md:text-8xl text-white leading-[1.0] mb-6">
            Ready to Book?<br /><span className="text-white/60">Let&apos;s Talk.</span>
          </h1>
          <p className="text-white/80 text-xl font-light max-w-xl mx-auto leading-relaxed">
            Whether you have questions or you&apos;re ready to schedule, Elizabeth is here. Reach out and let&apos;s build the perfect care plan for your pet.
          </p>
        </div>
      </section>

      {/* CONTACT SPLIT */}
      <section className="py-28 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row reveal">

            {/* Left panel */}
            <div className="bg-teal text-white p-12 lg:p-16 lg:w-5/12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-[-15%] right-[-15%] w-72 h-72 bg-white/10 blob pointer-events-none"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-56 h-56 bg-orange/25 blob-b pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
                  Get in<br /><span className="text-orange">Touch.</span>
                </h2>
                <p className="text-white/75 text-lg font-light leading-relaxed mb-12">
                  Every pet is unique. Fill out the form and Elizabeth will get back to you personally to discuss the best care plan.
                </p>
                <div className="space-y-8">
                  {[
                    { icon:'ph-map-pin', title:'Service Area', val:'Florida, USA' },
                    { icon:'ph-phone', title:'Phone', val:'(813) 493-8759', href:'tel:+18134938759' },
                    { icon:'ph-envelope-simple', title:'Email', val:'hello@lizzyandco.pet', href:'mailto:hello@lizzyandco.pet' },
                    { icon:'ph-clock', title:'Response Time', val:'Usually within a few hours' },
                  ].map(c => (
                    <div key={c.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20 float">
                        <i className={`ph-fill ${c.icon} text-2xl text-orange`}></i>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg mb-0.5">{c.title}</h4>
                        {c.href
                          ? <a href={c.href} className="text-white/65 font-light hover:text-white transition-colors">{c.val}</a>
                          : <p className="text-white/65 font-light">{c.val}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative z-10 mt-12 pt-8 border-t border-white/15">
                <p className="text-white/50 text-xs font-medium uppercase tracking-widest mb-4">Credentials</p>
                <div className="flex flex-wrap gap-2">
                  {['Petco Certified','AKC CGC Evaluator','Yoga Trainer','ICU Nurse'].map(c => (
                    <span key={c} className="text-xs font-medium text-white/70 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-10 md:p-14 lg:w-7/12 bg-white">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center text-teal mb-5">
                    <i className="ph-fill ph-check-circle text-5xl"></i>
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-charcoal mb-2">Message Sent!</h4>
                  <p className="text-charcoal/55 font-light">Elizabeth will be in touch shortly. Your pet is in great hands.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading font-bold text-2xl text-charcoal mb-2">Send a Message</h3>
                  <p className="text-charcoal/50 font-light text-sm mb-8">Tell Elizabeth about your pet and what you need — she&apos;ll respond personally.</p>
                  <form onSubmit={async e => {
                    e.preventDefault()
                    setLoading(true)
                    setError(null)
                    const fd = new FormData(e.target)
                    try {
                      const res = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(Object.fromEntries(fd)),
                      })
                      if (!res.ok) throw new Error()
                      setSubmitted(true)
                    } catch {
                      setError('Something went wrong. Please try again or email us directly.')
                    } finally {
                      setLoading(false)
                    }
                  }} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="field-wrap">
                        <input type="text" id="firstName" name="firstName" placeholder=" " required />
                        <label htmlFor="firstName">First Name</label>
                      </div>
                      <div className="field-wrap">
                        <input type="text" id="lastName" name="lastName" placeholder=" " required />
                        <label htmlFor="lastName">Last Name</label>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="field-wrap">
                        <input type="email" id="email" name="email" placeholder=" " required />
                        <label htmlFor="email">Email Address</label>
                      </div>
                      <div className="field-wrap">
                        <input type="tel" id="phone" name="phone" placeholder=" " />
                        <label htmlFor="phone">Phone Number</label>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="field-wrap">
                        <select id="petType" name="petType" required>
                          <option value="" disabled hidden></option>
                          <option value="dog">Dog</option>
                          <option value="cat">Cat</option>
                          <option value="other">Other</option>
                        </select>
                        <label htmlFor="petType">Pet Type</label>
                        <span className="select-arrow"><i className="ph ph-caret-down text-sm"></i></span>
                      </div>
                      <div className="field-wrap">
                        <select id="service" name="service" required>
                          <option value="" disabled hidden></option>
                          <option value="walk">Group Dog Walk — $45</option>
                          <option value="sitting">Pet Sitting — from $55/hr</option>
                          <option value="visit">Home Visits — $85/hr</option>
                          <option value="doga">Dog Yoga (Doga) — $115</option>
                          <option value="private-yoga">Private Yoga — $185</option>
                          <option value="pickup">Pet Pick-Ups — $95/hr</option>
                          <option value="overnight">Overnight Stay — from $225</option>
                        </select>
                        <label htmlFor="service">Service Interested In</label>
                        <span className="select-arrow"><i className="ph ph-caret-down text-sm"></i></span>
                      </div>
                    </div>
                    <div className="field-wrap">
                      <textarea id="message" name="message" rows={5} placeholder=" " required style={{paddingTop:'22px',resize:'none'}}></textarea>
                      <label htmlFor="message">Tell Elizabeth about your pet...</label>
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <button type="submit" disabled={loading} className="w-full bg-orange hover:bg-teal text-white font-heading font-bold text-lg py-5 rounded-2xl transition-all duration-300 shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                      {loading ? 'Sending...' : <> Send Message <i className="ph ph-paper-plane-tilt text-xl"></i> </>}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA MAP */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="font-heading font-bold text-orange text-xs uppercase tracking-[0.2em]">Where We Work</span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-charcoal mt-3">Service <span className="text-teal">Areas</span></h2>
            <p className="text-charcoal/55 font-light mt-4 max-w-xl mx-auto">Elizabeth serves Clearwater and the surrounding Pinellas County communities. Not sure if you&apos;re in range? Just reach out!</p>
          </div>
          <div className="reveal bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
            <div className="flex flex-wrap gap-3 px-8 pt-8 pb-6 border-b border-gray-100">
              {Object.keys(cityMaps).map(city => (
                <button key={city} onClick={() => setActiveCity(city)}
                  className={`inline-flex items-center gap-1.5 font-heading font-bold text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                    activeCity === city
                      ? 'bg-teal text-white border-teal shadow-md shadow-teal/20'
                      : 'bg-teal/8 text-teal border-teal/20 hover:bg-teal/20'
                  }`}>
                  <i className="ph-fill ph-map-pin text-xs"></i> {city}
                </button>
              ))}
            </div>
            <div className="relative w-full" style={{height:'420px'}}>
              <iframe
                key={activeCity}
                title={`${activeCity} service area map`}
                src={cityMaps[activeCity]}
                width="100%"
                height="100%"
                style={{border:0, display:'block'}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="font-heading font-bold text-orange text-xs uppercase tracking-[0.2em]">Common Questions</span>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-charcoal mt-3">Got Questions?</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="reveal bg-cream rounded-2xl border border-teal/10 overflow-hidden" style={{transitionDelay:`${i*0.05}s`}}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-7 py-5 flex items-center justify-between gap-4 font-heading font-bold text-charcoal hover:text-teal transition-colors">
                  <span>{f.q}</span>
                  <i className={`ph ph-plus text-xl flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}></i>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-7 pb-5 text-charcoal/60 font-light leading-relaxed text-sm">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
