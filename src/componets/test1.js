import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  const token = useSelector((state) => state.userData.activeuser) 
console.log("tokennnnnnnnn",token)
let user =""
if (token){
 user = jwt_decode(token);
}
  console.log("user",user)
  return (
    <Box sx={{marginTop:'10px'}}>
      {user ? (
        <>
        <Grid container spacing={2} columns={20}>
        <Grid item xs={2}>

</Grid>
<Grid item xs={16} sx={{}}>
    <Typography variant='h5'sx={{fontSize:'24px',fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif',fontWeight:'700',marginBottom:'15px'}} >All of your wedding details</Typography>
    <Button variant="outlined" className='hidebutton' sx={{borderColor:'#d9d9d9',color:'#222',textTransform:'none',marginRight:'10%',mb:'15px', float:'right'}}>Planning Tools<ArrowForwardIcon></ArrowForwardIcon></Button>
</Grid>
<Grid item xs={2}>

</Grid>
        <Grid item xs={2}>

        </Grid>
      <Grid item xs={20} sm={20} md={4}>
        <Grid>
      <Item sx={{height:'130px'}}>
        <div>
      <Typography variant='h5'sx={{fontSize:'24px',fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif',fontWeight:'700',marginBottom:'15px'}} >{user.email}</Typography>
</div>
<div>
<img src='https://cdn1.weddingwire.in/assets/tools/en_IN/bg_dash-cover.jpg' style={{height:"130px",width:'153px'}}></img>
</div>
</Item>
</Grid>
        </Grid>

        <Grid item xs={6} sm={6} md={2}>
          <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/notebook.svg'></img>
            <Typography>Wedding Venues</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
        <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/to_do.svg'></img>
          <Typography>Wedding Website</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
        <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/add_guest.svg'></img>
          <Typography>Planning Tools</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
        <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/calculator.svg'></img>
          <Typography>Ideas</Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
        </Grid>
          </Grid>
          {/* <Typography>HARIKA</Typography> */}
          </>
      ):(
        <>
      <Grid container spacing={2} columns={20}>
        <Grid item xs={2}>

        </Grid>
      <Grid item xs={20} sm={20} md={4}>
      <Item sx={{height:'130px'}}>
            <Typography>Easily Plan Your Wedding</Typography>
<Typography sx={{marginTop:'55px',color:'red'}}>Get Started<KeyboardArrowRightIcon sx={{color:'red'}}></KeyboardArrowRightIcon></Typography>
</Item>
        </Grid>

        <Grid item xs={6} sm={6} md={2}>
          <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/search.svg'></img>
            <Typography>Wedding Venues</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
        <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/websites.svg'></img>
          <Typography>Wedding Website</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
        <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/notebook.svg'></img>
          <Typography>Planning Tools</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
        <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/lightbulb.svg'></img>
          <Typography>Ideas</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
        <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/camera.svg'></img>
          <Typography>Real Weddings</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
        <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/chat_bubble.svg'></img>
          <Typography>Community</Typography>
          </Item>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        </Grid>
        </>)}
    </Box>
  );
}