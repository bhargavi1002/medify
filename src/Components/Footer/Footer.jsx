import { Box, Container,Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import styles from "./Footer.module.css";

function FooterLink({ children }) {
  return (
    <a href="#" className={styles.footerLink}>
      <Stack direction="row" gap={0.5} alignItems="center">
        <KeyboardArrowRightIcon />
        {children}
      </Stack>
    </a>
  );
}

const Footer = () => {
  return (
    <Box bgcolor="#1B3C74" pb={3} pt={6}>
      <Container maxWidth="xl">
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <Stack alignItems="flex-start" justifyContent="space-between" height={1}>
              <img src={logo} height={36} alt="Medify" />
              <Stack direction="row" spacing={1.5}>
                <img src={facebook} alt="Facebook" className={styles.icon} />
                <img src={twitter} alt="Twitter" className={styles.icon} />
                <img src={youtube} alt="YouTube" className={styles.icon} />
                <img src={pinterest} alt="Pinterest" className={styles.icon} />
              </Stack>
            </Stack>
          </div>

          <div className={styles.footerColumn}>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Our Pricing</FooterLink>
            <FooterLink>Our Gallery</FooterLink>
            <FooterLink>Appointment</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
          </div>

          <div className={styles.footerColumn}>
            <FooterLink>Orthology</FooterLink>
            <FooterLink>Neurology</FooterLink>
            <FooterLink>Dental Care</FooterLink>
            <FooterLink>Opthalmology</FooterLink>
            <FooterLink>Cardiology</FooterLink>
          </div>

          <div className={styles.footerColumn}>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Our Pricing</FooterLink>
            <FooterLink>Our Gallery</FooterLink>
            <FooterLink>Appointment</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
          </div>
        </div>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
          textAlign="left"
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
