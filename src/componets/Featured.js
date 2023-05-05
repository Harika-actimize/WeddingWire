import { Typography } from '@mui/material'
import React from 'react';
import { Grid } from "@mui/material";

function Featured() {
    return (
        <div>
            <Grid container spacing={2} columns={20}>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={16}>
                    <Typography sx={{fontSize:'24px',marginBottom:'16px',marginTop:'50px',fontWeight:'700',   fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif'}}>Featured wedding vendors</Typography>

                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
        </div>
    )
}

export default Featured
