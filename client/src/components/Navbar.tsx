import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-dark/80 backdrop-blur-xl border-b border-electric/20 shadow-lg shadow-electric/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric to-purple flex items-center justify-center glow-blue">
                            <Zap size={16} className="text-white" />
                        </div>
                        <span className="font-display font-bold text-lg text-white group-hover:text-electric transition-colors">
                            Bhai<span className="text-electric">Verse</span>
                        </span>
                    </NavLink>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) =>
                                    `text-sm font-mono transition-all duration-300 relative group ${isActive ? 'text-electric' : 'text-slate-400 hover:text-white'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {label}
                                        <span
                                            className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-electric to-purple transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                                }`}
                                        />
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <NavLink
                        to="/contact"
                        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm font-semibold text-white
              bg-gradient-to-r from-electric to-purple hover:opacity-90 transition-all duration-300
              glow-blue hover:scale-105 active:scale-95"
                    >
                        <Zap size={14} />
                        Get Started
                    </NavLink>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-slate-400 hover:text-white transition-colors"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-dark-100/95 backdrop-blur-xl border-b border-electric/20 overflow-hidden"
                    >
                        <div className="px-4 py-4 flex flex-col gap-4">
                            {navLinks.map(({ to, label }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `font-mono text-sm py-2 border-b border-white/5 ${isActive ? 'text-electric' : 'text-slate-400'
                                        }`
                                    }
                                >
                                    {label}
                                </NavLink>
                            ))}
                            <NavLink
                                to="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-mono text-sm
                  font-semibold text-white bg-gradient-to-r from-electric to-purple mt-2"
                            >
                                <Zap size={14} /> Get Started
                            </NavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}