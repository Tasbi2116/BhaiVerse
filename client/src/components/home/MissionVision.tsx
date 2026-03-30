import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye } from 'lucide-react'

const cards = [
    {
        icon: Target,
        label: 'Our Mission',
        color: 'electric',
        gradient: 'from-electric/20 to-transparent',
        border: 'border-electric/30',
        glow: 'hover:shadow-electric/20',
        text: 'To empower businesses and individuals by delivering world-class digital solutions — from web platforms to mobile apps — that drive growth, efficiency, and impact in the modern digital landscape.',
    },
    {
        icon: Eye,
        label: 'Our Vision',
        color: 'purple',
        gradient: 'from-purple/20 to-transparent',
        border: 'border-purple/30',
        glow: 'hover:shadow-purple/20',
        text: 'To become the leading digital transformation partner in South Asia, known for innovation, reliability, and results. We envision a future where every business — no matter the size — has access to cutting-edge technology.',
    },
]

export default function MissionVision() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="section-pad bg-dark relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-electric font-mono text-sm tracking-widest uppercase">Who We Are</span>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3">
                        Mission &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-purple">Vision</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cards.map((card, i) => {
                        const Icon = card.icon
                        return (
                            <motion.div
                                key={card.label}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className={`group relative rounded-2xl border ${card.border} bg-dark-100 p-8
                  hover:shadow-2xl ${card.glow} transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
                            >
                                {/* Background glow */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.gradient}`} />
                                <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${card.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} border ${card.border}
                  flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon size={24} className={`text-${card.color}`} />
                                </div>

                                <h3 className="font-display font-bold text-2xl text-white mb-4">{card.label}</h3>
                                <p className="text-slate-400 font-mono text-sm leading-relaxed">{card.text}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}