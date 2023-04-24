import { Typography } from '@mui/material'
import React from 'react'
import {useLocation} from 'react-router-dom';

export default function Welcomepage({...props}) {
  console.log("props",props)
  const { state } = useLocation();
  console.log(state,"WELCOME");
  
  return (
    <>
    <Typography variant="h2" gutterBottom>
        Welcomepage
      </Typography>
      <Typography variant="h2" gutterBottom>
      {state}
    </Typography>
    <Typography variant="h2" gutterBottom>
   
  </Typography>
  </>
  )
}
