import React from 'react'
import { Divider, Grid, Typography } from '@mui/material';

function Mumbaibydivider({location,data}) {
    return (
        <div>
           <Grid container spacing={2} columns={20}>

{/* <Grid item xs={2}></Grid> */}

<Grid item xs={18}>
    <Typography sx={{fontSize:'25px',
                        fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif',
                        fontWeight:'700',
                        marginBottom:'20px',
                        marginTop:'25px' }}>{location}</Typography>
</Grid>
{/* <Grid item xs={2}></Grid> */}

{/* <Grid item xs={2}></Grid> */}
<Grid item xs={20}>
<div className="itemLoc">
    <ul style={{padding:"0px"}}>
        {data.map(item=>(<>
        <li><span className="left">{item.location} </span><span className="right">{item.venue_count}</span></li>
        </>))}
    </ul>
</div>
</Grid>
{/* <Grid item xs={2}></Grid> */}
</Grid>
           
        </div>
    )
}

export default Mumbaibydivider
