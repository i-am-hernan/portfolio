import { Box } from "@mui/system";
import About from "../components/Section/About";
import Contact from "../components/Section/Contact";
import Experience from "../components/Section/Experience/Index";
import Intro from "../components/Section/Intro";
import Work from "../components/Section/Work/Index";

const Home: any = (props) => {
  return (
    <Box
      sx={{
        px: 0,
      }}
    >
      <Intro />
      <About />
      <Experience />
      <Work />
      <Contact />
    </Box>
  );
};

export default Home;
