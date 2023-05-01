import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Banner from './test';
import Grid from '@mui/material/Grid'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
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
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

function Vendornavbar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    return (
        <div>
          <Grid container columns={20}>
<Grid xs={20}>
 <Box sx={{ width: '100%' }}>
 {/* <img src='https://cdn1.weddingwire.in/assets/img/logos/gen_logoHeaderPro.svg?v=4'></img> */}

      <Box sx={{ borderBottom: 1, borderColor: 'divider',float:'right' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="VENDOR LOGIN" {...a11yProps(0)} />
          <Tab label="FEATURES" {...a11yProps(1)} />
          <Tab label="PREMIUM SERVICES" {...a11yProps(2)} />
          <Tab label="DOWNLOAD THE APP" {...a11yProps(3)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Banner/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>

    </Box> 
    </Grid>
      </Grid>
     
      </div>
    )
}

export default Vendornavbar
