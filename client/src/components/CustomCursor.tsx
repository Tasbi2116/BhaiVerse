import { useEffect, useRef } from 'react'

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null)
    const ringRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const dot = dotRef.current
        const ring = ringRef.current
        if (!dot || !ring) return

        let mouseX = 0, mouseY = 0
        let ringX = 0, ringY = 0

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX
            mouseY = e.clientY
            dot.style.left = `${mouseX - 4}px`
            dot.style.top = `${mouseY - 4}px`
        }

        const animateRing = () => {
            ringX += (mouseX - ringX - 16) * 0.12
            ringY += (mouseY - ringY - 16) * 0.12
            ring.style.left = `${ringX}px`
            ring.style.top = `${ringY}px`
            requestAnimationFrame(animateRing)
        }

        const onMouseEnterLink = () => {
            ring.style.transform = 'scale(2)'
            ring.style.borderColor = 'rgba(139, 92, 246, 0.8)'
        }
        const onMouseLeaveLink = () => {
            ring.style.transform = 'scale(1)'
            ring.style.borderColor = 'rgba(59, 130, 246, 0.5)'
        }

        document.addEventListener('mousemove', onMouseMove)
        const links = document.querySelectorAll('a, button')
        links.forEach(l => {
            l.addEventListener('mouseenter', onMouseEnterLink)
            l.addEventListener('mouseleave', onMouseLeaveLink)
        })

        animateRing()

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    )
}