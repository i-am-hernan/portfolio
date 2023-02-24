import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { useWindowHeight } from "../../../hooks/useWindowHeight";
import TerminalExperience from "./TerminalContainer";
import { useState } from "react";

const workExperience = [
  {
    company: "Quantum Metric",
    title: "Customer Success Engineer",
    dates: "March 2020 – September 2021",
    activity: [
      "Developed custom JavaScript functions to capture data analytics that satisfy complex use cases.",
      "Drove efforts to integrate Quantum Metric platform with 3rd party platforms such as Qualtrics, Tealium, Dynatrace, and others.",
      "Expert knowledge of browser developer tools to test scripts and diagnose digital defects.",
    ],
  },
];

const TabPanel = (props: TabPanelProps) => {
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
};

const Experience = (props) => {
  const height = useWindowHeight("1500px");
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            value={value}
            onChange={handleChange}
            sx={{
              borderRight: 1,
              borderColor: "divider",
              ".Mui-selected": { color: "#01BAEF" },
              ".MuiTabs-indicator": { bgcolor: "red" },
            }}
          >
            <Tab label="HCL Technologies" />
            <Tab label="Quantum Metric" />
            <Tab label="Adyen" />
          </Tabs>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
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
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
        </Box>
      </TerminalExperience>
    </Container>
  );
};

export default Experience;
