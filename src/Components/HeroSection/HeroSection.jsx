import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css'
import hero_image from '../../assets/hero_image.png'

const HeroSection = () =>{

    return(
        <Swiper>
            <SwiperSlide>
                <Stack direction={{ xs: 'column', md: "row" }} spacing={6} alignItems="center" pt={2}>
                    <Box>
                        <Typography variant='h3' component='h1'>Skip the travel! Find Online</Typography>
                        <Typography variant='h1' component='h1' mb={1}>Medical <span style={{ color: '#2AA7FF' }}>Centers</span></Typography>
                        <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3}>
                            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                        </Typography>
                        <Link to='/search'>
                            <Button variant='contained' size="large" sx={{ bgcolor: "#2AA7FF", '&:hover': { bgcolor: '#1A8FEF' }, textTransform: 'none' }}>
                             Find Centers
                            </Button>
                        </Link>
                    </Box>
                    <Box
                        component={'img'}
                        src={hero_image}
                        width={{ xs: 1, md: "50%" }}
                    />
                </Stack>
            </SwiperSlide>
        </Swiper>
    )

}
export default HeroSection