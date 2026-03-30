import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function AboutHero() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    return (
        <section
            ref={ref}
            className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-dark pt-24 pb-16"
        >
            {/* Grid background */}
            <div className="absolute inset-0 bg-grid opacity-20" />

            {/* Radial glow */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 70%)',
                }}
            />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border
            border-purple/30 bg-purple/5 text-purple text-xs font-mono mb-6"
                >
                    <Zap size={12} />
                    About BhaiVerse
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight"
                >
                    We Are{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-purple to-cyan">
                        BhaiVerse
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-slate-400 font-mono text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
                >
                    A passionate team of developers, designers, and strategists building
                    world-class digital solutions from Khulna, Bangladesh — for the world.
                </motion.p>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-32 h-px bg-gradient-to-r from-electric via-purple to-cyan mx-auto mt-8"
                />
            </div>
        </section>
    )
}