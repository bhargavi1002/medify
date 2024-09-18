import { Box, Container, Grid, Typography } from "@mui/material";
import blog from '../../assets/blog.png';

const Blogs = () => {
  return (
    <Box py={6}>
      <Container>
        <Typography color='#2AA7FF' fontWeight={600} textAlign='center'>
          Blog & News
        </Typography>
        <Typography textAlign='center' variant='h2' mb={2}>
          Read Our Latest News
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={blog}
              alt="Blog image 1"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={blog}
              alt="Blog image 2"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={blog}
              alt="Blog image 3"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
