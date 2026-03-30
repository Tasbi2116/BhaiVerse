import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
    {
        label: 'Frontend',
        color: 'electric',
        items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    },
    {
        label: 'Backend',
        color: 'purple',
        items: ['Node.js', 'Express', 'REST API', 'JWT Auth', 'TypeScript'],
    },
    {
        label: 'Mobile',
        color: 'cyan',
        items: ['React Native', 'Expo', 'Reanimated', 'Android', 'iOS'],
    },
    {
        label: 'Database',
        color: 'electric',
        items: ['Supabase', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
    },
    {
        label: 'Cloud & Deploy',
        color: 'purple',
        items: ['Vercel', 'Render', 'AWS', 'Docker', 'GitHub Actions'],
    },
    {
        label: 'Tools & AI',
        color: 'cyan',
        items: ['OpenAI API', 'Figma', 'Git', 'ESLint', 'Postman'],
    },
]

const colorBorder: Record<string, string> = {
    electric: 'border-electric/30 hover:border-electric/70 hover:text-electric hover:shadow-electric/10',
    purple: 'border-purple/30 hover:border-purple/70 hover:text-purple hover:shadow-purple/10',
    cyan: 'border-cyan/30 hover:border-cyan/70 hover:text-cyan hover:shadow-cyan/10',
}
const colorLabel: Record<string, string> = {
    electric: 'text-electric',
    purple: 'text-purple',
    cyan: 'text-cyan',
}

export default function TechStack() {
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
                    <span className="text-purple font-mono text-sm tracking-widest uppercase">Technology</span>
                    <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3">
                        Our Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-cyan">Stack</span>
                    </h2>
                    <p className="text-slate-400 font-mono text-sm mt-4 max-w-xl mx-auto">
                        We use modern, battle-tested technologies to build fast, scalable, and maintainable products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, ci) => (
                        <motion.div
                            key={cat.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: ci * 0.1 }}
                            className="rounded-2xl border border-white/5 bg-dark-100 p-6"
                        >
                            <h3 className={`font-display font-bold text-sm uppercase tracking-widest mb-4 ${colorLabel[cat.color]}`}>
                                {cat.label}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((item, ii) => (
                                    <motion.span
                                        key={item}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.3, delay: ci * 0.1 + ii * 0.05 }}
                                        className={`px-3 py-1.5 rounded-lg border bg-dark text-slate-400 text-xs font-mono
                      hover:shadow-lg transition-all duration-300 cursor-default ${colorBorder[cat.color]}`}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}