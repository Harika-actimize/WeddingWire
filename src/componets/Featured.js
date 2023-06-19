import React from 'react';
import { Grid ,Typography,useMediaQuery} from "@mui/material";
import { useTheme } from "@mui/system";


function Featured() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div>
            <Grid container spacing={2} columns={20}>
                <Grid item xs={2}>

                </Grid>
                { matches ?
                <Grid item xs={20}>
                    <Typography sx={{fontSize:'24px',marginBottom:'16px',marginTop:'50px',fontWeight:'700',   fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif'}}>Featured wedding vendors</Typography>

                </Grid>:
                <Grid item xs={16}>
                <Typography sx={{fontSize:'24px',marginBottom:'16px',marginTop:'50px',fontWeight:'700',   fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif'}}>Featured wedding vendors</Typography>

            </Grid>}

                <Grid item xs={2}>

                </Grid>
            </Grid>
        </div>
    )
}

export default Featured
