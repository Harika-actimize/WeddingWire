import React from 'react'
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom'


function VenuesMumbai() {
    const navigate = useNavigate()
const goToMumbai = () => {
  navigate("/weddingvenues/mumbai");

};

    return (
        <div>
            <Grid container spacing={2} columns={10} sx={{marginTop:'40px'}}>
                <Grid item xs={4}>

                </Grid>
                <Grid xs={10} sm={2} sx={{textAlign:'center'}}>
                    <Button onClick={goToMumbai} variant="outlined" sx={{mb:'1.5rem', padding: '.69rem 1rem', borderColor:'#d9d9d9',color:'#222',textTransform:'none',width:'max-content'}}>Discover 851 venues in Mumbai<ArrowForwardIcon></ArrowForwardIcon></Button>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>

        </div>
    )
}

export default VenuesMumbai
