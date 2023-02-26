import { Box, Paper, Typography } from "@mui/material";

const TerminalExperience = (props: any) => {
  const { children, ...other } = props;

  return (
    <Paper {...other}>
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
        <Typography
          variant="h6"
          sx={{ color: "secondary.grey", flexGrow: 1, px: "10", textAlign: "center" }}
        >
          Work --.bash
        </Typography>
      </Box>
      {children}
    </Paper>
  );
};

export default TerminalExperience;
