// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import {
  Autoplay,
  Pagination,
  Navigation,
  //   EffectCards,
  EffectCreative,
} from 'swiper/modules';

import claas from '../../images/claas.jpg';
import jondeere from '../../images/john_deere.jpg';
import jondeere1 from '../../images/john_deere1.jpg';
import kuhn from '../../images/kuhn.jpg';
import lemcen from '../../images/Lemcen.jpg';

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        navigation={true}
        centeredSlides={true}
        grabCursor={true}
        effect={'creative'}
        speed={3000}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={claas} alt="harvester" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={jondeere} alt="harvester" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={kuhn} alt="harvester" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={lemcen} alt="harvester" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={jondeere1} alt="harvester" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
