import { Typography } from '@mui/material'
import React from 'react'
import { Box, Button, Divider, Grid } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Chip from '@mui/material/Chip';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';

function FooterTop() {
    return (
        <div>
            <Grid container spacing={2} columns={20}>
                <Grid item xs={2}>

                </Grid>

                <Grid item xs={16} >
                <Typography sx={{ marginBottom: '.5rem', fontSize: '1.25rem' }}>Wedding vendors by category</Typography>

                    <ul className='venues'>
                        <li className='subname'>
                         <a href='#' className="headcolor" >Wedding Venues</a></li>
                         <ul className="bodyres">
                    <li className='nameres'>Banquet Halls </li>
                    <li className='nameres'>Hotels </li>
                    <li className='nameres'>Marriage Gardens </li>
                    <li className='nameres'>Kalyana mandapams </li>
                    <li className='nameres'>Wedding Resorts </li>
                    <li className='nameres'>Wedding Lawns Farmhouses </li>
                    </ul>
                        <li className='subname'>
                         <a href='#' className="headcolor">Wedding Vendors</a></li>
                         <ul className="bodyres">
                    <li className='nameres'>Caterers</li>
                    <li className='nameres'>Wedding Invitations </li>
                    <li className='nameres'>Wedding Gifts  </li>
                    <li className='nameres'>Wedding Photographers  </li>
                    <li className='nameres'>Wedding Music  </li>
                    <li className='nameres'>Wedding Transportation  </li>
                    <li className='nameres'> Tent House </li>
                    <li className='nameres'>Wedding Entertainment  </li>
                    <li className='nameres'>Florists</li>
                    <li className='nameres'>Wedding Planners   </li>
                    <li className='nameres'>Wedding Videography   </li>
                    <li className='nameres'>Honeymoon   </li>
                    <li className='nameres'>Wedding Decorators  </li>
                    <li className='nameres'>Wedding Cakes   </li>
                    <li className='nameres'>Wedding DJ  </li>
                    <li className='nameres'>Pandits   </li>
                    <li className='nameres'>Photobooth  </li>
                    <li className='nameres'>Astrologers  </li>
                    <li className='nameres'>Party Places </li>
                    <li className='nameres'>Wedding Choreographers </li>
                    </ul>
                    <li className='subname'>
                         <a href='#' className="headcolor">Brides</a></li>
                         <ul className="bodyres">
                    <li className='nameres'>Mehndi Artists </li>
                    <li className='nameres'> Bridal Makeup Artists</li>
                    <li className='nameres'> Makeup Salon </li>
                    <li className='nameres'> Bridal Jewellery</li>
                    <li className='nameres'> Bridal Lehenga </li>
                    <li className='nameres'> Trousseau Packing</li>
                    </ul>
                    <li className='subname'>
                         <a href='#' className="headcolor">Grooms</a></li>
                         <ul className="bodyres">
                    <li className='nameres'>Sherwani</li>
                    </ul>
                </ul>
                </Grid>
                <Grid item xs={2}>
                    </Grid>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={20} md={4} sm={8} lg={4}>
                <Typography sx={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Wedding vendors by location</Typography>
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
                <Grid item xs={16} md={4} sm={8} lg={4}>
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
                <Grid item xs={16} md={4} sm={8} lg={4}>
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
                <Grid item xs={16} md={4} sm={8} lg={4}>
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
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={20}>
                    <Divider>
                    <Chip label={<Person3OutlinedIcon></Person3OutlinedIcon>}></Chip>
                    </Divider>
                </Grid>
                <Grid item xs={5}>

                </Grid>
                <Grid item xs={20} md={20} sm={20} lg={10}>
                    <Typography sx={{textAlign:'center',fontWeight:400,fontSize:'20px',marginBottom:'10px'}}>Contact a Wedding Expert for Free</Typography>
                    <Typography variant='inherit' sx={{textAlign:'center',marginBottom:'10px'}}>We'd love to assist you! 7 days a week from 9am to 8pm</Typography>
                    <Typography sx={{color:'red',textAlign:'center',fontSize:'16px'}}><LocalPhoneOutlinedIcon sx={{color:'red'}}></LocalPhoneOutlinedIcon> Call991-050-2284</Typography>
                </Grid>
                <Grid item xs={5}>

                </Grid>

            </Grid>

        </div>
    )
}

export default FooterTop
