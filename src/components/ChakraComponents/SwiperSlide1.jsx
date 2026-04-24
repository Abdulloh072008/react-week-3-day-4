import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// import { Box, Flex, Text, Spacer, VStack, Heading } from "@chakra-ui/react";
import CardSwiper from './CatrdSwiper';

const SwiperSlide1 = () => {
  return (
    <Swiper slidesPerView={4} spaceBetween={30} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">

      <SwiperSlide>
        <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
        <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
        <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
        <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
        <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
        <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
        <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
        <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
        <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
        <CardSwiper />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlide1;