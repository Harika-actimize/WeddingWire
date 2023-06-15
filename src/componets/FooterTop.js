import { Typography } from '@mui/material'
import React from 'react'
import { Box, Button, Divider, Grid ,useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Chip from '@mui/material/Chip';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import FooterTopMobile from './FooterTopMobile';

function FooterTop() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

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
            </Grid>

        </div>
    )
}

export default FooterTop
