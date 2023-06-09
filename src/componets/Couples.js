import React from 'react'
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Icon } from '@iconify/react';
function Couples() {
    return (
        <div>
            <Grid container spacing={2} columns={20} sx={{marginTop:'40px'}}>
                <Grid item xs={2}>

                </Grid>
                <Grid sx={{marginLeft:'16px'}}>
                    <img src='https://cdn1.weddingwire.in/img/badges/2023/badge-weddingawards_en_IN_small.jpg' height='88px' width='88px'></img>
                </Grid>
                <Grid item xs={16} sx={{}}>
                    <Typography variant='h5'sx={{fontSize:'24px',fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif',fontWeight:'700',marginBottom:'20px'}} >Couples’ Choice Awards</Typography>
                    <Typography variant='caption' sx={{fontFamily:'ProximaNova,ProximaNova-fallback-Arial,sans-serif'}}>Explore winners in your area.</Typography>
                    <Button variant="outlined" className='hidebutton' sx={{borderColor:'#d9d9d9',color:'#222',textTransform:'none',marginRight:'10%',mb:'15px', float:'right'}}>View all winners<Icon icon="tabler:arrow-up" width="24" height="24" rotate={1} /></Button>
                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
        </div>
    )
}

export default Couples
