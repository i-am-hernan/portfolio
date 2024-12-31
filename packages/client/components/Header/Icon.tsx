import { Box, Paper, Typography } from "@mui/material";
import React from "react";
const Icon = (props) => {
  const { sx } = props;
  return (
    <Box
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "stretch",
        p: 0,
      }}
    >
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
            pl: 0.3,
            py: "2px",
          }}
        >
          <Box
            sx={{
              width: "3px",
              height: "3px",
              bgcolor: "#F55050",
              borderRadius: "15%",
            }}
          ></Box>
          <Box
            sx={{
              width: "3px",
              height: "3px",
              bgcolor: "#F2CD5C",
              ml: "1px",
              borderRadius: "15%",
            }}
          ></Box>
          <Box
            sx={{
              width: "3px",
              height: "3px",
              bgcolor: "#379237",
              ml: "1px",
              borderRadius: "15%",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            height: "10px",
            width: "27px",
            borderRadius: "15%",
          }}
        ></Box>
      </Paper>
      <Typography
        component="a"
        href="/"
        sx={{
          display: { xs: "inline-block" },
          textDecoration: "none",
          fontSize: "0.85rem",
          fontFamily: "Roboto Mono, monospace",
          p: 0.5,
          ...sx,
        }}
      >
        {`hernán`}
      </Typography>
    </Box>
  );
};

export default Icon;
