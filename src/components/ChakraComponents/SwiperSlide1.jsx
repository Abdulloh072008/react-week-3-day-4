import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// import { Box, Flex, Text, Spacer, VStack, Heading } from "@chakra-ui/react";
import CardSwiper from './CatrdSwiper';

const SwiperSlide1 = () => {
  return (
    <Swiper  breakpoints={{ 1024:{ slidesPerView: 4}, 360:{ slidesPerView: 1}}} spaceBetween={30} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">

      {Array.from({length:10}).map((_,i)=>(
        <SwiperSlide key={i}>
          <CardSwiper />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlide1;