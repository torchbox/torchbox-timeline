'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function DesktopScrollEffect(): null {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        const desktopContainer = document.querySelector('.desktop-scroll') as HTMLElement | null;
        const track = document.querySelector('.desktop-track') as HTMLElement | null;
        const slides = Array.from(document.querySelectorAll('.desktop-slide')) as HTMLElement[];

        if (!desktopContainer || !track || slides.length === 0) return;

        const ctx = gsap.context(() => {
            const totalSlides = slides.length;
            const containerWidth = desktopContainer.offsetWidth;

            const scrollDistance = containerWidth * (totalSlides - 1);

            gsap.to(track, {
                x: () => -(track.scrollWidth - desktopContainer.clientWidth),
                ease: 'none',
                scrollTrigger: {
                    trigger: desktopContainer,
                    pin: true,
                    scrub: 0.7,

                    // Even snapping per slide
                    snap: {
                        snapTo: (value) => {
                            const step = 1 / (totalSlides - 1);
                            return Math.round(value / step) * step;
                        },
                        duration: 0.15,
                        ease: 'power1.out',
                        delay: 0,
                    },

                    end: `+=${scrollDistance}`,
                },
            });
        }, desktopContainer);

        return () => {
            try {
                ScrollTrigger.getAll().forEach((t) => t.kill());
            } catch {}
            try {
                ctx.revert();
            } catch {}
        };
    }, []);

    return null;
}
