import React from 'react';
import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import carousel1 from '../../assets/carousel1.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.jpg';
import styles from './OffersCarousel.module.css';

const OffersCarousel = () => {
  const carouselImages = [
    { id: 1, src: carousel1, alt: 'Slide 1' },
    { id: 2, src: carousel2, alt: 'Slide 2' },
    { id: 3, src: carousel3, alt: 'Slide 3' },
    { id: 4, src: carousel1, alt: 'Slide 4' },
    { id: 5, src: carousel2, alt: 'Slide 5' },
    { id: 6, src: carousel3, alt: 'Slide 6' },
  ];

  return (
    <Box py={6}>
      <Container maxWidth='xl'>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            767: {
              slidesPerView: 3
            }

          }}
          className={styles.mySwiper}
        >
          {carouselImages.map((image) => (
            <SwiperSlide key={image.id} style={{height:'auto'}}>
              <Box
                component='img'
                src={image.src}
                alt={image.alt}
                width={1}
                className={styles.carouselImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default OffersCarousel;
