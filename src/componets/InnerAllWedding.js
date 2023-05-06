import React from 'react'
import { Typography,Grid } from '@mui/material'


function InnerAllWedding({heading}) {
    return (
        <div>
                            <Grid item xs={16} >
                            <Typography sx={{fontSize:'25px',fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif',fontWeight:'700',marginBottom:'20px'}} >{heading}</Typography>
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
                    </ul>
                    </Grid>
                
        </div>
    )
}

export default InnerAllWedding
