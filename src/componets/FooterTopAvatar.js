import React from 'react'
import { Divider,Chip,Grid,Typography } from '@mui/material'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';


function FooterTopAvatar() {
  return (
    <div>
        <Grid item xs={2}>

</Grid>
<Grid item xs={20}>
    <Divider>
    <Chip label={<Person3OutlinedIcon></Person3OutlinedIcon>}></Chip>
    </Divider>
</Grid>
<Grid item xs={5}>

</Grid>
<Grid item xs={20} md={20} lg={10}>
    <Typography sx={{textAlign:'center',fontWeight:400,fontSize:'20px',marginBottom:'10px'}}>Contact a Wedding Expert for Free</Typography>
    <Typography variant='inherit' sx={{textAlign:'center',marginBottom:'10px'}}>We'd love to assist you! 7 days a week from 9am to 8pm</Typography>
    <Typography sx={{color:'red',textAlign:'center',fontSize:'16px'}}><LocalPhoneOutlinedIcon sx={{color:'red'}}></LocalPhoneOutlinedIcon> Call991-050-2284</Typography>
</Grid>
<Grid item xs={5}>

</Grid>
    </div>
  )
}

export default FooterTopAvatar