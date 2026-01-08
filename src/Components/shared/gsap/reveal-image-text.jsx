import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const RevelImageTextAnimation = ({ image, children, className }) => {
    const containerRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const image = imageRef.current

        if (!container || !image) return

        const vre = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                toggleActions: 'restart none none reset',
            },
        })

        vre.set(container, {
            autoAlpha: 1,
        })

        vre.from(container, {
            xPercent: 100,
            duration: 1.5,
            ease: 'power2.out',
            delay: -1.5,
        })

        vre.from(image, {
            xPercent: -100,
            scale: 1.3,
            duration: 1.5,
            ease: 'power2.out',
            delay: -1.5,
        })

        // Cleanup on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <div className={`${className} vre-reveal-one`} ref={containerRef}>
            <img
                src={image}
                alt="VRE"
                className="vre-reveal-image-one"
                ref={imageRef}
            />
            {children}
        </div>
    )
}

export default RevelImageTextAnimation
