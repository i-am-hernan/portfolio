import { Button, Container, Typography, Grow, Box } from "@mui/material";
import React from "react";
const Intro: any = () => {
  const handleChange = (e) => {
    e.preventDefault();
    window.open("mailto:hernan.s.chalco@gmail.com?subject=Hello!");
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      component="section"
      sx={{
        transition: "background-color 0.5s linear",
        pt: "25vh",
        bgcolor: "background.main",
        top: 0,
        left: 0,
        right: 0,
        height: "100vh",
        position: "fixed",
        mx: 0,
        px: { xs: "10%", md: "20%" },
      }}
    >
      <Grow appear={true} in={true} timeout={700}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Cutive Mono, monospace;",
            fontSize: "1.2rem",
            textDecoration: "none",
            color: "foreground.main",
          }}
        >
          Hi, my name is
        </Typography>
      </Grow>
      <Grow appear={true} in={true} timeout={1000}>
        <Typography
          sx={{
            color: "primary.main",
            textDecoration: "none",
            fontWeight: "100",
            fontSize: { xs: "3rem", md: "4rem" },
            fontFamily: "Roboto Mono, monospace",
            letterSpacing: "-3px",
          }}
        >
          Hernán Chalco
        </Typography>
      </Grow>
      <Grow appear={true} in={true} timeout={1300}>
        <Typography
          sx={{
            color: "secondary.main",
            textDecoration: "none",
            fontSize: { xs: "1.5rem", md: "3rem" },
            fontWeight: "light",
          }}
        >
          I build cool stuff.
        </Typography>
      </Grow>
      <Grow appear={true} in={true} timeout={1600}>
        <Box>
          <Typography
            sx={{
              color: "foreground.main",
              textDecoration: "none",
              fontSize: { xs: "0.9rem" },
              fontWeight: "light",
              py: 4,
            }}
          >
            I am a software engineer and technical consultant. I love learning
            new technologies, but more importantly, I love applying those
            technologies to solve real business problems.
          </Typography>
          <Button
            id="contact-me"
            sx={{
              color: "foreground.main",
              borderColor: "foreground.main",
              border: "1px solid",
              textTransform: "none",
              ":hover": {
                backgroundColor: "foreground.main",
                color: "background.main",
                borderColor: "foreground.main",
              },
            }}
            variant="outlined"
            onClick={handleChange}
          >
            say hello
          </Button>
        </Box>
      </Grow>
    </Container>
  );
};

export default Intro;
