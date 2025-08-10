import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Instagram, Mail } from 'lucide-react'

const AVATAR = '/avatar.jpg'
const NAME = 'Xenia Galkina'
const TAGLINE = 'Product leader & AI tinkerer'
const BIO = 'Built user-loved products at BigTech. Now helping teams ship faster and smarter.'
const CTA_LABEL = 'Book consulting'
const CTA_LINK = 'https://calendly.com/xenia-galkina/intro-chat'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="px-6 py-4 border-b border-neutral-200/70 sticky top-0 z-40 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={AVATAR} alt={NAME + ' headshot'} className="h-8 w-8 rounded-full object-cover ring-1 ring-neutral-200" />
            <span className="font-semibold tracking-tight">xeniagalkina</span>
          </div>
          <a href={CTA_LINK} className="text-sm rounded-full px-4 py-2 border border-neutral-300 hover:border-black transition-colors">Contact</a>
        </div>
      </header>

      <main className="px-4">
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mt-16 md:mt-24 rounded-3xl bg-white border border-neutral-200 shadow p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <figure className="shrink-0">
                <img src={AVATAR} alt={NAME + ' headshot'} className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover ring-1 ring-neutral-200" />
              </figure>
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">{NAME}</h1>
                <p className="mt-3 text-neutral-600 text-lg">{TAGLINE}</p>
                <p className="mt-2 text-neutral-500">{BIO}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href={CTA_LINK} className="inline-flex items-center justify-center rounded-full px-5 py-3 text-white bg-black hover:opacity-90 transition shadow-sm">{CTA_LABEL}</a>
                  <div className="flex items-center gap-2 text-neutral-600">
                    <a href="https://www.linkedin.com/in/xeniagalkina/" aria-label="LinkedIn" className="p-2 rounded-full border border-neutral-300 hover:border-black transition"><Linkedin className="h-5 w-5" /></a>
                    <a href="mailto:xeniagalkina.ai@gmail.com" aria-label="Email" className="p-2 rounded-full border border-neutral-300 hover:border-black transition"><Mail className="h-5 w-5" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-neutral-200 pt-6">
              <p className="text-sm text-neutral-500 mb-4">Previously at</p>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4 opacity-70">
                {['BenevoletAI','Nuance Healthcare','Civic Tech Lab','Diabetes Cockpit'].map((brand) => (
                  <span key={brand} className="text-neutral-500 text-sm sm:text-base font-medium tracking-wide">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mx-auto max-w-3xl mt-16 sm:mt-20">
          <h2 className="text-lg font-semibold text-neutral-500 tracking-widest mb-6">WHAT I CAN HELP WITH</h2>
          <ul className="space-y-4 text-lg">
            {[
              'Building high-performing product teams',
              'Developing product and AI strategies',
              'Career coaching for PMs',
              'Fundraising for startups'
            ].map((item) => (
              <li key={item} className="border-b border-neutral-200 pb-2">{item}</li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-3xl mt-16 sm:mt-20">
          <h2 className="text-lg font-semibold text-neutral-500 tracking-widest mb-6">EXPERIENCE</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold">Founder & CEO, Optic</h3>
              <p className="mt-2 text-neutral-600">Building AI-native biopharma. Raised $12M from Kleiner Perkins and Greylock. Trusted by Stanford, Puretech, Southern Research, Innoviva, UNC, and more.</p>
            </div>
            <div>
              <h3 className="font-semibold">Director of Product, Google</h3>
              <p className="mt-2 text-neutral-600">Led an org of 200+ across PM, UX, and Engineering. Founding PM for Google’s VR/AR group. Launched Cardboard, Daydream, Tilt Brush, YouTube VR, and Stadia.</p>
            </div>
            <div>
              <h3 className="font-semibold">Head of Mobile, YouTube</h3>
              <p className="mt-2 text-neutral-600">Launched the YouTube app for iOS, Android, and mobile web. Negotiated key distribution deals, including with Apple. Scaled the product from 0 to 1B+ users.</p>
            </div>
            <div>
              <h3 className="font-semibold">Angel Investor & Advisor</h3>
              <p className="mt-2 text-neutral-600">Backed Coda, Grammarly, PandaDoc, Titan, Reface, FlutterFlow, Chatfuel, DressX, and others.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl mt-16 sm:mt-20 mb-16">
          <h2 className="text-lg font-semibold text-neutral-500 tracking-widest mb-6">COMMUNITY</h2>
          <p className="text-neutral-600">Author of the @dobry blog. Co-founder of the Mesto.co online community and DobryDom co-living in San Francisco. Certified yoga teacher.</p>
        </section>

        <footer className="py-10 text-center text-sm text-neutral-500 border-t border-neutral-200">
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </footer>
      </main>
    </div>
  )
}
