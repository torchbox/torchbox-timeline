import React from 'react'
import {baseUrl} from "@/app/lib/utils";

type Slide = {
    id: number
    src: string
    bgClass?: string
    alt: string
}

const slides: Slide[] = [
    { id: 1, src: '/images/carousel/webp/1.webp', bgClass: 'bg-navy', alt: 'Tom and Olly appear cut out against a blue background under the text “2000 - Tom and Olly co-found Torchbox”. Olly is seated in a grey T-shirt, Tom stands in a blazer.' },
    { id: 2, src: '/images/carousel/webp/2.webp', bgClass: 'bg-sky', alt: 'A light blue timeline showing early Torchbox clients from 2003-2007, including Alzheimer’s Society, MS Society, National Deaf Children\'s Society, King’s Fund, WWF and ICRC, with a milestone for the Oxford University website redesign in 2007.' },
    { id: 3, src: '/images/carousel/webp/3.webp', bgClass: 'bg-navy', alt: 'A dark blue timeline marking Torchbox milestones from 2008-2011, featuring Greenpeace, Nuffield Trust, Oxfam and the launch of our Google Ad Grants service in 2011.' },
    { id: 4, src: '/images/carousel/webp/4.webp', bgClass: 'bg-aqua', alt: 'A teal slide announcing “2014 - Wagtail CMS launches”, with a Wagtail\'s bird logo and a screenshot of the Wagtail website showing the “Create content that soars” header.' },
    { id: 5, src: '/images/carousel/webp/5.webp', bgClass: 'bg-cornflower', alt: 'A bright timeline celebrating “2014 - Digital marketing services launch”, with a group photo of the Torchbox team smiling and holding drinks, and the Chatham House logo.' },
    { id: 6, src: '/images/carousel/webp/6.webp', bgClass: 'bg-navy', alt: 'A navy slide marking “2016 - Our Bristol office opens”, featuring a sunny photo of the Clifton Suspension Bridge and a timeline note for Blood Cancer UK in 2015.' },
    { id: 7, src: '/images/carousel/webp/7.webp', bgClass: 'bg-cream', alt: 'A yellow timeline celebrating “2017 - Our first UK Government Service Standard project”, with logos for Action for Children, Great Ormond Street Hospital, MSF and the DEC.' },
    { id: 8, src: '/images/carousel/webp/8.webp', bgClass: 'bg-navy', alt: 'A dark blue slide announcing “2017 - NHS migrates to Wagtail CMS”, with a screenshot of the NHS website homepage and a Breast Cancer Now logo.' },
    { id: 9, src: '/images/carousel/webp/9.webp', bgClass: 'bg-sky', alt: 'A light blue slide for “2018 - Sue Ryder online counselling service launches”, featuring a screenshot of the Mind homepage, plus the Mind logo.' },
    { id: 10, src: '/images/carousel/webp/10.webp', bgClass: 'bg-navy', alt: 'A navy slide marking “2019 - We became 100% employee-owned”, with four photos of smiling team members and logos for the Department for International Trade, Samaritans and the University of Pennsylvania.' },
    { id: 11, src: '/images/carousel/webp/11.webp', bgClass: 'bg-aqua', alt: 'Text reads “2021 - Torchbox incorporates in the Philippines”. Five circular team photos appear below, and a NASA JPL logo sits along the dotted timeline.' },
    { id: 12, src: '/images/carousel/webp/12.webp', bgClass: 'bg-blush', alt: 'A pink timeline slide with logos for NCBI, The National Archives and Tate. A large Guinness World Records badge appears beside the text celebrating DEC’s record-breaking Ukraine Appeal.' },
    { id: 13, src: '/images/carousel/webp/13.webp', bgClass: 'bg-navy', alt: 'A dark blue slide announcing “2022 - Winners at the Employee Ownership Association Awards”, with Olly, Lisa and James smiling and holding an award in a cut-out group photo.' },
    { id: 14, src: '/images/carousel/webp/14.webp', bgClass: 'bg-cream', alt: 'A yellow slide reading “2023 - RNIB’s new website launches”, with a large screenshot of the RNIB site showing its colour-mode options and a festive campaign image. Logos for MNDA and the National Institutes of Health also appear on the timeline.' },
    { id: 15, src: '/images/carousel/webp/15.webp', bgClass: 'bg-cornflower', alt: 'A blue slide celebrating “2023 - We became a B Corp”, featuring a photo of iced biscuits decorated with B Corp, Torchbox flame and EO Day 2023 designs. The London Museum logo appears on the dotted timeline path.' },
    { id: 16, src: '/images/carousel/webp/16.webp', bgClass: 'bg-sage', alt: 'A soft grey slide reading “2025 - WWF-US\' new website launches”, with a large homepage screenshot showing wildlife imagery. The Battersea Dogs & Cats Home logo appears as a 2024 milestone.' },
    { id: 17, src: '/images/carousel/webp/17.webp', bgClass: 'bg-navy', alt: 'A navy slide with dotted-line milestones from Amnesty International, ONS, NHS Guy\'s & St Thomas\' and MAP. Text reads “December 2025 - Thank you for being on this journey with us. Here\'s to the next chapter!”' },
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
                            className="h-full w-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DesktopTimeline
