'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Client-side effect to drive the horizontal scroll/track animation.
export default function DesktopScrollEffect(): null {
  useEffect(() => {
    // Guard for non-browser environments
    if (typeof window === 'undefined') return;

    // Register plugin
    gsap.registerPlugin(ScrollTrigger);

    const desktopContainer = document.querySelector('.desktop-scroll') as HTMLElement | null;
    const track = document.querySelector('.desktop-track') as HTMLElement | null;
    const slides = Array.from(document.querySelectorAll('.desktop-slide')) as HTMLElement[];

    if (!desktopContainer || !track || slides.length === 0) return;

    // Use a GSAP context to scope selectors and make cleanup easier
    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -100 * (slides.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: desktopContainer,
          pin: true,
          scrub: 0.7,
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: 0.12,
            ease: 'power1.out',
            delay: 0,
          },
          end: () => '+=' + (track.scrollWidth - desktopContainer.clientWidth) * 0.5,
        },
      });
    }, desktopContainer);

    return () => {
      // Kill scroll triggers and revert context
      try {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch (e) {
        // ignore
      }
      try {
        ctx.revert();
      } catch (e) {
        // ignore
      }
    };
  }, []);

  return null;
}

