import * as React from "react";

// MUI imports
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// local imports
import {
  pastProjectData,
  presentProjectData,
  futureProjectData,
} from "../components/ProjectCard/data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Projects() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Past' {...a11yProps(0)} />
          <Tab label='Present' {...a11yProps(1)} />
          <Tab label='Future' {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='content' id='project-content'>
          <div id='projectCardContainer' className='projectCard'>
            {pastProjectData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='content' id='project-content'>
          <div id='projectCardContainer' className='projectCard'>
            {presentProjectData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='content' id='project-content'>
          <div id='projectCardContainer' className='projectCard'>
            {futureProjectData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>{" "}
      </TabPanel>
    </Box>
  );
}
