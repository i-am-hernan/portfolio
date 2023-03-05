import { Box, Paper, Typography } from "@mui/material";
import { forwardRef } from "react";

const TerminalExperience = forwardRef((props, ref) => {
  const { children, title, ...other } = props;

  return (
    <Paper {...other} ref={ref}>
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
            display: "flex",
            justifyContent: "flex-start",
            bgcolor: "primary.main",
            pl: 0.5,
            py: "3px",
          }}
        >
          <Box
            sx={{
              width: "20px",
              height: "20px",
              bgcolor: "#F55050",
              borderRadius: "25%",
            }}
          ></Box>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              bgcolor: "#F2CD5C",
              ml: "3px",
              borderRadius: "25%",
            }}
          ></Box>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              bgcolor: "#379237",
              ml: "3px",
              borderRadius: "25%",
            }}
          ></Box>
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: "background.paper",
            flexGrow: 1,
            px: "10",
            textAlign: "center",
            fontSize: "1rem",
            ml: "-60px",
          }}
        >
          {`${title} --.bash`}
        </Typography>
      </Box>
      {children}
    </Paper>
  );
});

export default TerminalExperience;
