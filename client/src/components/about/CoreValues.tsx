import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
    Shield, Zap, Users, Lightbulb,
    HeartHandshake, TrendingUp,
} from 'lucide-react'

const values = [
    {
        icon: Shield,
        title: 'Integrity',
        desc: 'We are transparent, honest, and accountable in everything we do. No hidden costs, no empty promises.',
        color: 'electric',
    },
    {
        icon: Zap,
        title: 'Excellence',
        desc: 'We hold ourselves to the highest standards — from code quality to client communication.',
        color: 'purple',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        desc: 'We stay ahead of the curve, constantly learning and applying the latest technologies.',
        color: 'cyan',
    },
    {
        icon: Users,
        title: 'Collaboration',
        desc: 'We work as partners, not vendors. Your success is our success — always.',
        color: 'electric',
    },
    {
        icon: HeartHandshake,
        title: 'Client Focus',
        desc: 'Every decision we make starts with one question: how does this benefit our client?',
        color: 'purple',
    },
    {
        icon: TrendingUp,
        title: 'Growth Mindset',
        desc: 'We embrace challenges, learn from failures, and continuously improve our craft.',
        color: 'cyan',
    },
]

const colorMap: Record<string, string> = {
    electric: 'border-electric/30 bg-electric/10 text-electric',
    purple: 'border-purple/30 bg-purple/10 text-purple',
    cyan: 'border-cyan/30 bg-cyan/10 text-cyan',
}

const hoverMap: Record<string, string> = {
    electric: 'hover:border-electric/60 hover:shadow-electric/10',
    purple: 'hover:border-purple/60 hover:shadow-purple/10',
    cyan: 'hover:border-cyan/60 hover:shadow-cyan/10',
}

export default function CoreValues() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="section-pad bg-dark relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="max-w-6xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan font-mono text-sm tracking-widest uppercase">
                        What Drives Us
                    </span>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3">
                        Our Core{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">
                            Values
                        </span>
                    </h2>
                    <p className="text-slate-400 font-mono text-sm mt-4 max-w-xl mx-auto">
                        These are the principles that guide every line of code, every design decision,
                        and every client interaction.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((val, i) => {
                        const Icon = val.icon
                        return (
                            <motion.div
                                key={val.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`group relative rounded-2xl border border-white/5 bg-dark-100 p-7
                  hover:-translate-y-2 hover:shadow-xl transition-all duration-400 overflow-hidden
                  ${hoverMap[val.color]}`}
                            >
                                {/* Top accent line */}
                                <div className={`absolute top-0 left-0 h-0.5 w-0 group-hover:w-full
                  bg-gradient-to-r from-${val.color} to-transparent transition-all duration-500`} />

                                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5
                  ${colorMap[val.color]} group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon size={20} />
                                </div>

                                <h3 className="font-display font-bold text-lg text-white mb-3">{val.title}</h3>
                                <p className="text-slate-400 font-mono text-sm leading-relaxed">{val.desc}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}