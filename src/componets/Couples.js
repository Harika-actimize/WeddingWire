import React from 'react'
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Couples() {
    return (
        <div>
            <Grid container spacing={2} columns={10} sx={{marginTop:'40px'}}>
                <Grid item xs={1}>

                </Grid>
                <Grid sx={{marginLeft:'16px'}}>
                    <img src='https://cdn1.weddingwire.in/img/badges/2023/badge-weddingawards_en_IN_small.jpg' height='88px' width='88px'></img>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='h5'sx={{fontSize:'24px',fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif',fontWeight:'400',marginBottom:'20px'}} >Couples’ Choice Awards</Typography>
                    <Typography variant='caption' sx={{fontFamily:'ProximaNova,ProximaNova-fallback-Arial,sans-serif'}}>Explore winners in your area.</Typography>
                    <Button variant="outlined" className='hidebutton' sx={{borderColor:'#d9d9d9',color:'#222',textTransform:'none',marginRight:'10%',float:'right'}}>View all winners<ArrowForwardIcon></ArrowForwardIcon></Button>
                </Grid>
                <Grid item xs={1}>

                </Grid>
            </Grid>
        </div>
    )
}

export default Couples
