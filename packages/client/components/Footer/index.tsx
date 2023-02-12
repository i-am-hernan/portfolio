import { Box, Typography, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container } from "@mui/system";

export const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#FAF9F9",
        py: 0,
        position: "fixed",
        right: 0,
        bottom: 0,
        px: 0,
        color: "#E07A5F",
        display: "flex",
        flexDirection: "column",
        fontSize: "2rem",
      }}
      direction="column"
    >
      <GitHubIcon sx={{ pb: 1, fontSize: "2rem" }} />
      <LinkedInIcon sx={{ pb: 1, fontSize: "2rem" }} />
      <Box>
        <Box
          sx={{
            border: 2,
            height: "100%",
            width: "1px",
            bgcolor: "#E07A5F",
          }}
        ></Box>
      </Box>
    </Box>
  );
};
