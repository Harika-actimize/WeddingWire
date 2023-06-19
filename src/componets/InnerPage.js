import React from 'react'
import InteractiveList from './Navtest';
import Footer from './Footer';
import Mumbai from './Mumbai';
import { Grid } from '@mui/material';
import Promtions from './Promtions';
import Exclusive from './Exclusive';
import SeeAllPromotions from './SeeAllPromotions';
import Freqentily from './Freqentily';
import Questions from './Questions';
import Innerpagereal from './Innerpagereal';
import Mumbaibydivider from './Mumbaibydivider';
import Zone from './Zone';
import Mumbaibyzone from './Mumbaibyzone';
import { Gallary } from './Gallary';
import CustomImageList from './RealWedding'
import InnerPageBannerRes from './InnerPageBannerRes';
import {useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import InnerAllWedding from './InnerAllWedding';
import Paragraphs from './Paragraphs';

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
const area = [
  {location:"Andheri East",venue_count:10},
  {location:"Juhu",venue_count:10},
  {location:"Vashi",venue_count:10},
  {location:"Mira Road",venue_count:10},
  {location:"Borivali - Kandivali",venue_count:10},
  
]
export default function Innerpage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      {/* <ScrollDialog/> */}
      <InteractiveList />
      <InnerPageBannerRes/>
    {/* <InnerPageBanner/> */}
      <Grid container columns={20}>
<Grid xs={2}> 

</Grid>
{ matches ?
<Grid xs={20} md={16} sm={16}> 
<Mumbai/>
<Promtions/>
<Exclusive/>
<SeeAllPromotions/>
<Paragraphs/>
<Freqentily/>
<Questions/>
{/* <Innerpagereal/> */}
{/* <grid> */}
{/* <Mumbaibyarea/> */}
{/* <CustomImageList/> */}
<Mumbaibydivider location="Wedding vennus in mumbai by area" data={area}/>
{/* <Zone/> */}
<Mumbaibyzone location="Wedding vennus in mumbai by zone" data={data}/>
<InnerAllWedding heading="Other vendors in Mumbai for your wedding"/>
</Grid> :
<Grid xs={18} md={16} sm={16}> 
<Mumbai/>
<Promtions/>
<Exclusive/>
<SeeAllPromotions/>
<Paragraphs/>
<Freqentily/>
<Questions/>
<Innerpagereal/>
{/* <grid> */}
{/* <Mumbaibyarea/> */}
{/* <CustomImageList/> */}
<Mumbaibydivider location="Wedding vennus in mumbai by area" data={area}/>
{/* <Zone/> */}
<Mumbaibyzone location="Wedding vennus in mumbai by zone" data={data}/>
<InnerAllWedding heading="Other vendors in Mumbai for your wedding"/>
</Grid>}

<Grid xs={2}> 

</Grid>
      </Grid>

    <Footer/>

    </div>
  )
}
