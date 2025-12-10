import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function carousel({ selector, pagination }) {
    const el = document.querySelector(selector);
    const paginationEl = document.querySelector('[data-swiper-pagination]');
    if (!el) return null;

    return new Swiper(el, {
        modules: [Pagination],
        slidesPerView: 1.05,
        centeredSlides: true,
        loop: true,
        spaceBetween: 0,
        pagination: {
            el: paginationEl,
            clickable: true,
        },
    });
}
