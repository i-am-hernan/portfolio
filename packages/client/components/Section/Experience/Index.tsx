import { Container } from "@mui/material";
import { useWindowHeight } from "../../../hooks/useWindowHeight";
import Particles from "./Particles";

const Experience = (props) => {
  const height = useWindowHeight("500px");

  return (
    <Container
      maxWidth={false}
      component="section"
      disableGutters
      sx={{
        bgcolor: "#FFFFFF",
        height: "100vh",
        position: "relative",
      }}
      id="experience"
    >
      <Particles id={"particles"} height={height} />
    </Container>
  );
};

export default Experience;
