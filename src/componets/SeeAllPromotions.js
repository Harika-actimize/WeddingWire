import React from 'react'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid } from '@mui/material';

function SeeAllPromotions() {
    return (
        <div>
                    
            <Grid sx={{
                textAlign:'center',
            }}>
                    <Button variant="outlined" sx={{borderColor:'#d9d9d9'
                    ,color:'#222',
                    textTransform:'none',
                    margin:'25px',
                    width:'max-content'}}>See all promotions<ArrowForwardIcon></ArrowForwardIcon></Button>
                    </Grid>
        </div>
    )
}

export default SeeAllPromotions
