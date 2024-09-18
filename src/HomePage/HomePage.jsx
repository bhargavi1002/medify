import styles from'./HomePage.module.css';
import React from 'react';
import { Container, Box, Stack } from "@mui/material";
import Navbar from '../Components/Navbar/Navbar'
import HeroSection from '../Components/HeroSection/HeroSection'
import Search from '../Components/Search/Search'
import HospitalServices from '../Components/HospitalServices/HospitalServices'
import OffersCarousel from '../Components/OffersCarousel/OffersCarousel';
import SpecializationSection from '../Components/SpecializationSection/SpecializationSection';
import Specialists from '../Components/Specialists/Specialists'
import PatientCaring from '../Components/PatientCaring/PatientCaring'
import Blogs from '../Components/Blogs/Blogs'
import OurFamilies from '../Components/OurFamilies/OurFamilies'


const HomePage = () =>{
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <Navbar />
        <Container maxWidth="xl">
          <HeroSection />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <Search />
            <HospitalServices />
          </Stack>
        </Container>
      </Box>
    <OffersCarousel/>
    <SpecializationSection />
    <Specialists />
    <PatientCaring />
    <Blogs />
    <OurFamilies />
    </Box>
  );
}

export default HomePage;
