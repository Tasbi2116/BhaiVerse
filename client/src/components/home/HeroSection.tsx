import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Zap, ArrowDown, Code2 } from 'lucide-react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const typewriterTexts = [
    'We Build Websites',
    'We Develop Mobile Apps',
    'We Do Digital Marketing',
    'We Consult IT Strategy',
    'We Maintain Your Digital Presence',
]

const floatingSnippets = [
    { text: 'const app = new BhaiVerse()', x: '5%', y: '20%', delay: 0 },
    { text: '<Component />', x: '80%', y: '15%', delay: 1.5 },
    { text: 'npm run build', x: '75%', y: '70%', delay: 0.8 },
    { text: 'git push origin main', x: '3%', y: '75%', delay: 2 },
    { text: '{ transform: ideas }', x: '60%', y: '85%', delay: 1.2 },
    { text: 'async function launch()', x: '15%', y: '88%', delay: 0.5 },
]

export default function HeroSection() {
    const [displayText, setDisplayText] = useState('')
    const [textIndex, setTextIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [particlesReady, setParticlesReady] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => setParticlesReady(true))
    }, [])

    // Typewriter effect
    useEffect(() => {
        const current = typewriterTexts[textIndex]
        const speed = isDeleting ? 40 : 80

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(current.slice(0, charIndex + 1))
                if (charIndex + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), 1800)
                } else {
                    setCharIndex(c => c + 1)
                }
            } else {
                setDisplayText(current.slice(0, charIndex - 1))
                if (charIndex - 1 === 0) {
                    setIsDeleting(false)
                    setTextIndex(i => (i + 1) % typewriterTexts.length)
                    setCharIndex(0)
                } else {
                    setCharIndex(c => c - 1)
                }
            }
        }, speed)

        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, textIndex])

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark">
            {/* Particle Network Background */}
            {particlesReady && (
                <Particles
                    id="tsparticles"
                    options={{
                        background: { color: { value: 'transparent' } },
                        fpsLimit: 30,
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: 'grab' },
                                onClick: { enable: true, mode: 'push' },
                            },
                            modes: {
                                grab: { distance: 160, links: { opacity: 0.5 } },
                                push: { quantity: 3 },
                            },
                        },
                        particles: {
                            color: { value: ['#3b82f6', '#8b5cf6', '#06b6d4'] },
                            links: {
                                color: '#3b82f6',
                                distance: 130,
                                enable: true,
                                opacity: 0.2,
                                width: 1,
                            },
                            move: {
                                enable: true,
                                speed: 0.2,
                                direction: 'none',
                                random: true,
                                straight: false,
                                outModes: { default: 'bounce' },
                            },
                            number: {
                                density: { enable: true, width: 900 },
                                value: 80,
                            },
                            opacity: { value: 0.4 },
                            shape: { type: 'circle' },
                            size: { value: { min: 1, max: 3 } },
                        },
                        detectRetina: true,
                    }}
                    className="absolute inset-0 z-0"
                />
            )}

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-grid opacity-30 z-0" />

            {/* Radial gradient center glow */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.08) 0%, transparent 70%)',
                }}
            />

            {/* Floating Code Snippets */}
            {floatingSnippets.map((s, i) => (
                <motion.div
                    key={i}
                    className="absolute hidden lg:block font-mono text-xs text-electric/20 pointer-events-none z-10 whitespace-nowrap"
                    style={{ left: s.x, top: s.y }}
                    animate={{ y: [0, -12, 0], opacity: [0.15, 0.35, 0.15] }}
                    transition={{ duration: 5 + i, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
                >
                    {s.text}
                </motion.div>
            ))}

            {/* Main Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/30
            bg-electric/5 text-electric text-xs font-mono mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                    Digital Solutions Agency · Based in Khulna, BD
                </motion.div>

                {/* Company Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-white mb-4 leading-none tracking-tight"
                >
                    Bhai
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-purple to-cyan">
                        Verse
                    </span>
                </motion.h1>

                {/* Typewriter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="h-10 flex items-center justify-center mb-6"
                >
                    <span className="font-mono text-xl sm:text-2xl text-slate-300">
                        {displayText}
                        <span className="inline-block w-0.5 h-6 bg-electric ml-1 animate-pulse" />
                    </span>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-slate-400 font-mono text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Transform your ideas into powerful digital solutions. We combine
                    cutting-edge technology with creative design to deliver exceptional results.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <NavLink
                        to="/projects"
                        className="group flex items-center gap-2 px-8 py-3.5 rounded-xl font-mono font-semibold text-white
              bg-gradient-to-r from-electric to-purple glow-blue hover:scale-105 active:scale-95
              transition-all duration-300 text-sm"
                    >
                        <Code2 size={16} />
                        View Our Work
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="group flex items-center gap-2 px-8 py-3.5 rounded-xl font-mono font-semibold
              border border-electric/40 text-electric hover:bg-electric/10 hover:border-electric
              hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
                    >
                        <Zap size={16} />
                        Get Started
                    </NavLink>
                </motion.div>

                {/* Tech Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    className="flex flex-wrap gap-3 justify-center mt-12"
                >
                    {['React', 'TypeScript', 'Node.js', 'React Native', 'Tailwind'].map((tech, i) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.6 + i * 0.1 }}
                            className="px-3 py-1 rounded-full bg-dark-100 border border-electric/20
                text-slate-400 text-xs font-mono hover:border-electric/60 hover:text-electric
                transition-all duration-300"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-slate-500 text-xs font-mono">scroll down</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown size={18} className="text-electric" />
                </motion.div>
            </motion.div>
        </section>
    )
}