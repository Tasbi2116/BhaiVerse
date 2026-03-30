import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, Globe } from 'lucide-react'

export default function CompanyStory() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="section-pad bg-dark-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-electric font-mono text-sm tracking-widest uppercase">
                        Our Story
                    </span>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3">
                        How It All{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-purple">
                            Began
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Story text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="space-y-6"
                    >
                        {[
                            {
                                text: `BhaiVerse was founded with a single powerful belief — that every business,
                  regardless of size, deserves access to world-class digital solutions. What started
                  as a small freelance operation in Khulna quickly grew into a full-service digital
                  agency driven by passion, precision, and performance.`,
                            },
                            {
                                text: `Our team is built from the ground up with engineers, designers, and strategists
                  who genuinely care about the products they build. We don't just write code — we
                  craft experiences that users love and businesses rely on.`,
                            },
                            {
                                text: `Today, BhaiVerse serves clients across Bangladesh and beyond, delivering
                  everything from custom web platforms and mobile apps to digital marketing campaigns
                  and IT consulting — all under one roof.`,
                            },
                        ].map((p, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                                className="text-slate-400 font-mono text-sm leading-relaxed"
                            >
                                {p.text}
                            </motion.p>
                        ))}
                    </motion.div>

                    {/* Mission / Vision / Global cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-5"
                    >
                        {[
                            {
                                icon: Target,
                                label: 'Our Mission',
                                color: 'electric',
                                border: 'border-electric/30',
                                bg: 'bg-electric/10',
                                text: 'Empower businesses with cutting-edge digital solutions that drive measurable growth and lasting impact.',
                            },
                            {
                                icon: Eye,
                                label: 'Our Vision',
                                color: 'purple',
                                border: 'border-purple/30',
                                bg: 'bg-purple/10',
                                text: 'Become the most trusted digital transformation partner in South Asia — known for innovation and results.',
                            },
                            {
                                icon: Globe,
                                label: 'Our Reach',
                                color: 'cyan',
                                border: 'border-cyan/30',
                                bg: 'bg-cyan/10',
                                text: 'Serving clients across Bangladesh and globally, with a growing network of partners and collaborators.',
                            },
                        ].map((card, i) => {
                            const Icon = card.icon
                            return (
                                <motion.div
                                    key={card.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                                    className={`flex items-start gap-4 p-5 rounded-xl border ${card.border}
                    bg-dark hover:bg-dark-200 transition-all duration-300 group`}
                                >
                                    <div className={`w-10 h-10 rounded-lg ${card.bg} border ${card.border}
                    flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon size={18} className={`text-${card.color}`} />
                                    </div>
                                    <div>
                                        <h4 className={`font-display font-bold text-sm text-${card.color} mb-1`}>
                                            {card.label}
                                        </h4>
                                        <p className="text-slate-400 font-mono text-xs leading-relaxed">{card.text}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}