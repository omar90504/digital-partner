import React, { useEffect, useRef, useState } from 'react'

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    const contentRef = useRef(null)

    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.maxHeight =
                contentRef.current.scrollHeight + 'px'
        } else {
            contentRef.current.style.maxHeight = '0'
        }
    }, [isOpen])

    return (
        <div className="accordion-item vre-slide-up-gsap">
            <button
                className={`accordion-header font-size-1-20 ${isOpen ? 'active' : ''}`}
                onClick={onClick}
            >
                {title}{' '}
                <span class="icon icon-1">
                    <i class="fa-solid fa-angle-right"></i>
                </span>
            </button>
            <div ref={contentRef} className="accordion-content">
                {content}
            </div>
        </div>
    )
}

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
    console.log(items)
    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.question}
                    content={item.ans}
                    isOpen={activeIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    )
}

export default Accordion
