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
        bgcolor: "primary.light",
        transition: "background-color 0.5s linear",
        height: "100%",
        position: "relative",
        pt: "12%",
        px: "15%",
      }}
      id="contact"
    >
      <Typography
        sx={{
          fontFamily: "Cutive Mono, monospace;",
          fontSize: "1.2rem",
          textDecoration: "none",
          color: "secondary.dark",
        }}
        align="center"
      >
        What's Next?
      </Typography>
      <Typography
        sx={{
          color: "primary.main",
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
          color: "primary.dark",
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
            color: "secondary.main",
            borderColor: "secondary.main",
            ":hover": {
              color: "primary.main",
              borderColor: "primary.main",
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
            color: "primary.dark",
          }}
        >
          Developed by Hernán Chalco.
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
