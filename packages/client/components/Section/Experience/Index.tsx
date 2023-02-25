import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { Box, Container, Tab, Tabs, Typography, Grid } from "@mui/material";
import { useWindowHeight } from "../../../hooks/useWindowHeight";
import TerminalExperience from "./TerminalContainer";
import { useState } from "react";

const jobs = [
  {
    company: "Adyen",
    title: "Implementation Engineer",
    dates: "October 2021 – present",
    tasks: [
      "Developed internal applications to assist the Implementation Engineering team and clients configure customized versions of the Adyen solutions.",
      "Solved and communicated solutions to complex integration problems.",
      "Served as the chief technical lead for our merchants during their integration with Adyen.",
    ],
  },
  {
    company: "Quantum Metric",
    title: "Customer Success Engineer",
    dates: "March 2020 – September 2021",
    tasks: [
      "Developed custom JavaScript functions to capture data analytics that satisfy complex use cases.",
      "Drove efforts to integrate Quantum Metric platform with 3rd party platforms such as Qualtrics, Tealium, Dynatrace, and others.",
      "Expert knowledge of browser developer tools to test scripts and diagnose digital defects.",
    ],
  },
  {
    company: "HCL Technologies",
    title: "Software Engineer",
    dates: "October 2018 – March 2020",
    tasks: [
      "Led efforts to analyze, debug, and resolve digital defects.",
      "Developed automated system tests to ensure the health of the site infrastructure.",
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
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
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
        pt: "15%",
        px: "25%",
      }}
      id="experience"
    >
      <Typography
        sx={{
          color: "#E07A5F",
          textDecoration: "none",
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: "light",
          pb: 3,
        }}
      >
        Where I've worked
      </Typography>
      <TerminalExperience
        sx={{
          boxShadow: 20,
          border: 2,
          color: "#01BAEF",
          borderRadius: 1,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
          sx={{ minHeight: { xs: "250px" } }}
        >
          <Grid
            item
            xs={3}
            sx={{
              borderRight: 3,
              borderColor: "divider",
            }}
          >
            <Tabs
              indicatorColor="red"
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              sx={{
                ".MuiTabs-indicator": { bgcolor: "#01BAEF" },
                ".MuiButtonBase-root.MuiTab-root.Mui-selected": {
                  color: "#01BAEF",
                  py: 2,
                },
              }}
            >
              {jobs?.length > 0 &&
                jobs.map((job, i) => {
                  return (
                    <Tab
                      index={i}
                      fullWidth={true}
                      label={
                        <Typography
                          sx={{
                            fontSize: { xs: ".75rem" },
                            fontWeight: "light",
                            textDecoration: "none",
                          }}
                        >
                          {job?.title}
                        </Typography>
                      }
                    />
                  );
                })}
            </Tabs>
          </Grid>
          <Grid item xs={8}>
            {jobs?.length > 0 &&
              jobs.map((job, i) => {
                return (
                  <TabPanel value={value} index={i}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#FFFFFFF",
                        fontWeight: "light",
                        display: "inline-block",
                        fontSize: ".9rem",
                      }}
                    >
                      {job?.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "#E07A5F", display: "inline-block" }}
                    >
                      {`@ ${job.company}`}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "#`E07A5F`", fontWeight: "light", pb: 1 }}
                    >
                      {job.dates}
                    </Typography>
                    {job.tasks?.length > 0 &&
                      job.tasks.map((task, i) => {
                        return (
                          <Box index={i} sx={{ display: "flex" }}>
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
                              {task}
                            </Typography>
                          </Box>
                        );
                      })}
                  </TabPanel>
                );
              })}
          </Grid>
        </Grid>
      </TerminalExperience>
    </Container>
  );
};

export default Experience;
