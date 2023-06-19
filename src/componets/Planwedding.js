
import React from 'react'
import { Grid,useMediaQuery,Typography } from "@mui/material";
import { useTheme } from "@mui/system";


function Planwedding() {
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div>
               <Grid container spacing={2} columns={10} sx={{marginTop:'40px'}}>
                        <Grid item xs={1}>
        
                         </Grid>
                         { matches ?
                       <Grid item xs={10}>
                           <Typography variant='h5'sx={{fontSize:'24px',fontWeight:'bold', fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif',marginBottom:'20px'}} >Plan your destination wedding</Typography>
                            <Typography sx={{fontFamily:'ProximaNova,ProximaNova-fallback-Arial,sans-serif',fontSize:'14px'}}>No matter where in the world you want to get married, WeddingWire's directory of international wedding professionals can help you celebrate.</Typography>
                            {/* <Button variant="outlined" sx={{borderColor:'#d9d9d9',color:'#222',textTransform:'none',marginRight:'10%'}}>View all winners<ArrowForwardIcon></ArrowForwardIcon></Button> */}
                         </Grid> : 
                         <Grid item xs={8}>
                         <Typography variant='h5'sx={{fontSize:'24px',fontWeight:'bold', fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif',marginBottom:'20px'}} >Plan your destination wedding</Typography>
                          <Typography sx={{fontFamily:'ProximaNova,ProximaNova-fallback-Arial,sans-serif',fontSize:'14px'}}>No matter where in the world you want to get married, WeddingWire's directory of international wedding professionals can help you celebrate.</Typography>
                          {/* <Button variant="outlined" sx={{borderColor:'#d9d9d9',color:'#222',textTransform:'none',marginRight:'10%'}}>View all winners<ArrowForwardIcon></ArrowForwardIcon></Button> */}
                       </Grid>}

                        <Grid item xs={1}>
        
                        </Grid>
                     </Grid>
                 </div>
    )
}

export default Planwedding

