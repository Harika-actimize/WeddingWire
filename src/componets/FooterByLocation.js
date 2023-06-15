import { Typography } from '@mui/material'
import React from 'react'
import { Box, Button, Divider, Grid ,useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Chip from '@mui/material/Chip';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import FooterTopMobile from './FooterTopMobile';

function FooterByLocation() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{marginBottom:'5%'}}>
        <Grid container spacing={2} columns={20}>
        <Grid item xs={2}>

</Grid>
        <Grid item xs={4} md={4} lg={4}>
                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Maharashtra</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Mumbai</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Pune</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Nashik</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Nagpur</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Raigad</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Delhi NCR</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues South Delhi</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Gurgaon</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues West Delhi</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues North Delhi</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Ghaziabad</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Faridabad</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Noida</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues East Delhi</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Dwarka</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Greater Noida</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Central Delhi</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Uttar Pradesh</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Lucknow</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Agra</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Varanasi</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Kanpur</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Meerut</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Rajasthan</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Jaipur</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Udaipur</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Jodhpur</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Ajmer</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Alwar</Typography>


                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Karnataka</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Bangalore</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Mysore</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Dakshina Kannada</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Belgaum</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Kodagu</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Tamil Nadu</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Chennai</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Coimbatore</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Salem</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Madurai</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Tiruchirappalli</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Telangana</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Hyderabad</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Ranga Reddy</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Mancherial</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Medchal</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Warangal</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Gujarat</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Ahmedabad</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Vadodara</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Surat</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Rajkot</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Gandhinagar</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>West Bengal</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Kolkata</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Darjeeling</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Howrah</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Paschim Bardhaman</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues South 24 Parganas</Typography>

                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Uttarakhand</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Dehradun</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Nainital</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Haridwar</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Pauri Garhwal</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Tehri Garhwal</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Goa</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues North Goa</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues South Goa</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Punjab</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Ludhiana</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Amritsar</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Jalandhar</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Patiala</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Sahibzada Ajit Singh</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Nagar</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Chandigarh</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Chandigarh City</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Zirakpur</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Panchkula</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Mohali</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Madhya Pradesh</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Bhopal</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Indore</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Gwalior</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Jabalpur</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Ujjain</Typography>

                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Kerala</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Kochi</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Thiruvananthapuram</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Ernakulam</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Kozhikode</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Thrissur</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Bihar</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Patna</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Gaya</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Muzaffarpur</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Bhagalpur</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Aurangabad - Bihar</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Andhra Pradesh</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Visakhapatnam</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Vijayawada</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Chittoor</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Kurnool</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues East Godavari</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Himachal Pradesh</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Shimla</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Solan</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Kangra</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Kullu</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Chamba</Typography>

                    <Typography sx={{ display: 'block', clear: 'both', margin: '10px 0 5px', fontSize: '1rem' }}>Odisha</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Bhubaneswar</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Puri</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Khordha</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Ganjam</Typography>
                    <Typography sx={{ fontSize: '14px', marginBottom: '5px' }}>Wedding Venues Cuttack</Typography>


                </Grid>
                </Grid>

    </div>
  )
}

export default FooterByLocation