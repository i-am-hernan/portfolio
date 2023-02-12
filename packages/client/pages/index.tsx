import { Container, Box } from "@mui/system";
import About from "../components/Section/About";
import Experience from "../components/Section/Experience";
import Intro from "../components/Section/Intro";

const Home: any = () => {
  return (
    <Box sx={{ px: 0, bgcolor: "red" }}>
      <Intro />
      <About />
      <Experience />
    </Box>
  );
};

export default Home;
