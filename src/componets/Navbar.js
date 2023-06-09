
import * as React from "react";
import '../App.css';
import Typography from '@mui/material/Typography';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { Card } from "@material-ui/core";
import { Divider, useMediaQuery, Grid, Box, CardContent, CardMedia, Link, useTheme,Toolbar} from "@mui/material";
import DrawerComp from "./Drawer";
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import { useNavigate } from 'react-router-dom'
import Couples from './Couples';
import ViewMore from './ViewMore';
import CustomizedMenu from "./Megamenu"
import NavWeddingVenues from "./NavWeddingVenues"
import WeddingVendor from "./WeddingVendor"
import Brides from "./Brides";
import Grooms from "./Grooms";
import Blogs from "./Blogs";

export default function InteractiveList() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate()
const goToVendor = () => {
  navigate("/areyouvendor");

};
const goTosignup =()=>{
  navigate("/signup")
}
const goTologin =()=>{
  navigate("/login")
}
  return (
    <React.Fragment>
       {/* <Toolbar> */}
      <div style={{marginBottom:"10px"}}>
      <Grid container columns={20} sx={{padding:"20px 10px",justifyContent:'space-between'}}>
      {isMatch ?( 
              <>
              <Grid>
                  <PermIdentityIcon onClick={goTosignup} />
                  </Grid>
                  <Grid>
                <img src="https://www.weddingwire.in/assets/img/logos/gen_logoHeader.svg"></img>
                </Grid>
                <Grid>
                <DrawerComp/>
                </Grid>
              </>) :( 
            <>
        <Grid item xs={4}>
          <img src="https://www.weddingwire.in/assets/img/logos/gen_logoHeader.svg"></img>
        </Grid>
            
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={2}>
              <CustomizedMenu />
            </Grid>
            <Grid item xs={2}>
              <NavWeddingVenues />
            </Grid>
            <Grid item xs={2}>
              <WeddingVendor />
            </Grid>
            <Grid item xs={2}>
              <Brides />
            </Grid>
            <Grid item xs={2}>
              <Grooms />
            </Grid>
            <Grid item xs={2} className="hide">
              <Blogs/>
            </Grid>
            </Grid>
        </Grid>
        <Grid item xs={4}>
          <Link href='#' underline='none' sx={{fontSize:'12px', color:'black'}} onClick={goToVendor} ><WorkOutlineOutlinedIcon sx={{fontSize:'12px', color:'black'}}
          ></WorkOutlineOutlinedIcon> ARE YOU AVENDOR?</Link><br></br> 
          <Link href="#" underline="none" onClick={goTologin} sx={{color:'red',fontSize:'12px'}}>LOG IN</Link>
          <Link href="#" underline="none"onClick={goTosignup} sx={{color:'red',fontSize:'12px',marginLeft:'8px'}}>FREE SIGN UP</Link>
        </Grid>
    
             </> )}
             </Grid>
      </div>
      {/* </Toolbar> */}
  </React.Fragment>
);
}
