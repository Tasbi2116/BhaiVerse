import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FolderOpen, Users, Layers, Star } from 'lucide-react'

const stats = [
    { icon: FolderOpen, value: 50, suffix: '+', label: 'Projects Delivered', color: 'electric' },
    { icon: Users, value: 30, suffix: '+', label: 'Happy Clients', color: 'purple' },
    { icon: Layers, value: 5, suffix: '', label: 'Core Services', color: 'cyan' },
    { icon: Star, value: 100, suffix: '%', label: 'Client Satisfaction', color: 'electric' },
]

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!active) return
        let start = 0
        const duration = 1800
        const step = Math.ceil(target / (duration / 16))
        const timer = setInterval(() => {
            start += step
            if (start >= target) { setCount(target); clearInterval(timer) }
            else setCount(start)
        }, 16)
        return () => clearInterval(timer)
    }, [active, target])

    return <span>{count}{suffix}</span>
}

export default function StatsSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const colorMap: Record<string, string> = {
        electric: 'from-electric/20 to-transparent border-electric/30 text-electric',
        purple: 'from-purple/20 to-transparent border-purple/30 text-purple',
        cyan: 'from-cyan/20 to-transparent border-cyan/30 text-cyan',
    }

    return (
        <section ref={ref} className="section-pad bg-dark-100 relative overflow-hidden">
            <div className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)' }} />
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-electric font-mono text-sm tracking-widest uppercase">Our Impact</span>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3">
                        Numbers That <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">Speak</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className={`relative rounded-2xl border bg-dark p-7 text-center
                  hover:-translate-y-2 hover:shadow-2xl transition-all duration-400 overflow-hidden
                  bg-gradient-to-b ${colorMap[stat.color]}`}
                            >
                                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mx-auto mb-4
                  bg-gradient-to-br ${colorMap[stat.color]}`}>
                                    <Icon size={20} />
                                </div>
                                <div className="font-display font-black text-4xl text-white mb-2">
                                    <CountUp target={stat.value} suffix={stat.suffix} active={inView} />
                                </div>
                                <p className="text-slate-400 font-mono text-xs">{stat.label}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}