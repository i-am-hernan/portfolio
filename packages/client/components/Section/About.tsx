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
        height: "100vh",
        py: 0,
        mt: "100vh",
        position: "relative",
        px: 0,
      }}
      id="about"
    >
      <Grid sx={{ height: "100%" }} container>
        <Grid item xs={6}>
          <img src="/san-francisco.jpg" width={"100%"} height={"100%"} />
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              pt: "50%",
              px: 10,
              ".Typewriter__cursor": {
                fontSize: "3.5rem",
                color: "white",
              },
            }}
          >
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
                fontSize: "1rem",
                fontWeight: "light",
                textDecoration: "none",
                pt: 3,
              }}
            >
              I'm Hernán. I'm a passionate developer who has developed healthy
              strategies by which to redirect his obsessive and compulsive
              behaviors towards being more productive. I enjoy soccer,
              yo-yo-ing, lots of keto ice cream (thus not keto), and leveling-up
              just a little bit more each day.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
