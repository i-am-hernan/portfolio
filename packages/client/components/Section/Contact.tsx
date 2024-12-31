import { Button, Container, Typography, Box } from "@mui/material";
import React from "react";
const Contact = () => {
  const handleChange = (e) => {
    e.preventDefault();
    window.open("mailto:hernan.s.chalco@gmail.com?subject=Hello!");
  };

  return (
    <Container
      maxWidth={false}
      component="section"
      disableGutters
      sx={{
        bgcolor: "primary.light",
        transition: "background-color 0.5s linear",
        height: "100%",
        position: "relative",
        pt: { xs: "25%", md: "15%" },
        px: { xs: "5%", sm: "10", md: "14%", lg: "22%" },
      }}
      id="contact"
    >
      <Typography
        sx={{
          fontFamily: "Cutive Mono, monospace;",
          fontSize: "1.2rem",
          textDecoration: "none",
          color: "secondary.dark",
        }}
        align="center"
      >
        What's Next?
      </Typography>
      <Typography
        sx={{
          color: "primary.main",
          textDecoration: "none",
          fontSize: { xs: "3rem", md: "3.5rem" },
          fontFamily: "Roboto Mono, monospace",
          letterSpacing: "-3px",
        }}
        align="center"
      >
        Get In Touch
      </Typography>
      <Typography
        sx={{
          color: "foreground.main",
          textDecoration: "none",
          fontSize: "0.9rem",
          fontWeight: "light",
          py: 1,
          px: { xs: 0, md: "20%" },
        }}
        align="center"
      >
        My inbox is always open. Whether you have a question or just want to say
        hi, I’ll try my best to get back to you!
      </Typography>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          id="contact-me"
          onClick={(e) => {
            handleChange(e);
          }}
          size="large"
          variant="outlined"
          sx={{
            color: "foreground.main",
            borderColor: "foreground.main",
            border: "1px solid",
            ":hover": {
              color: "primary.main",
              borderColor: "primary.main",
            },
          }}
        >
          Contact
        </Button>
      </Box>
      <Typography
        sx={{
          pt: { xs: "20%", md: "20%" },
          fontFamily: "Cutive Mono, monospace;",
          fontSize: ".8rem",
          textDecoration: "none",
          color: "primary.dark",
        }}
        align="center"
      >
        Developed by Hernán Chalco.
      </Typography>
    </Container>
  );
};

export default Contact;
