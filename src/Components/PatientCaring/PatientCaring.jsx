import React from "react";
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import patientcaring from '../../assets/patientcaring.png'

const PatientCaring = () =>{
    return (
    <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' , display: 'flex', alignItems: 'center',  justifyContent: 'center', }}>
        <Box component='img' src={patientcaring} 
          sx={{
            width: 'auto',
            height: 'auto',
            maxWidth: 'calc(100% - 270px)', 
            maxHeight: 'calc(100vh - 60px)', 
            margin: '30px 135px',   
            objectFit: 'contain' }}/>
    </Box>
    )
}
export default PatientCaring;