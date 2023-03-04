import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { Box, Container, Grid, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

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
              <Box key={i} index={i} sx={{ display: "flex" }}>
                <span>
                  <ArrowRightOutlinedIcon />
                </span>
                <Box sx={{ color: "primary.light" }}>
                  <Typography class={"list-item-stack"} variant={variant}>
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
          <img src="/san-francisco.jpg" width={"100%"} height={"100%"} />
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
                  fontSize: { xs: ".9rem", md: "1rem" },
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
              <Grid container sx={{ pt: 2 }}>
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
