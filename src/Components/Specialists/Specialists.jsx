import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import AhmedKhan from '../../assets/AhmedKhan.png'
import lesley from '../../assets/lesley.png'
import heenaSachdev from '../../assets/heenaSachdev.png'
import ankurSharma from  '../../assets/ankurSharma.png'
import ahmedStevens from '../../assets/ahmedStevens.png'


const Specialists = () => {
    const data = [
        { img: lesley, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: AhmedKhan, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: heenaSachdev, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: ankurSharma, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: ahmedStevens, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
        { img: lesley, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: AhmedKhan, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: heenaSachdev, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: ankurSharma, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: ahmedStevens, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' }
    ]

    return (
        <Box py={4} id="find-doctors">
            <Typography variant="h2" textAlign='center' mb={3} px={2}>
                Our Medical Specialist
            </Typography>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                pagination={{
                    clickable: true
                }}
                breakpoints={
                    {
                        767: {
                            slidesPerView: 4
                        }
                    }
                }
                sx={{
                    '.swiper-pagination': {
                      marginBottom: '-7px !important', 
                    },
                  }}
            >
                {data.map((doc, index) => (
                    <SwiperSlide key={index}>
                        <Box textAlign='center'>
            <Box
                component='img'
                src={doc.img}
                width={0.7}
                sx={{ boxShadow: '0 15px 55px -10px rgba(0,0,0,0.09)', borderRadius: '250px 240px 4px 4px' }}
                mb={2}
            />
            <Typography
                fontSize={{ xs: 16, md: 24 }}
                color='#1B3C74'
            >
                {doc.title}
            </Typography>
            <Typography
                fontSize={{ xs: 14, md: 16 }}
                fontWeight={500}
                color='primary.main'
                mb={2}
            >
                {doc.designation}
            </Typography>
        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
    

}
export default Specialists;