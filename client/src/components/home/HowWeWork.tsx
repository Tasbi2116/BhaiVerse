import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Paintbrush, Code2, TestTube, Rocket, HeartHandshake } from 'lucide-react'

const steps = [
    { icon: Search, title: 'Discovery & Planning', desc: 'We deep-dive into your goals, audience, and requirements to craft a clear project roadmap.', color: 'electric' },
    { icon: Paintbrush, title: 'Design & Prototype', desc: 'Our designers create stunning wireframes and interactive prototypes aligned with your brand.', color: 'purple' },
    { icon: Code2, title: 'Development', desc: 'Sprint-based agile development with daily progress updates and clean, scalable code.', color: 'cyan' },
    { icon: TestTube, title: 'Testing & QA', desc: 'Rigorous cross-device testing, performance audits, and bug-free delivery guaranteed.', color: 'electric' },
    { icon: Rocket, title: 'Deployment & Launch', desc: 'Seamless deployment to production with zero-downtime and full monitoring setup.', color: 'purple' },
    { icon: HeartHandshake, title: 'Maintenance & Support', desc: 'Ongoing support, updates, and improvements to keep your product ahead of the curve.', color: 'cyan' },
]

const colorMap: Record<string, string> = {
    electric: 'text-electric border-electric/40 bg-electric/10 shadow-electric/20',
    purple: 'text-purple border-purple/40 bg-purple/10 shadow-purple/20',
    cyan: 'text-cyan border-cyan/40 bg-cyan/10 shadow-cyan/20',
}

export default function HowWeWork() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="section-pad bg-dark-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan font-mono text-sm tracking-widest uppercase">Our Process</span>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3">
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-electric">Work</span>
                    </h2>
                    <p className="text-slate-400 font-mono text-sm mt-4 max-w-xl mx-auto">
                        Agile methodology, transparent communication, and results-driven sprints at every stage.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, i) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`group relative rounded-2xl border border-white/5 bg-dark p-7
                  hover:-translate-y-2 hover:shadow-xl transition-all duration-400 overflow-hidden`}
                            >
                                {/* Step number */}
                                <span className="absolute top-4 right-4 font-display text-5xl font-black text-white/5 select-none">
                                    0{i + 1}
                                </span>

                                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5
                  ${colorMap[step.color]} group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon size={20} />
                                </div>

                                <h3 className="font-display font-bold text-lg text-white mb-3">{step.title}</h3>
                                <p className="text-slate-400 font-mono text-sm leading-relaxed">{step.desc}</p>

                                {/* Bottom glow line */}
                                <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full
                  bg-gradient-to-r from-${step.color} to-transparent transition-all duration-500`} />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}