import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type' // Assuming SplitType is a library you are using

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const SkewUpText = ({ children, variant, className }) => {
    const skewUpRef = useRef([])
    const skewUp2Ref = useRef([])

    useEffect(() => {
        const addAnimation = (elements, className, animationCallback) => {
            elements.forEach((element) => {
                if (window.innerWidth > 768) {
                    const textInstance = element
                    const splitText = new SplitType(textInstance, {
                        types: 'lines, words',
                        lineClass: 'word-line',
                    })
                    const line = splitText.lines
                    const word = splitText.words

                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: textInstance,
                            start: 'top 85%',
                            end: 'top 85%',
                            onComplete: () => {
                                textInstance.classList.remove(className)
                            },
                        },
                    })

                    tl.set(textInstance, { opacity: 1 }).from(word, {
                        y: '100%',
                        skewX: '-5',
                        duration: 2,
                        stagger: 0.09,
                        ease: 'expo.out',
                    })

                    window.addEventListener('resize', () => {
                        if (window.innerWidth >= 992) {
                            animationCallback()
                        }
                    })
                }
            })
        }

        const animationCallback1 = () => {
            addAnimation(skewUpRef.current, 'skew-up', animationCallback1)
        }

        const animationCallback2 = () => {
            skewUp2Ref.current.forEach((textInstance) => {
                const splitText = new SplitType(textInstance, { type: 'chars' })
                const letters = splitText.chars

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: textInstance,
                        start: 'top 85%',
                        end: 'top 85%',
                        onComplete: () => {
                            textInstance.classList.remove('skew-up-2')
                        },
                    },
                })

                tl.set(textInstance, { opacity: 1 }).from(letters, {
                    duration: 0.4,
                    autoAlpha: 0,
                    y: 50,
                    stagger: { amount: 1 },
                    ease: 'back.out(0)',
                })

                window.addEventListener('resize', () => {
                    if (window.innerWidth >= 992) {
                        animationCallback2()
                    }
                })
            })
        }

        animationCallback1()
        animationCallback2()

        // Cleanup on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
            gsap.globalTimeline.clear()
        }
    }, [])

    return (
        <>
            {variant === 'skew-1' ? (
                <p
                    className={`${className} skew-up`}
                    ref={(el) => skewUpRef.current.push(el)}
                >
                    {children}
                </p>
            ) : (
                <p
                    className={`${className} skew-up-2`}
                    ref={(el) => skewUp2Ref.current.push(el)}
                >
                    {children}
                </p>
            )}
        </>
    )
}

export default SkewUpText
