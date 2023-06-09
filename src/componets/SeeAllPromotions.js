import React from 'react'
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Icon } from '@iconify/react';

function SeeAllPromotions() {
    return (
        <div>
                    
            <Grid sx={{
                textAlign:'center',
                paddingBottom:'3.5rem'
            }}>
                    <Button variant="outlined" sx={{borderColor:'#d9d9d9'
                    ,color:'#222',
                    textTransform:'none',
                    margin:'25px',
                    width:'max-content',
                    // marginTop:'10px',
                    }}>See all promotions<Icon icon="tabler:arrow-up" width="24" height="24" rotate={1} /></Button>
                    </Grid>
        </div>
    )
}

export default SeeAllPromotions
