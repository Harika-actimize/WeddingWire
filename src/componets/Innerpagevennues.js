import React from 'react'
import Footer from './Footer';
import Mumbaibyzone from './Mumbaibyzone';
import InteractiveList from './Navbar';
import { Grid } from '@mui/material';
import Questions from './Questions';
import InnerpageQuetions from './InnerpageQuetions';

const data = [
    {location:"Andheri East",venue_count:10},
    {location:"Juhu",venue_count:10},
    {location:"Vashi",venue_count:10},
    {location:"Mira Road",venue_count:10},
    {location:"Borivali - Kandivali",venue_count:10},
    {location:"Andheri West",venue_count:10},
    {location:"Thane West",venue_count:10},
    {location:"Malad",venue_count:10},
    {location:"Chembur",venue_count:10},
    {location:"Panvel",venue_count:10},
    {location:"Ghodbunder Road",venue_count:10},
    {location:"Mumbai Central - Byculla",venue_count:10},
    {location:"Colaba",venue_count:10},
    {location:"Bandra",venue_count:10},
    {location:"Vasai-Virar",venue_count:10},
    {location:"Powai",venue_count:10},
    {location:"Thane East",venue_count:10},
    {location:"Dadar",venue_count:10},
    {location:"Goregaon",venue_count:10},
    {location:"Kalyan",venue_count:10},
    {location:"Kharghar",venue_count:10},
    {location:"Malad West",venue_count:10},
    {location:"Andheri East",venue_count:10},
    {location:"Juhu",venue_count:10},
    {location:"Vashi",venue_count:10},
    {location:"Mira Road",venue_count:10},
    {location:"Borivali - Kandivali",venue_count:10},
    {location:"Andheri West",venue_count:10},
    {location:"Thane West",venue_count:10},
    {location:"Malad",venue_count:10},
    {location:"Chembur",venue_count:10},
    {location:"Panvel",venue_count:10},
    {location:"Ghodbunder Road",venue_count:10},
    {location:"Mumbai Central - Byculla",venue_count:10},
    {location:"Colaba",venue_count:10},
    {location:"Bandra",venue_count:10},
    {location:"Vasai-Virar",venue_count:10},
    {location:"Powai",venue_count:10},
    {location:"Thane East",venue_count:10},
    {location:"Dadar",venue_count:10},
    {location:"Goregaon",venue_count:10},
    {location:"Kalyan",venue_count:10},
    {location:"Kharghar",venue_count:10},
    {location:"Malad West",venue_count:10},
  ]
function Innerpagevennues() {
    return (
        <div>
            <InteractiveList/>
            <Grid container columns={20}>
<Grid xs={2}> 

</Grid>
<Grid xs={16} md={16} sm={16}> 
<InnerpageQuetions/>
<Mumbaibyzone location="Wedding vennus in mumbai by zone" data={data}/>
</Grid>

<Grid xs={2}> 

</Grid>
      </Grid>
                  <Footer/>
            
        </div>
    )
}

export default Innerpagevennues
