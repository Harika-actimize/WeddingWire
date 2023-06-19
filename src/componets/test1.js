import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import Button from '@mui/material/Button';
import MediaControlCard from './Card';
import Test from './Test2';
import {useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const token = useSelector((state) => state.userData.activeuser) 
// console.log("tokennnnnnnnn",token)
let user =""
if (token){
 user = jwt_decode(token);
}
  // console.log("user",user)
  return (
    <Box sx={{marginTop:'10px'}}>
      {user ? (
        <>
        <Grid container spacing={2} columns={20} >
        <Grid item xs={2}>

</Grid>
<Grid item xs={16}>
    <Typography variant='h5'sx={{fontSize:'24px',fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif',fontWeight:'700',marginBottom:'15px'}} >All of your wedding details</Typography>
    <Button variant="outlined" className='hidebutton' sx={{borderColor:'#d9d9d9',color:'#222',textTransform:'none',marginRight:'10%',mb:'15px', float:'right'}}>Planning Tools<Icon icon="tabler:arrow-up" width="24" height="24" rotate={1} /></Button>
</Grid>
<Grid item xs={2}>

</Grid>
</Grid>
<Grid container spacing={2} columns={20}>
        <Grid item xs={2}>

        </Grid>
      {/* <Grid item xs={16} sm={16} md={5}> */}
        <MediaControlCard/>
          {/* <div className ="homeToo">
                        <span className="homeToo_content">
              <span className="homeToo_title">{user.email}</span>
              <span className="homeToo_sub">I Went to a wedding on</span>

            </span>
            <span className="homeTooimage">
            <a>
              <img style={{borderRadius: '0 .5rem .5rem 0'}} src="https://cdn1.weddingwire.in/assets/tools/en_IN/bg_dash-cover.jpg" height="153"></img>
            </a>
            </span>

          </div> */}
{/* <Typography variant='h5'sx={{fontSize:'24px',fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif',fontWeight:'700',marginBottom:'15px'}} >{user.email}</Typography> */}

  {/* </Grid> */}

        <Grid item xs={8} sm={6} md={2} className="columngrid">
          <Item sx={{height:'150px'}} >
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/notebook.svg' height="70px" width="70px"></img>
            <Typography sx={{color:"black"}}>0 of 18</Typography>
            <Typography>Services hired</Typography>
          </Item>
        </Grid>
        <Grid item xs={8} sm={8} md={2}>
        <Item sx={{height:'150px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/to_do.svg' height="70px" width="70px"></img>
          <Typography sx={{color:"black"}}>0 of 112</Typography>
          <Typography>Tasks Completed</Typography>
          </Item>
        </Grid>
        <Grid item xs={8} sm={8} md={2} className="columngrid">
        <Item sx={{height:'150px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/add_guest.svg' height="70px" width="70px"></img>
          <Typography sx={{color:"black"}}>0 of 2</Typography>
          <Typography>Guests attending</Typography>
          </Item>
        </Grid>
        <Grid item xs={8} sm={8} md={2}>
        <Item sx={{height:'150px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/calculator.svg' height="70px" width="70px"></img>
          <Typography sx={{color:"black"}}>₹0</Typography>
          <Typography>Budget spent</Typography>
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
        {matches ? <Test/> :
        <>
      <Grid item xs={20} sm={20} md={4}>
      <Item sx={{height:'130px'}}>
            <Typography>Easily Plan Your Wedding</Typography>
<Typography sx={{marginTop:'55px',color:'red', fontSize:"16px"}}>Get Started<Icon icon="ep:arrow-up" color="red" rotate={1} style={{marginLeft:"7px"}} /></Typography>
</Item>
        </Grid>
        
        <Grid item xs={6} sm={6} md={2}>
          <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/search.svg' height="70px" width="70px"></img>
            <Typography sx={{fontSize:'13px'}}>Wedding Venues</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
        <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/websites.svg' height="70px" width="70px"></img>
          <Typography sx={{fontSize:'13px'}}>Wedding Website</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
        <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/notebook.svg' height="70px" width="70px"></img>
          <Typography sx={{fontSize:'13px'}}>Planning Tools</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
        <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/lightbulb.svg' height="70px" width="70px"></img>
          <Typography sx={{fontSize:'13px'}}>Ideas</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
        <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/camera.svg' height="70px" width="70px"></img>
          <Typography sx={{fontSize:'13px'}}>Real Weddings</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
        <Item sx={{height:'130px'}}>
            <img src='https://cdn1.weddingwire.in/assets/svg/original/illustration/chat_bubble.svg'height="70px" width="70px" ></img>
          <Typography sx={{fontSize:'13px'}}>Community</Typography>
          </Item>
        </Grid>
        </>}
      <Grid item xs={2}>
        </Grid>
        </Grid>
        </>)}
    </Box>
  );
}

