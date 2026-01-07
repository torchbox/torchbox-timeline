'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {JSX} from "react";
import {baseUrl} from "@/app/lib/utils";

const slides = [
  { src: '/images/carousel/webp/1.webp', alt: 'Tom and Olly appear cut out against a blue background under the text “2000 - Tom and Olly co-found Torchbox”. Olly is seated in a grey T-shirt, Tom stands in a blazer.' },
  { src: '/images/carousel/webp/2.webp', alt: 'A light blue timeline showing early Torchbox clients from 2003-2007, including Alzheimer’s Society, MS Society, National Deaf Children\'s Society, King’s Fund, WWF and ICRC, with a milestone for the Oxford University website redesign in 2007.' },
  { src: '/images/carousel/webp/3.webp', alt: 'A dark blue timeline marking Torchbox milestones from 2008-2011, featuring Greenpeace, Nuffield Trust, Oxfam and the launch of our Google Ad Grants service in 2011.' },
  { src: '/images/carousel/webp/4.webp', alt: 'A teal slide announcing “2014 - Wagtail CMS launches”, with a Wagtail\'s bird logo and a screenshot of the Wagtail website showing the “Create content that soars” header.' },
  { src: '/images/carousel/webp/5.webp', alt: 'A bright timeline celebrating “2014 - Digital marketing services launch”, with a group photo of the Torchbox team smiling and holding drinks, and the Chatham House logo.' },
  { src: '/images/carousel/webp/6.webp', alt: 'A navy slide marking “2016 - Our Bristol office opens”, featuring a sunny photo of the Clifton Suspension Bridge and a timeline note for Blood Cancer UK in 2015.' },
  { src: '/images/carousel/webp/7.webp', alt: 'A yellow timeline celebrating “2017 - Our first UK Government Service Standard project”, with logos for Action for Children, Great Ormond Street Hospital, MSF and the DEC.' },
  { src: '/images/carousel/webp/8.webp', alt: 'A dark blue slide announcing “2017 - NHS migrates to Wagtail CMS”, with a screenshot of the NHS website homepage and a Breast Cancer Now logo.' },
  { src: '/images/carousel/webp/9.webp', alt: 'A light blue slide for “2018 - Sue Ryder online counselling service launches”, featuring a screenshot of the Mind homepage, plus the Mind logo.' },
  { src: '/images/carousel/webp/10.webp', alt: 'A navy slide marking “2019 - We became 100% employee-owned”, with four photos of smiling team members and logos for the Department for International Trade, Samaritans and the University of Pennsylvania.' },
  { src: '/images/carousel/webp/11.webp', alt: 'Text reads “2021 - Torchbox incorporates in the Philippines”. Five circular team photos appear below, and a NASA JPL logo sits along the dotted timeline.' },
  { src: '/images/carousel/webp/12.webp', alt: 'A pink timeline slide with logos for NCBI, The National Archives and Tate. A large Guinness World Records badge appears beside the text celebrating DEC’s record-breaking Ukraine Appeal.' },
  { src: '/images/carousel/webp/13.webp', alt: 'A dark blue slide announcing “2022 - Winners at the Employee Ownership Association Awards”, with Olly, Lisa and James smiling and holding an award in a cut-out group photo.' },
  { src: '/images/carousel/webp/14.webp', alt: 'A yellow slide reading “2023 - RNIB’s new website launches”, with a large screenshot of the RNIB site showing its colour-mode options and a festive campaign image. Logos for MNDA and the National Institutes of Health also appear on the timeline.' },
  { src: '/images/carousel/webp/15.webp', alt: 'A blue slide celebrating “2023 - We became a B Corp”, featuring a photo of iced biscuits decorated with B Corp, Torchbox flame and EO Day 2023 designs. The London Museum logo appears on the dotted timeline path.' },
  { src: '/images/carousel/webp/16.webp', alt: 'A soft grey slide reading “2025 - WWF-US\' new website launches”, with a large homepage screenshot showing wildlife imagery. The Battersea Dogs & Cats Home logo appears as a 2024 milestone.' },
  { src: '/images/carousel/webp/17.webp', alt: 'A navy slide with dotted-line milestones from Amnesty International, ONS, NHS Guy\'s & St Thomas\' and MAP. Text reads “December 2025 - Thank you for being on this journey with us. Here\'s to the next chapter!”' },
];

export default function MobileCarousel(): JSX.Element {
  const DEFAULT_IMAGE_WIDTH = 1200;
  const DEFAULT_IMAGE_HEIGHT = 800;
  const pagination = { el: '.swiper-pagination', clickable: true };

  return (
    <section className="mobile-carousel relative sm:hidden bg-navy">
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
                src={baseUrl + slide.src}
                alt={slide.alt}
                width={DEFAULT_IMAGE_WIDTH}
                height={DEFAULT_IMAGE_HEIGHT}
                className="w-full h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="swiper-pagination bottom-[unset]! top-[unset]! w-full flex flex-wrap gap-2.5 relative bg-black justify-center py-5 "></div>
    </section>
  );
}
