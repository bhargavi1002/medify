import React from "react";
import { Box, Button, Container, Grid,TextField,InputAdornment, Stack, Typography } from "@mui/material";
import mobile from '../../assets/mobile.jpg'
import apple_store from '../../assets/apple_store.png'
import google_play from '../../assets/google_play.png'
import Vector from '../../assets/Vector.png'



const DownloadApp = () =>{
    return (
        <Box
          sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}
        >
          <Container>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={5.5}>
                <Box src={mobile} component="img" width={1} height="auto" />
              </Grid>
    
              <Grid item xs={12} md={6.5}>
                <Box
                  position="relative"
                  pl={{ xs: "36px", md: "50px" }}
                  mb={{ xs: 4, md: 0 }}
                >
                  <Typography variant="h2" mb={2}>
                    Download the
                    <br />
                    <Box component="span" color="primary.main">
                      Medify{" "}
                    </Box>
                    App
                  </Typography>
    
                  <Box
                    src={Vector}
                    component="img"
                    width={{ xs: 24, md: 40 }}
                    position="absolute"
                    left={0}
                    top={50}
                  />
     {/* form for sms */}
    <Box mb={5}>
            <Typography fontWeight={600} mb={1}>
                Get the link to download the app
            </Typography>
            <Box component='form' sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                <TextField
                    sx={{
                        border: '1px solid #F0F0F0',
                        flex: 1,
                    }}
                    placeholder="Enter phone number"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                +91
                            </InputAdornment>
                        )
                    }}
                    required
                />
                <Button type='submit' size='large' variant="contained" disableElevation>
                    Send SMS
                </Button>
            </Box>
        </Box>
    
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 1, md: 2 }}
                  >
                    <Button
                      sx={{
                        py: 1.5,
                        borderRadius: 1.5, 
                      }}
                      size={"large"}
                      startIcon={<img src={google_play} height={60} width={220}/>}
                      disableElevation
                    >
                   </Button>
                    <Button
                      sx={{
                        py: 1.5,
                        borderRadius: 1.5, 
                      }}
                      size="large"
                      startIcon={<img src={apple_store} height={60} width={220}/>}
                      disableElevation
                    >
                    </Button>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      );

}
export default DownloadApp;