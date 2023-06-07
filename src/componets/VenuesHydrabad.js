import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WeddingVenues } from './modalData';

function VenuesHydrabad(props) {
    const navigate = useNavigate()
    const goTo = () => {
        navigate(`/${WeddingVenues}/${props.location}`)
    };

    return (
        <div>
               <Grid container spacing={2} columns={10} sx={{marginTop:'40px'}}>
                <Grid item xs={4}>

                </Grid>
                <Grid xs={10} sm={2} sx={{textAlign:'center'}}>
                    <Button onClick={goTo} variant="outlined" sx={{mb:'1.5rem', borderColor:'#d9d9d9',color:'#222',textTransform:'none',width:'max-content',padding: '.69rem 1rem'}}>Discover 389 venues in {props.location}<ArrowForwardIcon></ArrowForwardIcon></Button>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
                 </div>
    )
}

export default VenuesHydrabad
