import { Container, Paper, Typography, Box, Grid, Link } from "@mui/material";
import TerminalContainer from "../Experience/TerminalContainer";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

const Projects = [
  {
    img: "/sdk-explorer.png",
    title: "SDK Explorer",
    description:
      "An open source application that educates and enables developers to configure customized versions of the Adyen solutions.",
    links: {
      github: "/",
      project: "/",
    },
    keywords: ["React", "Material UI", "Typescript", "Node", "Express"],
  },
  {
    img: "/automate-build.png",
    title: "Automate Build",
    description:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat.",
    links: {
      github: "/",
      project: "/",
    },
    keywords: ["React", "Material UI", "Typescript", "Node", "Express"],
  },
  {
    img: "/matlab.png",
    title: "Applied Math",
    description:
      "One of my early introductions into development was by solving Matlab problems for my Applied Mathematics projects. Here is repo of some fun applied math implmentations.",
    links: {
      github: "/",
      project: "/",
    },
    keywords: ["Matlab", "Linear Algebra"],
  },
];

const ProjectDisplay = (props) => {
  const { orientation, project, ...other } = props;
  console.log("props", props);

  return (
    <Grid
      container
      direction={orientation === "right" ? "row-reverse" : "row"}
      justifyContent="flex-end"
      {...other}
    >
      <Grid item xs={7}>
        <Box
          sx={{
            bgcolor: "yellow",
            position: "relative",
            backgroundImage: `${project.img}`,
          }}
        >
          <Paper sx={{ boxShadow: 15, position: "absolute" }}>
            <img src={project.img} width={"100%"} height={"100%"} style={{borderRadius: "1%"}} />
          </Paper>
          <Paper
            sx={{
              boxShadow: 15,
              position: "absolute",
              opacity: ".4",
              bgcolor: "#01BAEF",
              transition: "opacity 0.5s",
              ":hover": {
                opacity: "0",
              },
            }}
          >
            <img
              src={project.img}
              width={"100%"}
              height={"100%"}
              style={{ visibility: "hidden" }}
            />
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={5} sx={{ position: "relative", my: "10%" }}>
        <Typography
          sx={{
            textAlign: `${orientation === "right" ? "left" : "right"}`,
            fontFamily: "Cutive Mono, monospace;",
            textDecoration: "none",
            color: "#011627",
            fontSize: { xs: "1rem", md: "1.3rem" },
            fontWeight: "light",
            pb: 2,
          }}
        >
          {project.title}
        </Typography>
        <TerminalContainer
          sx={{
            mr: `${orientation === "right" ? "-70px" : "0"}`,
            ml: `${orientation === "right" ? "0" : "-70px"}`,
            boxShadow: 20,
            border: 2,
            color: "#01BAEF",
            borderRadius: 1,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <span>
              <ArrowRightOutlinedIcon />
            </span>
            <Typography
              sx={{
                display: "inline-block",
                verticalAlign: "top",
                color: "#011627",
                textDecoration: "none",
                fontSize: "0.7rem",
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
          sx={{ textAlign: `${orientation === "right" ? "left" : "right"}` }}
        >
          {project?.keywords?.length > 0 &&
            project.keywords.map((keyword, i) => {
              return (
                <Typography
                  index={i}
                  sx={{
                    textDecoration: "none",
                    color: "#011627",
                    fontSize: { xs: ".6rem", md: ".7rem" },
                    fontWeight: "light",
                    pt: 1,
                    pl: 2,
                    display: "inline-block",
                  }}
                >
                  {keyword}
                </Typography>
              );
            })}
        </Box>
        {/* <Box sx={{ textAlign: "right" }}>
          <Link
            component={
              <GitHubIcon sx={{ fontSize: "1.1rem", color: "#01BAEF" }} />
            }
            onClick={() => {
              console.info("I'm a button.");
            }}
          ></Link>
        </Box> */}
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
        bgcolor: "#FFFFFF",
        height: "100%",
        position: "relative",
        pt: "12%",
        px: "15%",
      }}
      id="work"
    >
      <Box>
        <Typography
          sx={{
            color: "#E07A5F",
            textDecoration: "none",
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: "light",
            pb: 3,
          }}
        >
          Cool stuff I built
        </Typography>
        {Projects?.length > 0 &&
          Projects.map((project, i) => {
            return (
              <ProjectDisplay
                project={project}
                orientation={(i + 1) % 2 === 0 ? "right" : "left"}
                index={i}
                sx={{ pb: 7 }}
              />
            );
          })}
      </Box>
    </Container>
  );
};

export default Work;
