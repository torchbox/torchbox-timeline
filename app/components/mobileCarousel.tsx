'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {JSX} from "react";

const slides = [
  { src: '/images/carousel/1.jpg', alt: 'Tom and Olly pictured as the co-founders of Torchbox' },
  { src: '/images/carousel/2.jpg', alt: 'Diagram showing Torchbox’s Oxford University website redesign timeline and client relationship' },
  { src: '/images/carousel/3.jpg', alt: 'Announcement of Google Ad Grants service introduced by Torchbox' },
  { src: '/images/carousel/4.jpg', alt: 'Wagtail CMS launch announcement with Royal College of Art example' },
  { src: '/images/carousel/5.jpg', alt: 'Torchbox team group photo celebrating digital marketing services launch' },
  { src: '/images/carousel/6.jpg', alt: 'Torchbox Bristol office announcement with photo of the Clifton Suspension Bridge' },
  { src: '/images/carousel/7.jpg', alt: 'Torchbox’s first UK Government Service Standard project announcement' },
  { src: '/images/carousel/8.jpg', alt: 'NHS migration to Wagtail CMS announcement with website preview' },
  { src: '/images/carousel/9.jpg', alt: 'Sue Ryder online counselling service launch announcement' },
  { src: '/images/carousel/10.jpg', alt: 'Torchbox becomes 100 percent employee-owned with team photo' },
  { src: '/images/carousel/11.jpg', alt: 'Torchbox incorporation in the Philippines announcement with team portraits' },
  { src: '/images/carousel/12.jpg', alt: 'DEC Ukraine Appeal sets Guinness World Record announcement with donor logos' },
  { src: '/images/carousel/13.jpg', alt: 'Torchbox wins Employee Ownership Association Awards featuring team photo' },
  { src: '/images/carousel/14.jpg', alt: 'RNIB new website launch announcement with homepage preview' },
  { src: '/images/carousel/15.jpg', alt: 'Torchbox becomes a certified B Corp announcement with framed certificate' },
  { src: '/images/carousel/16.jpg', alt: 'WWF US new website launch announcement with homepage preview' },
  { src: '/images/carousel/17.jpg', alt: 'Thank-you message from Torchbox featuring logos from long-term partners' },
];

export default function MobileCarousel(): JSX.Element {
  const DEFAULT_IMAGE_WIDTH = 1200;
  const DEFAULT_IMAGE_HEIGHT = 800;
  const pagination = { el: '.swiper-pagination', clickable: true };

  return (
    <section className="mobile-carousel relative sm:hidden">
      <div className="swiper">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.10}
          autoplay={{ delay: 3000 }}
          spaceBetween={0}
          pagination={pagination}
          className="swiper-react"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="rounded-none">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={DEFAULT_IMAGE_WIDTH}
                height={DEFAULT_IMAGE_HEIGHT}
                className="w-full h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="swiper-pagination bottom-[unset]! top-[unset]! w-full flex flex-wrap gap-2.5 relative bg-black justify-center  py-5"></div>
    </section>
  );
}
