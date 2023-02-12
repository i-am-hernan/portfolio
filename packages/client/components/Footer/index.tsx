import { Box, Typography, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container } from "@mui/system";

export const Footer = () => {
  return (
    <Box
      disableGutters
      sx={{
        bgcolor: "#FAF9F9",
        color: "#E07A5F",
        fontSize: "2rem",
      }}
      direction="column"
    >
      <Container disableGutters>
        <GitHubIcon sx={{ pb: 1, fontSize: "2rem" }} />
        <LinkedInIcon sx={{ pb: 1, fontSize: "2rem" }} />
        <Box
          sx={{
            border: 2,
            height: "100%",
            width: "100px",
            bgcolor: "#E07A5F",
          }}
        ></Box>
      </Container>
    </Box>
  );
};
