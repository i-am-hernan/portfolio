import { Container } from "@mui/material";

const Experience: any = () => {
  return (
    <Container
      maxWidth={false}
      component="section"
      disableGutters
      sx={{
        bgcolor: "red",
        height: "100vh",
        py: 0,
        position: "relative",
        px: 0,
      }}
    >
      <img src='/san-francisco.jpg' width={"50%"} height={"100%"} />
    </Container>
  );
};

export default Experience;
