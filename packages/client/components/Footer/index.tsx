import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Container, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        py: 0,
        position: "fixed",
        right: 0,
        bottom: "8%",
        px: 2,
        color: "#E07A5F",
        display: "flex",
        flexDirection: "column",
        fontSize: "2rem",
        alignItems: "center",
      }}
      direction="column"
    >
      <Typography
        sx={{
          writingMode: "vertical-lr",
          fontFamily: "Cutive Mono, monospace;",
          fontSize: "1rem",
          textDecoration: "none",
          py: 2,
          fontWeight: "bold"
        }}
      >
        hschalco@gmail.com
      </Typography>
      <GitHubIcon sx={{ pb: 1, fontSize: "2rem" }} />
      <LinkedInIcon sx={{ pb: 1, fontSize: "2rem" }} />
      <Container>
        <Box
          sx={{
            border: 1,
            height: "100px",
            width: "1px",
            bgcolor: "#E07A5F",
          }}
        ></Box>
      </Container>
    </Box>
  );
};
