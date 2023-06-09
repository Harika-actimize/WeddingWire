import React from 'react'
import Footer from './Footer';
import Mumbaibyzone from './Mumbaibyzone';
import InteractiveList from './Navtest';
import { Grid ,useMediaQuery} from '@mui/material';
import Questions from './Questions';
import InnerpageQuetions from './InnerpageQuetions';
import InnerPageBanner from './InnerPageBanner';
import Location from './Location';
import Banner from './Banner'
import Bannerresponsive from './Bannerresponsive';
import SmallBanner from './SmallBanner';
import SwiperCard from './SwiperCard';
import VenuesHydrabad from './VenuesHydrabad';
import VenuesBanglore from './VenuesBanglore';
import VenuesMumbai from './VenuesMumbai';
import VenuesChennai from './VenuesChennai';
import Innerpaper from './Innerpaper';
import Promtions from './Promtions';
import InnerExclusive from './InnerExclusive';
import SeeAllPromotions from './SeeAllPromotions';
import Factors from './Factors';
import Nearyou from './Nearyou';
import InnerAllWedding from './InnerAllWedding';
// import Paragraphs from './Paragraphs';
import { useParams } from 'react-router-dom';
import InnerPageBannerRes from './InnerPageBannerRes';
import { useTheme } from "@mui/system";



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
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const param = useParams()
    // console.log(param)
    return (
        <div>
            <InteractiveList/>
<InnerPageBannerRes/>

            <Grid container columns={20}>
<Grid xs={2}> 

</Grid>
{ matches ?
<Grid xs={19} md={19} sm={19}> 
<Location/>
<SmallBanner/>
<SwiperCard location="hyderabad" heading="Venues in Hyderabad"/>
<VenuesHydrabad category={param.sub_category_name} location ={"Hyderabad"}/>
<SwiperCard location="bangalore" heading="Venues in Bangalore"/>
<VenuesHydrabad category = {param.sub_category_name} location ={"Bangalore"}/>
<SwiperCard location = "mumbai" heading="Venues in Mumbai" />
<VenuesHydrabad category = {param.sub_category_name} location ={"Mumbai"}/>
<SwiperCard location = "chennai" heading="Venues in Chennai"/>
<VenuesHydrabad category = {param.sub_category_name} location ={"Chennai"}/>
<Innerpaper/>
<Promtions/>
<InnerExclusive/>
<SeeAllPromotions/>
{/* <Paragraphs/> */}
<Factors/>
<Nearyou/>
<InnerpageQuetions/>
<Mumbaibyzone location="Wedding vennus in mumbai by zone" data={data}/>
<InnerAllWedding heading="All wedding vendors"/>
</Grid>:
<Grid xs={16} md={16} sm={16}> 
<Location/>
<SmallBanner/>
<SwiperCard location="hyderabad" heading="Venues in Hyderabad"/>
<VenuesHydrabad category={param.sub_category_name} location ={"Hyderabad"}/>
<SwiperCard location="bangalore" heading="Venues in Bangalore"/>
<VenuesHydrabad category = {param.sub_category_name} location ={"Bangalore"}/>
<SwiperCard location = "mumbai" heading="Venues in Mumbai" />
<VenuesHydrabad category = {param.sub_category_name} location ={"Mumbai"}/>
<SwiperCard location = "chennai" heading="Venues in Chennai"/>
<VenuesHydrabad category = {param.sub_category_name} location ={"Chennai"}/>
<Innerpaper/>
<Promtions/>
<InnerExclusive/>
<SeeAllPromotions/>
{/* <Paragraphs/> */}
<Factors/>
<Nearyou/>
<InnerpageQuetions/>
<Mumbaibyzone location="Wedding vennus in mumbai by zone" data={data}/>
<InnerAllWedding heading="All wedding vendors"/>
</Grid>}


<Grid xs={2}> 

</Grid>
      </Grid>
                  <Footer/>
            
        </div>
    )
}

export default Innerpagevennues
