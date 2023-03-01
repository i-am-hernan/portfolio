import { Typography, Container, CardMedia, Grid, Box } from "@mui/material";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const About: any = () => {
  return (
    <Container
      maxWidth={false}
      component="section"
      disableGutters
      sx={{
        bgcolor: "primary.main",
        transition: "background-color 0.5s linear",
        py: 0,
        mt: "100vh",
        position: "relative",
        px: 0,
        height: "95vh",
      }}
      id="about"
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid
          item
          md={6}
          sx={{
            display: {
              xs: "none",
              md: "inline-block",
            },
          }}
        >
          <img src="/san-francisco.jpg" width={"100%"} height={"100%"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
            sx={{
              ".Typewriter__cursor": {
                fontSize: "3.5rem",
                color: "white",
              },
              height: "100%",
              px: 6,
            }}
          >
            <Grid item xs={5}>
              <Typography
                sx={{
                  color: "secondary.dark",
                  fontFamily: "Cutive Mono, monospace;",
                  fontSize: "2rem",
                  fontWeight: "bolder",
                  textDecoration: "none",
                }}
              >
                About
              </Typography>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      '<span style="color: white; font-family: Poppins,sans-serif; font-size: 3rem; font-weight: 300;">Developer.</span>'
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(
                      '<span style="color: white; font-family: Poppins,sans-serif; font-size: 3rem; font-weight: 300;">Consultant.</span>'
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(
                      '<span style="color: white; font-family: Poppins,sans-serif; font-size: 3rem; font-weight: 300;">Yo-yo enthusiast.</span>'
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(
                      '<span style="color: white; font-family: Poppins,sans-serif; font-size: 3rem; font-weight: 300;">Designer.</span>'
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
              />
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Poppins,sans-serif;",
                  fontSize: {xs: ".9rem", md: "1rem"},
                  fontWeight: "light",
                  textDecoration: "none",
                  pt: 3,
                }}
              >
                I'm Hernán. I'm a passionate developer who has developed healthy
                strategies by which to redirect his obsessive and compulsive
                behaviors towards being more productive. I enjoy soccer,
                yo-yo-ing, lots of keto ice cream (thus not keto), and
                leveling-up just a little bit more each day.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
