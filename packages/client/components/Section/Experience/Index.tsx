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

const Experience = (props) => {
  const height = useWindowHeight("1500px");
  console.log("height: ", height);

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
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
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
      <Paper
        sx={{
          border: 2,
          color: "#01BAEF",
          borderRadius: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            bgcolor: "#01BAEF",
            pl: 0.5,
            py: "3px",
          }}
        >
          <Box
            sx={{
              width: "20px",
              height: "20px",
              bgcolor: "#F55050",
              borderRadius: "25%",
            }}
          ></Box>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              bgcolor: "#F2CD5C",
              ml: "3px",
              borderRadius: "25%",
            }}
          ></Box>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              bgcolor: "#379237",
              ml: "3px",
              borderRadius: "25%",
            }}
          ></Box>
          <Typography variant="h6" sx={{ color: "black" }}>
            Work --.bash
          </Typography>
        </Box>
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
              ".Mui-selected": { color: "#E07A5F" },
              ".MuiTabs-indicator": { bgcolor: "#E07A5F" },
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
            Item Two asdfhja sldkjfh asdlfhj asdlfhj dshl
          </TabPanel>
          <TabPanel value={1} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={1} index={3}>
            Item Four
          </TabPanel>
        </Box>
      </Paper>
    </Container>
  );
};

export default Experience;
