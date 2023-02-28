import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Container, Grid, Link, Paper, Typography } from "@mui/material";
import TerminalContainer from "../Experience/TerminalContainer";

const Projects = [
  {
    img: "/sdk-explorer.png",
    title: "SDK Explorer",
    description:
      "An open source application that educates and enables developers to configure customized versions of the Adyen solutions.",
    links: {
      github: "https://github.com/ossiggy/adyen-web-demo",
      project: "/",
    },
    keywords: ["React", "Material UI", "Typescript", "Node", "Express"],
  },
  {
    img: "/automate-build.png",
    title: "Automate Build",
    description:
      "Scripts to automate the build processes for many common stacks. Including an build optimized for SEO featuring Next.js, Typescript, Express, MongoDB.",
    links: {
      github: "https://github.com/objStevo/build-automation",
      project: "/",
    },
    keywords: ["Bash", "Typescript", "Node", "NPM"],
  },
  {
    img: "/matlab.png",
    title: "Applied Math",
    description:
      "One of my early introductions into development was by solving Matlab problems for my Applied Mathematics projects. Here is repo of some fun applied math implmentations.",
    links: {
      github: "https://github.com/objStevo/Applied-Mathematics",
      project: "/",
    },
    keywords: ["Matlab", "Linear Algebra"],
  },
];

const ProjectDisplay = (props) => {
  const { orientation, project, ...other } = props;

  return (
    <Grid
      container
      direction={orientation === "left" ? "row-reverse" : "row"}
      {...other}
      alignItems="center"
    >
      <Grid item xs={7}>
        <Box
          sx={{
            position: "relative",
            backgroundImage: `${project.img}`,
          }}
        >
          <Paper sx={{ boxShadow: 15 }}>
            <img
              src={project.img}
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "1%" }}
            />
          </Paper>
          <Paper
            sx={{
              position: "absolute",
              opacity: ".4",
              width: "100%",
              height: "100%",
              bgcolor: "primary.main",
              transition: "opacity 0.2s",
              ":hover": {
                opacity: "0",
              },
              top: 0,
            }}
          ></Paper>
        </Box>
      </Grid>
      <Grid item xs={5} sx={{ position: "relative" }}>
        <Typography
          sx={{
            textAlign: `${orientation === "left" ? "left" : "right"}`,
            fontFamily: "Cutive Mono, monospace;",
            textDecoration: "none",
            color: "secondary.dark",
            fontSize: { xs: "1rem", md: "1.3rem" },
            fontWeight: "light",
            pb: 2,
          }}
        >
          {project.title}
        </Typography>
        <Box >
          <TerminalContainer
            sx={{
              ml: `${orientation === "right" ? "-70px" : "0"}`,
              mr: `${orientation === "right" ? "0" : "-70px"}`,
              boxShadow: 20,
              border: 2,
              color: "primary.main",
              borderRadius: 1,
            }}
          >
            <Box sx={{ display: "flex", p: 1 }}>
              <span>
                <ArrowRightOutlinedIcon />
              </span>
              <Typography
                sx={{
                  display: "inline-block",
                  verticalAlign: "top",
                  color: "secondary.dark",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  fontWeight: "light",
                  py: 0.4,
                  display: "inline-block",
                }}
              >
                {project.description}
              </Typography>
            </Box>
          </TerminalContainer>
          <Box
            sx={{ textAlign: `${orientation === "left" ? "left" : "right"}` }}
          >
            {project?.keywords?.length > 0 &&
              project.keywords.map((keyword, i) => {
                return (
                  <Typography
                    key={i}
                    index={i}
                    sx={{
                      textDecoration: "none",
                      color: "secondary.main",
                      fontSize: { xs: ".6rem", md: ".7rem" },
                      fontWeight: "light",
                      pt: 1,
                      pl: `${orientation === "left" ? "0" : "1rem"}`,
                      pr: `${orientation === "left" ? "1rem" : "0"}`,
                      display: "inline-block",
                    }}
                  >
                    {keyword}
                  </Typography>
                );
              })}
          </Box>
          <Box sx={{ textAlign: orientation === "right" ? "right" : "left" }}>
            <Link
              href={project.links.github}
              sx={{
                color: "secondary.main",
                ":hover": {
                  color: "primary.main",
                },
              }}
            >
              <GitHubIcon sx={{ pt: 1, fontSize: "1.2rem" }} />
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

const Work: any = () => {
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
        pt: "15%",
        px: "15%",
      }}
      id="work"
    >
      <Box>
        <Typography
          sx={{
            color: "secondary.main",
            textDecoration: "none",
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: "light",
            pb: 3,
          }}
        >
          Cool stuff I made
        </Typography>
        {Projects?.length > 0 &&
          Projects.map((project, i) => {
            return (
              <ProjectDisplay
                key={i}
                project={project}
                orientation={(i + 1) % 2 === 0 ? "right" : "left"}
                index={i}
                sx={{ pb: 12 }}
              />
            );
          })}
      </Box>
    </Container>
  );
};

export default Work;
