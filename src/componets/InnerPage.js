import React from 'react'
import InteractiveList from './Navbar';
import Footer from './Footer';
import Mumbai from './Mumbai';
import { Grid } from '@mui/material';
import InnerPageBanner from './InnerPageBanner';
import Promtions from './Promtions';


export default function Innerpage() {
  return (
    <div>
      {/* <ScrollDialog/> */}
      <InteractiveList />
    <InnerPageBanner/>
      <Grid container columns={20}>
<Grid xs={2}> 

</Grid>
<Grid xs={16} md={16} sm={16}> 
<Mumbai/>
<Promtions/>
</Grid>
<Grid xs={2}> 

</Grid>
      </Grid>
    <Footer/>

    </div>
  )
}
