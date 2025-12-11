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

        // helper to refresh ScrollTrigger safely
        const safeRefresh = () => {
            try {
                ScrollTrigger.refresh();
            } catch (e) {
                // ignore
            }
        };

        const ctx = gsap.context(() => {
            // compute scroll distance from actual track width so layouts (like footer) don't affect it
            // NOTE: calculate dynamically inside the getter functions below so invalidate/refresh picks up new sizes

            gsap.to(track, {
                x: () => -(track.scrollWidth - desktopContainer.clientWidth),
                ease: 'none',
                invalidateOnRefresh: true,
                scrollTrigger: {
                    trigger: desktopContainer,
                    pin: true,
                    scrub: 0.7,
                    end: () => `+=${track.scrollWidth - desktopContainer.clientWidth}`,
                },
            });
        }, desktopContainer);

        // Refresh on window load (images/styles could change layout)
        window.addEventListener('load', safeRefresh);

        // Refresh when any image loads (helps when footer images load after initial render)
        const imgs = Array.from(document.images);
        imgs.forEach((img) => img.addEventListener('load', safeRefresh));

        // Watch for body size changes and refresh ScrollTrigger
        const resizeObserver = new ResizeObserver(() => {
            safeRefresh();
        });
        resizeObserver.observe(document.body);

        // Throttled resize handler to recalc timeline length on window resize
        let resizeTimeout: number | null = null;
        const onResize = () => {
            if (resizeTimeout !== null) return;
            resizeTimeout = window.setTimeout(() => {
                safeRefresh();
                resizeTimeout = null;
            }, 100);
        };
        window.addEventListener('resize', onResize);

        return () => {
            try {
                ScrollTrigger.getAll().forEach((t) => t.kill());
            } catch {}
            try {
                ctx.revert();
            } catch {}

            // cleanup listeners
            window.removeEventListener('load', safeRefresh);
            imgs.forEach((img) => img.removeEventListener('load', safeRefresh));
            try {
                resizeObserver.disconnect();
            } catch {}

            window.removeEventListener('resize', onResize);
            if (resizeTimeout !== null) {
                clearTimeout(resizeTimeout);
                resizeTimeout = null;
            }
        };
    }, []);

    return null;
}
