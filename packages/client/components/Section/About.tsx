import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { Box, Container, Grid, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import React from "react";

const About: any = () => {
  const stack = [
    "Javascript (ES6+)",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
    "Heroku",
    "Material-UI",
    "Tailwind",
  ];

  const stackFirstHalf = Math.floor(stack.length / 2) + 1;
  const unorderedListStyle = {
    pt: "3%",
    ml: -1,
    fontSize: "20px",
  };

  const UnorderedList = (props) => {
    const { items, variant, ...other } = props;

    return (
      <Box {...other}>
        {items.length > 0 &&
          items.map((item, i) => {
            return (
              <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    display: "inline-block",
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    border: '1px solid',
                    marginRight: '8px',
                    borderColor: "background.main",
                  }}
                />
                <Box sx={{ color: "background.main" }}>
                  <Typography variant={variant}>
                    {item}
                  </Typography>
                </Box>
              </Box>
            );
          })}
      </Box>
    );
  };

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
            width: "100%",
            height: "100%",
          }}
        >
          <img src="/avatar.png" width={"100%"} height={"100%"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              ".Typewriter__cursor": {
                fontSize: "3.5rem",
                color: "white",
              },
              height: "100%",
              px: 6,
            }}
          >
            <Grid item xs>
              <Typography
                sx={{
                  color: "background.main",
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
                      '<span style="color: #5865f2; font-family: Roboto Mono, monospace; font-size: 3rem; font-weight: 300;">developer</span>'
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(
                      '<span style="color: #5865f2; font-family: Roboto Mono, monospace; font-size: 3rem; font-weight: 300;">consultant</span>'
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(
                      '<span style="color: #5865f2; font-family: Roboto Mono, monospace; font-size: 3rem; font-weight: 300;">yo-yo enthusiast</span>'
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(
                      '<span style="color: #5865f2; font-family: Roboto Mono, monospace; font-size: 3rem; font-weight: 300;">designer</span>'
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  color: "background.main",
                  fontFamily: "sans-serif",
                  fontSize: { xs: ".9rem", md: "0.85rem" },
                  lineHeight: "2",
                  textTransform: "none",
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
              <Grid container sx={{ pt: 2, pl:2 }}>
                <Grid item xs={6} md={4}>
                  <UnorderedList
                    items={stack.slice(0, stackFirstHalf)}
                    sx={unorderedListStyle}
                    variant={"caption"}
                  />
                </Grid>
                <Grid item xs={6} md={4}>
                  <UnorderedList
                    items={stack.slice(stackFirstHalf, stack.length)}
                    sx={unorderedListStyle}
                    variant={"caption"}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
