import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  Box,
  Paper,
} from "@mui/material";
import { useWindowHeight } from "../../../hooks/useWindowHeight";
import Particles from "./Particles";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import TerminalExperience from "./TerminalContainer";

const Experience = (props) => {
  const height = useWindowHeight("1500px");

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  return (
    <Container
      maxWidth={false}
      component="section"
      disableGutters
      sx={{
        bgcolor: "#FFFFFF",
        height: "100%",
        position: "relative",
        py: "15%",
        px: 60,
      }}
      id="experience"
    >
      <Typography
        sx={{
          color: "#E07A5F",
          textDecoration: "none",
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: "light",
          pb: 2,
        }}
      >
        Where I've worked
      </Typography>
      <TerminalExperience>
        <Box
          component="span"
          sx={{
            flexGrow: 1,
            display: "flex",
            height: 224,
            border: 5,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={1}
            sx={{
              borderRight: 1,
              borderColor: "divider",
              ".Mui-selected": { color: "#01BAEF" },
              ".MuiTabs-indicator": { bgcolor: "#01BAEF" },
            }}
          >
            <Tab label="HCL Technologies" />
            <Tab label="Quantum Metric" />
            <Tab label="Adyen" />
          </Tabs>
          <TabPanel value={1} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={1} index={1}>
            <Typography
              variant="h5"
              sx={{
                color: "#E07A5F",
                fontWeight: "light",
                display: "inline-block",
              }}
            >
              Customer Success Engineer
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#E07A5F", display: "inline-block" }}
            >
              @ Quantum Metric
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#`E07A5F`", fontWeight: "light" }}
            >
              March 2020 – September 2021
            </Typography>
            <Box sx={{ display: "flex" }}>
              <span>
                <ArrowRightOutlinedIcon />
              </span>
              <Typography
                sx={{
                  display: "inline-block",
                  verticalAlign: "top",
                  color: "#011627",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  fontWeight: "light",
                  py: 0.4,
                }}
              >
                Developed custom JavaScript functions to capture data analytics
                that satisfy complex use cases.
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <span>
                <ArrowRightOutlinedIcon />
              </span>
              <Typography
                sx={{
                  display: "inline-block",
                  verticalAlign: "top",
                  color: "#011627",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  fontWeight: "light",
                  py: 0.4,
                }}
              >
                Drove efforts to integrate Quantum Metric platform with 3rd
                party platforms such as Qualtrics, Tealium, Dynatrace, and
                others.
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <span>
                <ArrowRightOutlinedIcon />
              </span>
              <Typography
                sx={{
                  display: "inline-block",
                  verticalAlign: "top",
                  color: "#011627",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  fontWeight: "light",
                  py: 0.4,
                }}
              >
                Expert knowledge of browser developer tools to test scripts and
                diagnose digital defects.
              </Typography>
            </Box>
          </TabPanel>
          <TabPanel value={1} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={1} index={3}>
            Item Four
          </TabPanel>
        </Box>
      </TerminalExperience>
    </Container>
  );
};

export default Experience;
