import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Contact = () => {
  const handleChange = (e) => {
    e.preventDefault();
    window.open("mailto:hschalco@gmail.com?subject=Hello!");
  };

  return (
    <Container
      maxWidth={false}
      component="section"
      disableGutters
      sx={{
        bgcolor: "#FFFFFF",
        height: "100%",
        position: "relative",
        pt: "15%",
        px: "15%",
      }}
      id="contact"
    >
      <Typography
        sx={{
          fontFamily: "Cutive Mono, monospace;",
          fontSize: "1.2rem",
          textDecoration: "none",
          color: "#011627",
        }}
        align="center"
      >
        What's Next?
      </Typography>
      <Typography
        sx={{
          color: "#01BAEF",
          textDecoration: "none",
          fontSize: { xs: "3rem", md: "3.5rem" },
          fontFamily: "Yomogi, cursive",
          letterSpacing: "-3px",
        }}
        align="center"
      >
        Get In Touch
      </Typography>
      <Typography
        sx={{
          color: "#011627",
          textDecoration: "none",
          fontSize: "0.9rem",
          fontWeight: "light",
          py: 1,
          px: "20%",
        }}
        align="center"
      >
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </Typography>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          onClick={(e) => {
            handleChange(e);
          }}
          size="large"
          variant="outlined"
          sx={{
            color: "#E07A5F",
            borderColor: "#E07A5F",
            ":hover": {
              color: "#01BAEF",
              borderColor: "#01BAEF",
            },
          }}
        >
          Contact
        </Button>
        <Typography
          sx={{
            pt: "20%",
            fontFamily: "Cutive Mono, monospace;",
            fontSize: ".8rem",
            textDecoration: "none",
            color: "#011627",
          }}
        >
          Developed by Hernán Chalco.
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
