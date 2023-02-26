import { Box, Paper, Typography } from "@mui/material";

const Icon = (props) => {
  const { sx } = props;
  return (
    <Paper
      sx={{
        border: 2,
        borderColor: "secondary.light",
        borderRadius: 1,
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          bgcolor: "primary.main",
          pl: 0.5,
          py: "3px",
        }}
      >
        <Box
          sx={{
            width: "7px",
            height: "7px",
            bgcolor: "#F55050",
            borderRadius: "25%",
          }}
        ></Box>
        <Box
          sx={{
            width: "7px",
            height: "7px",
            bgcolor: "#F2CD5C",
            ml: "3px",
            borderRadius: "25%",
          }}
        ></Box>
        <Box
          sx={{
            width: "7px",
            height: "7px",
            bgcolor: "#379237",
            ml: "3px",
            borderRadius: "25%",
          }}
        ></Box>
      </Box>
      <Typography
        component="a"
        href="/"
        sx={{
          display: { xs: "inline-block" },
          color: "#E07A5F",
          textDecoration: "none",
          fontSize: "1rem",
          p: 0.5,
        }}
      >
        {`<Hernán/>`}
      </Typography>
    </Paper>
  );
};

export default Icon;
