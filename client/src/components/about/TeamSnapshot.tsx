import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Users, ArrowRight } from 'lucide-react'

const previews = [
  {
    initials: 'MT',
    name: 'Md Tasbi Hassan',
    role: 'Founder & Lead Developer',
    color: 'electric',
    photo: '/team/Tasbi.png',
  },
  {
    initials: 'SM',
    name: 'Shihab Mohammad Kamel',
    role: 'Chief Technical Officer',
    color: 'purple',
    photo: '/team/Shihab.png',
  },
  {
    initials: 'NH',
    name: 'Md Nazmul Hasan',
    role: 'Backend Engineer',
    color: 'cyan',
    photo: '/team/Nazmul.png',
  },
  {
    initials: 'TM',
    name: 'Team Member',
    role: 'Mobile Developer',
    color: 'electric',
    photo: '/team/member4.jpg',
  },
]

const colorMap: Record<string, string> = {
  electric: 'from-electric to-purple',
  purple: 'from-purple to-cyan',
  cyan: 'from-cyan to-electric',
}

const borderMap: Record<string, string> = {
  electric: 'ring-electric/50',
  purple: 'ring-purple/50',
  cyan: 'ring-cyan/50',
}

interface AvatarProps {
  photo: string
  initials: string
  color: string
  name: string
}

// Smart avatar — shows photo if available, falls back to initials
function Avatar({ photo, initials, color, name }: AvatarProps) {
  const [imgFailed, setImgFailed] = useState(false)

  if (!imgFailed) {
    return (
      <img
        src={photo}
        alt={name}
        onError={() => setImgFailed(true)}
        className={`w-20 h-20 rounded-2xl object-cover object-top ring-2 ${borderMap[color]}
          group-hover:scale-110 group-hover:ring-4 transition-all duration-300`}
      />
    )
  }

  // Fallback: gradient initials avatar
  return (
    <div
      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colorMap[color]}
        flex items-center justify-center font-display font-black text-xl text-white
        group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
    >
      {initials}
    </div>
  )
}

export default function TeamSnapshot() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-dark-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-electric font-mono text-sm tracking-widest uppercase">
            The People
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3">
            Meet The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-purple">
              Team
            </span>
          </h2>
          <p className="text-slate-400 font-mono text-sm mt-4 max-w-xl mx-auto">
            Talented individuals united by a shared passion for building great digital products.
          </p>
        </motion.div>

        {/* Avatar row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {previews.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, type: 'spring' }}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              <Avatar
                photo={member.photo}
                initials={member.initials}
                color={member.color}
                name={member.name}
              />
              <div>
                <p className="font-display font-bold text-sm text-white">{member.name}</p>
                <p className="text-slate-500 font-mono text-xs">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <NavLink
            to="/team"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-mono
              font-semibold text-white bg-gradient-to-r from-electric to-purple
              hover:scale-105 active:scale-95 transition-all duration-300 text-sm glow-blue"
          >
            <Users size={16} />
            Meet The Full Team
            <ArrowRight size={16} />
          </NavLink>
        </motion.div>
      </div>
    </section>
  )
}