import React from 'react'
import { Typography } from '@mui/material'
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function VenuesHydrabad() {
    return (
        <div>
               <Grid container spacing={2} columns={10} sx={{marginTop:'40px'}}>
                <Grid item xs={4}>

                </Grid>
                <Grid xs={10} sm={2} sx={{textAlign:'center'}}>
                    <Button variant="outlined" sx={{mb:'1.5rem', borderColor:'#d9d9d9',color:'#222',textTransform:'none',width:'max-content',padding: '.69rem 1rem'}}>Discover 389 venues in Hyderabad<ArrowForwardIcon></ArrowForwardIcon></Button>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
                 </div>
    )
}

export default VenuesHydrabad
