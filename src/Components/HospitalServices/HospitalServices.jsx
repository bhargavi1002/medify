import { useMemo } from "react";
import { Box,Stack,Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Card from '../Card/Card';
import Labs from '../../assets/Drugstore.png'
import Doctor from '../../assets/Doctor.png'
import Hospitals from '../../assets/Hospital.png'
import Capsule from '../../assets/Capsule.png'
import Ambulance from '../../assets/Ambulance.png'


const HospitalServices =() =>{
    const gridItems = [
        { id: 1, src: Doctor, text: 'Doctors' },
        { id: 2, src: Labs, text: 'Labs' },
        { id: 3, src: Hospitals, text: 'Hospitals', active: true },
        { id: 4, src: Capsule, text: 'Medical Store' },
        { id: 5, src: Ambulance, text: 'Ambulance' },
    ]

    return (
        <Box>
        <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
      >
        {gridItems.map((service) => (
          <Grid item key={service.id} xs={4} md={2.4}>
           <Stack
      spacing={2}
      alignItems="center"
      bgcolor={service.active ? "rgba(42,167,255,0.08)" : "#FAFBFE"}
      p={3}
      borderRadius={2}
      border={service.active? "1px solid #2AA7FF" : "0"}
      boxShadow={service.shadow ? "0 0 24px rgba(0,0,0,0.09)" : "none"}
    >
      <Box component="img" src={service.src} height={60} width={60} />
      <Typography
        color={service.active ? "primary.main" : "#ABB6C7"}
        fontSize={18}
        fontWeight={service.active ? 600 : 400}
      >
        {service.text}
      </Typography>
    </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
      );

}
export default HospitalServices;