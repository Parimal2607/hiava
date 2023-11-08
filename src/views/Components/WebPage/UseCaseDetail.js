import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//  Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import AdsImage from "../../../assets/images/pages/ads.webp"
import HRImage from "../../../assets/images/pages/hrContent.webp"
import ECommerceImage from "../../../assets/images/pages/eCommerce.webp"
import ArticleImage from "../../../assets/images/pages/blogPost.webp"
import EmailImage from "../../../assets/images/pages/Email.webp"
import SocialImage from "../../../assets/images/pages/socialMedia.webp"

export const UseCaseDetail = () => {
  return (
    <div className="slider-css"  data-aos="fade-up"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1000">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={AdsImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HRImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ECommerceImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ArticleImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={EmailImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SocialImage} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
