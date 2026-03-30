import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Code2, Globe, Rocket, Star, TrendingUp } from 'lucide-react'

const milestones = [
    {
        year: '2021',
        icon: Zap,
        title: 'The Spark',
        desc: 'BhaiVerse was born from a dorm room in Khulna — a vision to make professional digital solutions accessible to everyone.',
        color: 'electric',
    },
    {
        year: '2022',
        icon: Code2,
        title: 'First Clients',
        desc: 'Delivered our first 10 web projects, earning 100% client satisfaction and building our reputation locally.',
        color: 'purple',
    },
    {
        year: '2022',
        icon: Globe,
        title: 'Going Digital',
        desc: 'Expanded into digital marketing and IT consulting, serving clients beyond Bangladesh for the first time.',
        color: 'cyan',
    },
    {
        year: '2023',
        icon: Rocket,
        title: 'Mobile Launch',
        desc: 'Launched our mobile app development division with React Native & Expo, delivering 5 Android apps in the first quarter.',
        color: 'electric',
    },
    {
        year: '2024',
        icon: Star,
        title: '30+ Clients',
        desc: 'Crossed 30 happy clients and 50 delivered projects. Established our agile development process and core team.',
        color: 'purple',
    },
    {
        year: '2025',
        icon: TrendingUp,
        title: 'Scaling Up',
        desc: 'Expanding our team and services, targeting regional leadership in digital transformation across South Asia.',
        color: 'cyan',
    },
]

const colorMap: Record<string, string> = {
    electric: 'border-electric/50 bg-electric/10 text-electric shadow-electric/20',
    purple: 'border-purple/50 bg-purple/10 text-purple shadow-purple/20',
    cyan: 'border-cyan/50 bg-cyan/10 text-cyan shadow-cyan/20',
}

const lineColor: Record<string, string> = {
    electric: 'bg-electric',
    purple: 'bg-purple',
    cyan: 'bg-cyan',
}

export default function Timeline() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="section-pad bg-dark-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="max-w-4xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-electric font-mono text-sm tracking-widest uppercase">
                        Our Journey
                    </span>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3">
                        Company{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">
                            Milestones
                        </span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical center line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        style={{ originY: 0 }}
                        className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b
              from-electric via-purple to-cyan opacity-30"
                    />

                    <div className="space-y-12">
                        {milestones.map((m, i) => {
                            const Icon = m.icon
                            const isLeft = i % 2 === 0

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    className={`relative flex items-center gap-6
                    ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    {/* Content card */}
                                    <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
                                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono
                      font-bold mb-2 border ${colorMap[m.color]}`}>
                                            {m.year}
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-white mb-2">{m.title}</h3>
                                        <p className="text-slate-400 font-mono text-xs leading-relaxed">{m.desc}</p>
                                    </div>

                                    {/* Center icon node */}
                                    <div className="w-2/12 flex justify-center shrink-0 z-10">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={inView ? { scale: 1 } : {}}
                                            transition={{ duration: 0.4, delay: i * 0.15 + 0.3, type: 'spring' }}
                                            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center
                        shadow-lg ${colorMap[m.color]}`}
                                        >
                                            <Icon size={18} />
                                        </motion.div>
                                    </div>

                                    {/* Empty space for opposite side */}
                                    <div className="w-5/12" />
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}