import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const reasons = [
    { title: 'End-to-End Service', desc: 'From concept to deployment and beyond — we handle everything under one roof.' },
    { title: 'Agile & Transparent', desc: 'Sprint-based delivery with daily updates. You always know exactly where your project stands.' },
    { title: 'Modern Tech Stack', desc: 'We use the latest, most performant technologies — no legacy code, no outdated frameworks.' },
    { title: 'Mobile-First Approach', desc: 'Every product we build is fully responsive and optimized for all screen sizes by default.' },
    { title: 'Post-Launch Support', desc: 'We don\'t disappear after delivery. Ongoing maintenance and support is part of our commitment.' },
    { title: 'Competitive Pricing', desc: 'World-class quality at fair, transparent pricing. No hidden fees, ever.' },
    { title: 'Fast Turnaround', desc: 'We respect your deadlines. Our agile process ensures on-time delivery without compromising quality.' },
    { title: 'Dedicated Team', desc: 'You get a dedicated point of contact and team throughout the entire project lifecycle.' },
]

export default function WhyChooseUs() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="section-pad bg-dark relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20" />

            {/* Glow */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)',
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-purple font-mono text-sm tracking-widest uppercase">
                        Why BhaiVerse
                    </span>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3">
                        Why Choose{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-electric">
                            Us
                        </span>
                    </h2>
                    <p className="text-slate-400 font-mono text-sm mt-4 max-w-xl mx-auto">
                        Here's what sets us apart from the rest.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={r.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group flex flex-col gap-3 p-6 rounded-2xl border border-white/5
                bg-dark-100 hover:border-electric/30 hover:-translate-y-1
                hover:shadow-xl hover:shadow-electric/5 transition-all duration-300"
                        >
                            <CheckCircle2
                                size={22}
                                className="text-electric group-hover:scale-110 transition-transform duration-300 shrink-0"
                            />
                            <h4 className="font-display font-bold text-sm text-white">{r.title}</h4>
                            <p className="text-slate-400 font-mono text-xs leading-relaxed">{r.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}