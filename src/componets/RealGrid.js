import React from 'react';
import { Grid,Typography,useMediaQuery} from "@mui/material";
import { useTheme } from "@mui/system";



function RealGrid() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div>
           <Grid container spacing={2} columns={10} sx={{marginTop:'40px'}}>
                <Grid item xs={1}>

                </Grid>
                { matches?
                <Grid item xs={10}>
                    <Typography variant='h5'sx={{fontSize:'24px',fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif',fontWeight:'700',marginBottom:'20px'}} >Real Weddings</Typography>
                    <Typography sx={{fontFamily:'ProximaNova,ProximaNova-fallback-Arial,sans-serif',fontSize:'14px'}}>Browse by location to find wedding professionals in your area and view photos of their work</Typography>
                    {/* <Button variant="outlined" sx={{borderColor:'#d9d9d9',color:'#222',textTransform:'none',marginRight:'10%'}}>View all winners<ArrowForwardIcon></ArrowForwardIcon></Button> */}
                </Grid> :
                <Grid item xs={8}>
                <Typography variant='h5'sx={{fontSize:'24px',fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif',fontWeight:'700',marginBottom:'20px'}} >Real Weddings</Typography>
                <Typography sx={{fontFamily:'ProximaNova,ProximaNova-fallback-Arial,sans-serif',fontSize:'14px'}}>Browse by location to find wedding professionals in your area and view photos of their work</Typography>
                {/* <Button variant="outlined" sx={{borderColor:'#d9d9d9',color:'#222',textTransform:'none',marginRight:'10%'}}>View all winners<ArrowForwardIcon></ArrowForwardIcon></Button> */}
            </Grid>}
                <Grid item xs={1}>

                </Grid>
            </Grid>
        </div>
    )
}

export default RealGrid
