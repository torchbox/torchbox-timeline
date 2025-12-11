import React from 'react'
import {baseUrl} from "@/app/lib/utils";

type Slide = {
    id: number
    src: string
    bgClass?: string
    alt: string
}

const slides: Slide[] = [
    { id: 1, src: '/images/carousel/1.jpg', bgClass: 'bg-navy', alt: 'Tom and Olly pictured as the co-founders of Torchbox' },
    { id: 2, src: '/images/carousel/2.jpg', bgClass: 'bg-sky', alt: 'Diagram showing Torchbox’s Oxford University website redesign timeline and client relationship' },
    { id: 3, src: '/images/carousel/3.jpg', bgClass: 'bg-navy', alt: 'Announcement of Google Ad Grants service introduced by Torchbox' },
    { id: 4, src: '/images/carousel/4.jpg', bgClass: 'bg-aqua', alt: 'Wagtail CMS launch announcement with Royal College of Art example' },
    { id: 5, src: '/images/carousel/5.jpg', bgClass: 'bg-cornflower', alt: 'Torchbox team group photo celebrating digital marketing services launch' },
    { id: 6, src: '/images/carousel/6.jpg', bgClass: 'bg-navy', alt: 'Torchbox Bristol office announcement with photo of the Clifton Suspension Bridge' },
    { id: 7, src: '/images/carousel/7.jpg', bgClass: 'bg-cream', alt: 'Torchbox’s first UK Government Service Standard project announcement' },
    { id: 8, src: '/images/carousel/8.jpg', bgClass: 'bg-navy', alt: 'NHS migration to Wagtail CMS announcement with website preview' },
    { id: 9, src: '/images/carousel/9.jpg', bgClass: 'bg-sky', alt: 'Sue Ryder online counselling service launch announcement' },
    { id: 10, src: '/images/carousel/10.jpg', bgClass: 'bg-navy', alt: 'Torchbox becomes 100 percent employee-owned with team photo' },
    { id: 11, src: '/images/carousel/11.jpg', bgClass: 'bg-aqua', alt: 'Torchbox incorporation in the Philippines announcement with team portraits' },
    { id: 12, src: '/images/carousel/12.jpg', bgClass: 'bg-blush', alt: 'DEC Ukraine Appeal sets Guinness World Record announcement with donor logos' },
    { id: 13, src: '/images/carousel/13.jpg', bgClass: 'bg-navy', alt: 'Torchbox wins Employee Ownership Association Awards featuring team photo' },
    { id: 14, src: '/images/carousel/14.jpg', bgClass: 'bg-cream', alt: 'RNIB new website launch announcement with homepage preview' },
    { id: 15, src: '/images/carousel/15.jpg', bgClass: 'bg-cornflower', alt: 'Torchbox becomes a certified B Corp announcement with framed certificate' },
    { id: 16, src: '/images/carousel/16.jpg', bgClass: 'bg-sage', alt: 'WWF US new website launch announcement with homepage preview' },
    { id: 17, src: '/images/carousel/17.jpg', bgClass: 'bg-navy', alt: 'Thank-you message from Torchbox featuring logos from long-term partners' },
]

const DesktopTimeline = () => {
    return (
        <section className="desktop-scroll hidden sm:block overflow-hidden relative">
            <div className="desktop-track flex h-full">
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={`desktop-slide relative flex items-center justify-center text-white ${slide.bgClass ?? ''}`}
                    >
                        <img
                            src={baseUrl + slide.src}
                            alt={slide.alt}
                            loading="lazy"
                            className="h-full w-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DesktopTimeline
