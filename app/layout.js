import './globals.css'
import Script from 'next/script'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Lizzy's Pet Sitting | Clearwater, St. Pete & Largo, FL",
  description: "Certified Petco dog trainer, AKC CGC Evaluator & former ICU nurse offering pet sitting, dog walking, home visits, dog yoga & overnight stays in Clearwater, St. Petersburg, Largo and Pinellas County, FL.",
  icons: { icon: '/Favicon 1.png' },
  openGraph: {
    title: "Lizzy's Pet Sitting | Clearwater, St. Pete & Largo, FL",
    description: "Certified pet sitter, dog trainer & former ICU nurse. Premium pet care in Clearwater, St. Petersburg, Largo & Pinellas County, FL.",
    url: 'https://lizzyspetsitting.com',
    siteName: "Lizzy's Pet Sitting",
    images: [{ url: 'https://lizzys-pet-sitting.vercel.app/PNG%20image.png', width: 1200, height: 630, alt: "Lizzy's Pet Sitting — Clearwater FL" }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lizzy's Pet Sitting | Clearwater, FL",
    description: "Certified dog trainer & former ICU nurse. Premium pet sitting, dog walking & overnight stays in Pinellas County, FL.",
    images: ['https://lizzys-pet-sitting.vercel.app/PNG%20image.png'],
  },
  alternates: { canonical: 'https://lizzyspetsitting.com' },
  keywords: ['pet sitting Clearwater FL', 'dog walker Clearwater', 'pet sitter St Petersburg FL', 'dog sitting Largo FL', 'overnight pet sitting Pinellas County', 'dog yoga Clearwater', 'AKC CGC evaluator Florida', 'certified dog trainer Clearwater', 'home pet visits Dunedin FL', 'pet pick up Tarpon Springs'],
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://lizzyspetsitting.com",
  "name": "Lizzy's Pet Sitting",
  "description": "Certified pet sitter, dog trainer, and former ICU nurse offering premium pet sitting, dog walking, home visits, dog yoga, and overnight stays in Clearwater, St. Petersburg, Largo, and surrounding areas.",
  "url": "https://lizzyspetsitting.com",
  "email": "hello@lizzyspetsitting.com",
  "image": "https://lizzyspetsitting.com/lizzys pet sitting logo.png",
  "priceRange": "$45 – $395",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Clearwater",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.9659,
    "longitude": -82.8001
  },
  "areaServed": [
    { "@type": "City", "name": "Clearwater", "sameAs": "https://en.wikipedia.org/wiki/Clearwater,_Florida" },
    { "@type": "City", "name": "St. Petersburg", "sameAs": "https://en.wikipedia.org/wiki/St._Petersburg,_Florida" },
    { "@type": "City", "name": "Largo", "sameAs": "https://en.wikipedia.org/wiki/Largo,_Florida" },
    { "@type": "City", "name": "Dunedin", "sameAs": "https://en.wikipedia.org/wiki/Dunedin,_Florida" },
    { "@type": "City", "name": "Safety Harbor", "sameAs": "https://en.wikipedia.org/wiki/Safety_Harbor,_Florida" },
    { "@type": "City", "name": "Tarpon Springs", "sameAs": "https://en.wikipedia.org/wiki/Tarpon_Springs,_Florida" },
    { "@type": "City", "name": "Palm Harbor", "sameAs": "https://en.wikipedia.org/wiki/Palm_Harbor,_Florida" },
    { "@type": "City", "name": "Seminole", "sameAs": "https://en.wikipedia.org/wiki/Seminole,_Florida" },
    { "@type": "City", "name": "Pinellas Park", "sameAs": "https://en.wikipedia.org/wiki/Pinellas_Park,_Florida" },
    { "@type": "AdministrativeArea", "name": "Pinellas County, Florida" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pet Care Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Group Dog Walk" }, "price": "45", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pet Sitting" }, "price": "55", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Visits" }, "price": "85", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dog Yoga (Doga) Classes" }, "price": "115", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Private Owner Yoga Lessons" }, "price": "185", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pet Pick-Ups" }, "price": "95", "priceCurrency": "USD" },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Overnight Stay" }, "price": "225", "priceCurrency": "USD" }
    ]
  },
  "founder": {
    "@type": "Person",
    "name": "Elisabeth Lizzy",
    "jobTitle": "Certified Pet Sitter & Dog Trainer",
    "description": "Former ICU nurse with 20+ years experience in Germany. Certified Petco Positive Dog Trainer, AKC CGC Evaluator, and Yoga Trainer."
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "12",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/lizzyspetsitting",
    "https://www.instagram.com/lizzyspetsitting"
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where does Lizzy's Pet Sitting operate?",
      "acceptedAnswer": { "@type": "Answer", "text": "Lizzy's Pet Sitting serves Clearwater, St. Petersburg, Largo, Dunedin, Safety Harbor, Tarpon Springs, Palm Harbor, Seminole, Pinellas Park, Belleair, Indian Rocks Beach, and Oldsmar in Pinellas County, Florida." }
    },
    {
      "@type": "Question",
      "name": "How much does pet sitting cost in Clearwater FL?",
      "acceptedAnswer": { "@type": "Answer", "text": "Lizzy's Pet Sitting offers Group Dog Walks for $45, Pet Sitting from $55/hr, Home Visits at $85/hr, Dog Yoga (Doga) at $115, Private Yoga at $185, Pet Pick-Ups at $95/hr, and Overnight Stays from $225 (1 pet) to $395 (up to 3 pets)." }
    },
    {
      "@type": "Question",
      "name": "Is Lizzy a certified dog trainer?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Lizzy is a certified Petco Positive Dog Trainer graduate, an AKC Canine Good Citizen (CGC) Evaluator, and a certified Yoga Trainer. She also has 20+ years of ICU nursing experience in Germany." }
    },
    {
      "@type": "Question",
      "name": "Do you work with all dog breeds?",
      "acceptedAnswer": { "@type": "Answer", "text": "Lizzy works with most breeds and all sizes. For group dog walks, she prefers dogs that are trained and non-aggressive. Pet sitting, home visits, and overnight stays are available for all temperaments." }
    },
    {
      "@type": "Question",
      "name": "How does an overnight pet sitting stay work?",
      "acceptedAnswer": { "@type": "Answer", "text": "Overnight stays run from 10:00 PM to 7:00 AM. Lizzy stays with your pet through the entire night — no crates, no leaving. Pricing is $225 for 1 pet and $395 for up to 3 pets." }
    },
    {
      "@type": "Question",
      "name": "What is dog yoga or doga?",
      "acceptedAnswer": { "@type": "Answer", "text": "Doga (dog yoga) is a calming class for 2 owners and 1 pet. It strengthens the bond between you and your dog through mindful movement, breath, and relaxation. Sessions are $115 and held in a fun, welcoming environment." }
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300;1,9..40,400&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body className="bg-cream text-charcoal antialiased">
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="beforeInteractive" />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
