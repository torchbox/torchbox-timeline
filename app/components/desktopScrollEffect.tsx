'use client'

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function DesktopScrollEffect(): null {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Only activate on desktop using a media query. We also listen for changes
        // so the effect is initialised when resizing to desktop and torn down when leaving it.
        const mq = window.matchMedia('(min-width: 640px)');

        // Register plugin once
        gsap.registerPlugin(ScrollTrigger);

        let cleanupEffect: (() => void) | null = null;

        const setupEffect = () => {
            // Query elements each time we initialise so we pick up the current DOM
            const desktopContainer = document.querySelector('.desktop-scroll') as HTMLElement | null;
            const track = document.querySelector('.desktop-track') as HTMLElement | null;
            const slides = Array.from(document.querySelectorAll('.desktop-slide')) as HTMLElement[];

            if (!desktopContainer || !track || slides.length === 0) return () => {};

            // helper to refresh ScrollTrigger safely
            const safeRefresh = () => {
                try {
                    ScrollTrigger.refresh();
                } catch (e) {
                    // ignore
                }
            };

            const updateScrollTrigger = () => {
                // kill any existing triggers
                ScrollTrigger.getAll().forEach((t) => t.kill());

                gsap.to(track, {
                    x: () => -(track.scrollWidth - desktopContainer.clientWidth),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: desktopContainer,
                        pin: true,
                        scrub: 0.7,
                        end: () => `+=${track.scrollWidth - desktopContainer.clientWidth}`,
                    },
                });
            }

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
                    updateScrollTrigger();
                    safeRefresh();
                    resizeTimeout = null;
                }, 100);
            };
            window.addEventListener('resize', onResize);

            // initial setup
            updateScrollTrigger();

            // Return cleanup for this setup
            return () => {
                try {
                    ScrollTrigger.getAll().forEach((t) => t.kill());
                } catch {}
                try {
                    // @ts-ignore
                    ctx.revert();
                } catch {}

                // cleanup listeners
                window.removeEventListener('load', safeRefresh);
                imgs.forEach((img) => img.removeEventListener('load', safeRefresh));
                try {
                    resizeObserver.disconnect();
                } catch {}

                window.removeEventListener('resize', onResize);
            };
        };

        const enableIfDesktop = () => {
            if (cleanupEffect) {
                // already enabled
                return;
            }
            cleanupEffect = setupEffect();
        };

        const disableIfNotDesktop = () => {
            if (cleanupEffect) {
                try {
                    cleanupEffect();
                } catch {}
                cleanupEffect = null;
            }
        };

        // Initialise if currently desktop
        if (mq.matches) {
            enableIfDesktop();
        }

        // Listen for changes to the media query so we can init/teardown when crossing breakpoint
        const onMqChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                enableIfDesktop();
            } else {
                disableIfNotDesktop();
            }
        };

        // Use the modern API if available, otherwise fall back
        if ('addEventListener' in mq) {
            mq.addEventListener('change', onMqChange);
        } else {
            // @ts-expect-error legacy
            mq.addListener(onMqChange);
        }

        return () => {
            // teardown any active effect
            disableIfNotDesktop();

            if ('removeEventListener' in mq) {
                mq.removeEventListener('change', onMqChange);
            } else {
                // @ts-expect-error legacy
                mq.removeListener(onMqChange);
            }
        };
    }, []);

    return null;
}
