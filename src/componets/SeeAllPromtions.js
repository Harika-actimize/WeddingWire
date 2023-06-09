import React from 'react'
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import { Icon } from '@iconify/react';


function SeeAllPromtions() {
    return (
        <div>
           <Grid container spacing={2} columns={10} sx={{marginTop:'40px'}}>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={10} sm={2} sx={{textAlign:'center'}}>
                    <Button variant="outlined" sx={{borderColor:'#d9d9d9',color:'#222',textTransform:'none',width:'max-content'}}>See all promotions<Icon icon="tabler:arrow-up" width="24" height="24" rotate={1} /></Button>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
 
        </div>
    )
}

export default SeeAllPromtions
