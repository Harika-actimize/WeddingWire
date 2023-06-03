import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';

export default function MediaControlCard() {
  const theme = useTheme();
  const token = useSelector((state) => state.userData.activeuser) 
  console.log("tokennnnnnnnn",token)
  let user =""
  if (token){
   user = jwt_decode(token);
  }
    console.log("user",user)
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="subtitle1">
            {user.email}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{mt:3}}>
            I WENT TO A WEDDING ON
          </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1,mt:4 }}>
            <Typography sx={{fontWeight:600,marginRight:"1rem"}}>03</Typography>
            <Typography sx={{fontWeight:600,marginRight:"1rem"}}>01</Typography>
            <Typography sx={{fontWeight:600,marginRight:"1rem"}}>2023</Typography>
          {/* <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton> */}
          {/* <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> */}
        </Box>
        </CardContent>

      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151,objectFit:'cover' }}
        image="https://cdn1.weddingwire.in/assets/tools/en_IN/bg_dash-cover.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}