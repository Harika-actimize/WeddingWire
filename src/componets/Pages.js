import React from 'react'
import Homepage from './Homepage';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ChoiceAwards from './ChoiceAwards';
import InteractiveList from './Navbar';
import Banner from './Banner';
import Premium from './Premium';
import ColumnsGrid from './test1';
import Couples from './Couples';
import Featured from './Featured';
import BasicButPtons from './peper';
import CustomImageList from './RealWedding'
import RealGrid from './RealGrid';
import ViewMore from './ViewMore';
import WeddingTips from './WeddingTips';
import WeddingAvatar from './WeddingAvatar';
import LightBox from './LightBox';
import AllArticles from './AllArticles';
import Community from './Community';
import CommunityCard from './CommunityCard';
import {Gallary} from './Gallary';
import Discussion from './Discussion';
import WeddingWebsite from './WeddingWebsite';
import Designs from './Designs';
import Planwedding from './Planwedding';
import Weddingplan from './Weddingplan';
import Seeall from './Seeall';
import Footer from './Footer';
import ScrollDialog from './test'
import FooterTop from './FooterTop';
import {useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import Bannerresponsive from './Bannerresponsive';

export default function Pages() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <div>
      {/* <ScrollDialog/> */}
      <InteractiveList />
      {matches ? (<>
          <Bannerresponsive/>
      </>):(<>
        <Banner />
      </>)}
      <ColumnsGrid/>
      <Couples/>
            <Homepage />
            <Featured/>
            <Premium/>
            <BasicButPtons/>
            <RealGrid/>
            <CustomImageList/>
            <ViewMore/>
            <WeddingTips/>
            <WeddingAvatar/>
            <LightBox/>
            <AllArticles/>
            <Community/>
            <CommunityCard/>
            <Discussion/>
            <WeddingWebsite/>
            {/* <Gallary/> */}
            <Designs/>
            <Planwedding/>
            <Weddingplan/>
            <Seeall/>
            <FooterTop/>
            <Footer/>

    </div>
  )
}
