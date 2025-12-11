import React from 'react'

type Slide = {
    id: number
    label: string
    src: string
    bgClass?: string
}

const slides: Slide[] = [
    { id: 1, label: 'Slide 01', src: '/images/carousel/1.jpg', bgClass: 'bg-navy' },
    { id: 2, label: 'Slide 02', src: '/images/carousel/2.jpg', bgClass: 'bg-sky' },
    { id: 3, label: 'Slide 03', src: '/images/carousel/3.jpg', bgClass: 'bg-navy' },
    { id: 4, label: 'Slide 04', src: '/images/carousel/4.jpg', bgClass: 'bg-aqua' },
    { id: 5, label: 'Slide 05', src: '/images/carousel/5.jpg', bgClass: 'bg-cornflower' },
    { id: 6, label: 'Slide 06', src: '/images/carousel/6.jpg', bgClass: 'bg-navy' },
    { id: 7, label: 'Slide 07', src: '/images/carousel/7.jpg', bgClass: 'bg-cream' },
    { id: 8, label: 'Slide 08', src: '/images/carousel/8.jpg', bgClass: 'bg-navy' },
    { id: 9, label: 'Slide 09', src: '/images/carousel/9.jpg', bgClass: 'bg-sky' },
    { id: 10, label: 'Slide 10', src: '/images/carousel/10.jpg', bgClass: 'bg-navy' },
    { id: 11, label: 'Slide 11', src: '/images/carousel/11.jpg', bgClass: 'bg-aqua' },
    { id: 12, label: 'Slide 12', src: '/images/carousel/12.jpg', bgClass: 'bg-blush' },
    { id: 13, label: 'Slide 13', src: '/images/carousel/13.jpg', bgClass: 'bg-navy' },
    { id: 14, label: 'Slide 14', src: '/images/carousel/14.jpg', bgClass: 'bg-cream' },
    { id: 15, label: 'Slide 15', src: '/images/carousel/15.jpg', bgClass: 'bg-cornflower' },
    { id: 16, label: 'Slide 16', src: '/images/carousel/16.jpg', bgClass: 'bg-sage' },
    { id: 17, label: 'Slide 17', src: '/images/carousel/17.jpg', bgClass: 'bg-navy' },
]

const DesktopTimeline = () => {
    return (
        <section className="desktop-scroll hidden sm:block overflow-hidden relative">
            <div className="desktop-track flex h-full">
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={`desktop-slide relative flex items-center justify-center text-white ${slide.bgClass ?? ''}`}
                        aria-label={slide.label}
                    >
                        <img
                            src={slide.src}
                            alt={slide.label}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <span className="relative z-10 p-4">{slide.label}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DesktopTimeline
