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
        bgcolor: "#01BAEF",
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
                color: "#011627",
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
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
