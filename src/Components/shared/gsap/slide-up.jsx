import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const SectionSlideUp = ({ children, className }) => {
    const elementsRef = useRef([])

    useEffect(() => {
        const elements = elementsRef.current

        elements.forEach((element) => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    markers: false,
                },
            })

            let tt = gsap.from(
                element,
                {
                    duration: 1,
                    skewY: 0,
                    transformOrigin: 'left top',
                    autoAlpha: 0,
                    y: 100,
                    ease: 'expo.out',
                    toggleActions: 'restart pause resume reverse',
                    clearProps: 'all',
                },
                '+=0.2'
            )

            timeline.add(tt)
        })

        // Cleanup on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <>
            <div
                className={`${className} vre-slide-up-gsap`}
                ref={(el) => elementsRef.current.push(el)}
            >
                {children}
            </div>
        </>
    )
}

export default SectionSlideUp
