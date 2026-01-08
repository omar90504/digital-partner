import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const AnimateTitle = ({ children, className, tag }) => {
    const textRef = useRef(null)

    useEffect(() => {
        const addAnimation = async () => {
            const textInstance = textRef.current

            const splitText = new SplitType(textInstance, {
                types: 'chars',
            })
            const letters = splitText.chars

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: textInstance,
                    start: 'top 85%',
                    end: 'top 85%',
                    onComplete: () => {
                        textInstance.classList.remove('split-collab')
                    },
                },
            })

            tl.set(textInstance, { opacity: 1 }).from(letters, {
                duration: 0.5,
                autoAlpha: 0,
                x: 50,
                stagger: { amount: 1 },
                ease: 'back.out(1)',
            })

            // Clean up function to kill the animation on unmount
            return () => {
                tl.kill()
                splitText.revert()
            }
        }

        addAnimation()
    }, [])

    if (tag === 'h2') {
        return (
            <h2 ref={textRef} className={`${className} split-collab`}>
                {children}
            </h2>
        )
    }
    return (
        <h3 ref={textRef} className={`${className} split-collab`}>
            {children}
        </h3>
    )
}
export default AnimateTitle
