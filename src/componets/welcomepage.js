import { Typography } from '@mui/material'
import React from 'react'
import {useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Welcomepage({...props}) {
  const user = useSelector((state)=>state.userData.activeuser)
  // console.log(user,"WELCOME");
  
  return (
    <>
    <Typography variant="h2" gutterBottom>
        Welcomepage
      </Typography>
      <Typography variant="h2" gutterBottom>
      {user&&user.email}
    </Typography>
    <Typography variant="h2" gutterBottom>
   
  </Typography>
  </>
  )
}
