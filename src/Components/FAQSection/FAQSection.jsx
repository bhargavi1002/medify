import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Container, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import faqsBanner from '../../assets/faqsBanner.jpg'

const FAQSection = () =>{
  const faqs = [
    {
      question: "Why choose our medical for your family?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Why we are different from others?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Trusted & experience senior care & love",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  return (
    <Box py={4}>
      <Container maxWidth="xl">
        <Typography color="#2AA7FF" fontWeight={600} textAlign="center">
          Get Your Answer
        </Typography>
        <Typography color="#1B3C74" textAlign="center" variant="h2" mb={2}>
          Frequently Asked Questions
        </Typography>

        <Grid container alignItems="center" spacing={5}>
          <Grid item xs={12} md={6}>
            <Box component="img" src={faqsBanner} width={1} height="auto" />
          </Grid>

          <Grid item xs={12} md={6}>
            <AccordionList faqs={faqs} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const AccordionList = ({ faqs }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{ mb: 2,border: 'none', boxShadow: 'none'}}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: "#2AA7FF" }} />}
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
          >
            <Typography fontWeight={700} color="#1B3C74" lineHeight={1.2}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={14}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
export default FAQSection;