import initCarousel from './js/carousel.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './css/style.css';

document.addEventListener('DOMContentLoaded', () => {
    initCarousel({
        selector: '.mobile-carousel .swiper',
        pagination: '.mobile-carousel .swiper-pagination',
    });

    const desktopContainer = document.querySelector('.desktop-scroll');
    const track = document.querySelector('.desktop-track');
    const slides = Array.from(document.querySelectorAll('.desktop-slide'));

    if (desktopContainer && track && slides.length) {
        gsap.registerPlugin(ScrollTrigger);

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
                    delay: 0
                },
                end: () => '+=' + (track.scrollWidth - desktopContainer.clientWidth) * 0.5,
            },
        });
    }
});
import carousel from "./js/carousel.js";

document.addEventListener('DOMContentLoaded', () => {
    carousel();
})
