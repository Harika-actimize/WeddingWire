import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{marginTop:'10px'}}>
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
    </Box>
  );
}