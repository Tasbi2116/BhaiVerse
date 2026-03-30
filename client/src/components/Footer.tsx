import { NavLink } from 'react-router-dom'
import { Mail, Phone, MapPin, Zap } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-dark-100 border-t border-electric/10 section-pad">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric to-purple flex items-center justify-center">
                                <Zap size={16} className="text-white" />
                            </div>
                            <span className="font-display font-bold text-xl text-white">
                                Bhai<span className="text-electric">Verse</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm font-mono leading-relaxed max-w-xs">
                            Transform your ideas into powerful digital solutions. We combine cutting-edge technology with creative design.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="https://www.linkedin.com/in/md-tasbi-hassan-b3693b238/" target="_blank" rel="noreferrer"
                                className="w-9 h-9 rounded-lg bg-dark-200 border border-electric/20 flex items-center justify-center
                  text-slate-400 hover:text-electric hover:border-electric/60 transition-all duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="https://github.com/Tasbi2116" target="_blank" rel="noreferrer"
                                className="w-9 h-9 rounded-lg bg-dark-200 border border-electric/20 flex items-center justify-center
                  text-slate-400 hover:text-electric hover:border-electric/60 transition-all duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>
                            <a href="mailto:tasbi2116@cseku.ac.bd"
                                className="w-9 h-9 rounded-lg bg-dark-200 border border-electric/20 flex items-center justify-center
                  text-slate-400 hover:text-electric hover:border-electric/60 transition-all duration-300">
                                <Mail size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-bold text-white text-sm mb-4 text-electric">Quick Links</h4>
                        <ul className="space-y-2">
                            {['/', '/about', '/services', '/projects', '/team', '/contact'].map((path, i) => {
                                const labels = ['Home', 'About', 'Services', 'Projects', 'Team', 'Contact']
                                return (
                                    <li key={path}>
                                        <NavLink to={path}
                                            className="text-slate-400 hover:text-electric text-sm font-mono transition-colors duration-300">
                                            {labels[i]}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold text-white text-sm mb-4 text-electric">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-slate-400 text-sm font-mono">
                                <MapPin size={14} className="text-electric mt-0.5 shrink-0" />
                                Chacra Dalmil, Jashore, Khulna
                            </li>
                            <li className="flex items-center gap-2 text-slate-400 text-sm font-mono">
                                <Phone size={14} className="text-electric shrink-0" />
                                +8801644539154
                            </li>
                            <li className="flex items-center gap-2 text-slate-400 text-sm font-mono">
                                <Mail size={14} className="text-electric shrink-0" />
                                tasbi2116@cseku.ac.bd
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-electric/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-xs font-mono">
                        © {new Date().getFullYear()} BhaiVerse. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-xs font-mono">
                        Built with <span className="text-electric">React + TypeScript</span> · Powered by passion
                    </p>
                </div>
            </div>
        </footer>
    )
}