import React from 'react'
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function ViewMore() {
    return (
        <div>
            <Grid container spacing={2} columns={10} sx={{marginTop:'40px'}}>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={10} sm={2} sx={{textAlign:'center'}}>
                    <Button variant="outlined" sx={{borderColor:'#d9d9d9',color:'#222',textTransform:'none',width:'max-content'}}>View more weddings<ArrowForwardIcon></ArrowForwardIcon></Button>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
        </div>
    )
}

export default ViewMore
