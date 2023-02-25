import { Box } from "@mui/system";
import About from "../components/Section/About";
import Experience from "../components/Section/Experience/Index";
import Intro from "../components/Section/Intro";
import Work from "../components/Section/Work/Index";

const Home: any = () => {
  return (
    <Box sx={{ px: 0 }}>
      <Intro />
      <About />
      <Experience />
      <Work />
    </Box>
  );
};

export default Home;
