import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Instagram, Linkedin } from 'lucide-react'

const AVATAR = '/avatar.jpg'
const TODAY = new Date().toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

const posts = [
  {
    id: 'NO.002',
    category: 'Notes',
    date: 'Mar 2026',
    time: '6 min read',
    title: 'Do we know what intelligence is?',
    description: 'How diving into evolution of intelligence gave me new appreciation of fish.',
    style: 'image',
  },
  {
    id: 'NO.003',
    category: 'Notes',
    date: 'Feb 2026',
    time: '5 min read',
    title: 'The Body Problem',
    description: 'What mushrooms teach us about machine consciousness.',
    style: 'image-2',
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3ecde] text-stone-900">
      <div className="pointer-events-none fixed inset-0 brutalist-noise opacity-30" />

      <header className="border-b border-stone-900/10">
        <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="text-[11px] uppercase tracking-[0.34em] text-stone-700">
            Xenia archive
          </a>
          <div className="flex items-center gap-3 text-stone-600">
            <a
              href="https://www.linkedin.com/in/xeniagalkina/"
              aria-label="LinkedIn"
              className="transition hover:text-cyan-700"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/xenia_vg/"
              aria-label="Instagram"
              className="transition hover:text-cyan-700"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="px-5 pb-16 pt-8 sm:px-8 sm:pt-12">
        <section className="mx-auto w-full max-w-[1500px]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center"
          >
            <div className="h-24 w-24 overflow-hidden rounded-full border border-stone-900/10 bg-white/50 p-1">
              <img src={AVATAR} alt="Xenia Galkina" className="h-full w-full rounded-full object-cover" />
            </div>
            <p className="mt-6 text-[11px] uppercase tracking-[0.34em] text-cyan-700">About me</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-700 sm:text-base">
              I&apos;m Xenia. I&apos;m a founder building a product for AIs to use. I love space, hard sci-fi, and
              occasionally obsess over deep questions. This is a digital ghost of what&apos;s happening in my brain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mt-4 text-6xl font-semibold uppercase tracking-[-0.06em] text-stone-900 sm:text-7xl lg:text-[7.5rem]">
              Blog
            </h1>
            <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-stone-700 sm:text-base">
              A working archive. Notes on AI, intelligence, consciousness, and the ideas I keep returning to.
            </p>
          </motion.div>

          <div className="mt-10">
            <div className="brutalist-card relative overflow-hidden p-6 sm:p-7">
              <div className="absolute right-6 top-6 hidden items-center justify-center border border-cyan-700/30 px-4 py-3 text-[10px] uppercase tracking-[0.28em] text-cyan-700 sm:flex">
                NO.001
              </div>
              <div className="absolute left-[28%] top-[24%] hidden h-48 w-px bg-stone-900/10 lg:block" />

              <div className="flex items-center justify-between border-b border-stone-900/10 pb-3 text-[10px] uppercase tracking-[0.28em] text-stone-500">
                <span>First one in</span>
                <span>NO.021</span>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-5">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-700">AI / product / essay</p>
                  <h2 className="max-w-2xl text-4xl uppercase leading-[0.96] tracking-[-0.06em] text-stone-900 sm:text-5xl">
                    How to think about Artificial Intelligence?
                  </h2>
                  <p className="max-w-xl text-sm leading-7 text-stone-700">
                    Open questions about consciousness, intelligence and what are we building ?
                  </p>
                  <a
                    href="/article/designing-for-humans"
                    className="inline-flex items-center gap-2 border border-stone-900/15 bg-white/45 px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-stone-800 transition hover:border-cyan-700 hover:text-cyan-700"
                  >
                    Open
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="poster-frame poster-image min-h-[320px] p-5">
                  <img
                    src="/featured-eye.png"
                    alt="Surreal eye illustration for featured article"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="poster-image-overlay" />
                  <div className="poster-topline">
                    <span>{TODAY}</span>
                    <span>2-3 min read</span>
                  </div>
                  <div className="poster-copy">
                    <span>Notes</span>
                    <span>NO.001</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 w-full max-w-[1500px]">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500">Upcoming</p>
              <h2 className="mt-2 text-2xl uppercase tracking-[-0.05em] text-stone-900 sm:text-3xl">
                Next articles
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="brutalist-card overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-stone-900/10 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-stone-500">
                  <span>{post.category}</span>
                  <span>{post.id}</span>
                </div>

                {post.style === 'image' || post.style === 'image-2' ? (
                  <div className="poster-frame poster-image min-h-[290px] p-5">
                    <img
                      src={post.style === 'image' ? '/surreal-note.png' : '/body-problem.png'}
                      alt={post.style === 'image' ? 'Surreal illustration for note preview' : 'Colorful surreal landscape for note preview'}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="poster-image-overlay" />
                    <div className="poster-topline">
                      <span>{post.date}</span>
                      <span>{post.time}</span>
                    </div>
                    <div className="poster-copy poster-copy-small">
                      <span>{post.category}</span>
                      <span>{post.id}</span>
                    </div>
                  </div>
                ) : (
                  <div className={`poster-frame min-h-[290px] p-5 ${`poster-${post.style}`}`}>
                    <div className="poster-topline">
                      <span>{post.date}</span>
                      <span>{post.time}</span>
                    </div>
                    <div className="poster-grid-box" />
                    <div className="poster-shape poster-shape-a" />
                    <div className="poster-shape poster-shape-b" />
                    <div className="poster-curve" />
                    <div className="poster-copy poster-copy-small">
                      <span>{post.category}</span>
                      <span>{post.id}</span>
                    </div>
                  </div>
                )}

                <div className="px-5 pb-5 pt-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500">
                    {post.category} / {post.time}
                  </p>
                  <h3 className="mt-3 text-[1.7rem] uppercase leading-[1.02] tracking-[-0.05em] text-stone-900">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-stone-600">{post.description}</p>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-stone-500">Coming soon</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
