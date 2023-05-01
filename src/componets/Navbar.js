// import React, { useState } from "react";
// import {
//   AppBar,
//   Button,
//   Tab,
//   Tabs,
//   Toolbar,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import "../App.css";
// import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";

// // import TabPanel from '@mui/lab/TabPanel';

// const Header = () => {
//   const [value, setValue] = useState();
//   const theme = useTheme();
//   console.log(theme);
//   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
//   console.log(isMatch);
  

//   return (
//     <React.Fragment>
//       {/* <LinkppBar sx={{ background: "#fff" }}> */}
//         <Toolbar>
//           {/* <DrawerComp /> */}
//           {/* <LinkddBusinessRoundedIcon sx={{ transform: "scale(2)" }} /> */}
//           <img src="https://www.weddingwire.in/assets/img/logos/gen_logoHeader.svg"></img>
//           {isMatch ? (
//             <>
//               {/* <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
//                 Shoppee
//               </Typography> */}
//               <PermIdentityIcon />
//               <DrawerComp />
//             </>
//           ) : (
//             <>
//               <Tabs
//                 sx={{ marginLeft: "auto", color: "black" }}
//                 indicatorColor="secondary"
//                 textColor="inherit"
//                 value={value}
//                 onChange={(e, value) => setValue(value)}
//               >
//                 <Tab label="PLANNING TOOLS" />
//                 <Tab label="WEDDING VENUES" />
//                 <Tab label="WEDDING VENDORS" />
//                 <Tab label="BRIDES" />
//                 <Tab label="GROOMS" />
//                 <Tab label="BLOGS" />
//                 <Tab label="COMMUNITY" />
//               </Tabs>
//               {/* <TabPanel value={value} index={0}>
//                 Item One
//                </TabPanel>
//               <TabPanel value={value} index={1}>
//                 Item Two
//               </TabPanel>
//               <TabPanel value={value} index={2}>
//                 Item Three
//               </TabPanel> */}
//               {/* <Button sx={{ marginLeft: "auto" }} variant="contained">
//                 Login
//               </Button>
//               <Button sx={{ marginLeft: "10px" }} variant="contained">
//                 SignUp
//               </Button> */}
//             </>
//           )}
//         </Toolbar>
//       {/* </AppBar> */}
//     </React.Fragment>
//   );
// };

// export default Header;

// dropdown code sanbox

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
      <Toolbar>
<img src="https://www.weddingwire.in/assets/img/logos/gen_logoHeader.svg"></img>
    {isMatch ?  (
      <>
        <PermIdentityIcon />
        <DrawerComp />
      </>
    ) : ( <>
    <Grid container spacing={5} columns={20}>
      
<Divider></Divider>

        <Grid item xs={2}>

        </Grid>
        <Grid item xs={13}>
    <div className='back'>
    <div className="wrapper">
     
    <nav>
      <ul>
        {/* <li>
<img src='https://www.weddingwire.in/assets/img/logos/gen_logoHeader.svg'></img></li> */}
        <li><Link href="#" underline="none">PLANNING TOOLS</Link>
        <ul className="menu-area">
        <ul>
              <Typography variant='subtitle1'>Plan your wedding</Typography>
              <li><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}><ContentPasteOutlinedIcon sx={{ marginTop:'10px',marginRight:'15px'}}></ContentPasteOutlinedIcon>Checklist</Link></li>
              <li><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}><FactCheckOutlinedIcon sx={{ marginTop:'10px',marginRight:'15px'}}></FactCheckOutlinedIcon> broushure Design</Link></li>
            </ul>
            <ul>
              <li><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}><PeopleAltOutlinedIcon sx={{ marginTop:'40px',marginRight:'15px'}}></PeopleAltOutlinedIcon>Guests</Link></li>
              <li><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}><WebAssetOutlinedIcon sx={{ marginTop:'10px',marginRight:'15px'}}></WebAssetOutlinedIcon>Wedding website</Link></li>
              </ul>
            <ul>
              <li><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}><CalculateOutlinedIcon sx={{ marginTop:'40px',marginRight:'15px'}}></CalculateOutlinedIcon>Guests</Link></li>
              <li><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}><TagOutlinedIcon sx={{ marginTop:'10px',marginRight:'15px'}}></TagOutlinedIcon>Wedding website</Link></li>
             
            </ul>
            <ul>
            <Card style={{ display: 'flex',width:'350px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant='subtitle2'>
            Get the wedding wire App
          </Typography>
          <Typography variant='caption' color="text.secondary" component="div">
          Plan your wedding on the go with the WeddingWire app
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 60 ,height:60,padding:'20px'}}
        image="https://www.weddingwire.in/assets/img/logos/square-icon.svg"
        alt="Live from space album cover"
      />
    </Card>

    <Card style={{ display: 'flex',width:'350px',marginTop:'10px'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant='subtitle2'>
            Wedshorts
          </Typography>
          <Typography variant='caption' color="text.secondary" component="div">
          Easily collect all of your guests' event photos in one album!
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 60 ,height:60,padding:'20px'}}
        image="https://www.weddingwire.in/assets/img/wedshoots/ico_wedshoots.svg"
      />
    </Card>
            </ul>
          </ul>
          </li>
        <li className="dropdown"><Link href="#" underline="none">WEDDING VENUES</Link>
          <ul className="menu-area">
          <ul>
              <Typography variant='subtitle1'>Plan your wedding</Typography>
              <li  style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Banquet Halls</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Marriage Garden</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Wedding Resorts</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Promotions
              </Link></li>
            </ul>
            <ul>
            <li  style={{marginTop:'40px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Hotels</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Kalyana Mandapams</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Wedding Lawns Farmhoues</Link></li>
              </ul>
              <ul></ul>
            <ul>
            <Card style={{ display: 'flex',width:'350px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant='subtitle2'>
          Destination Weddings
          </Typography>
          <Typography variant='caption' color="text.secondary" component="div">
          Easily plan your international wedding.
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 60 ,height:60,padding:'20px'}}
        image="https://cdn1.weddingwire.in/assets/svg/original/illustration/plane_destination.svg"
        alt="Live from space album cover"
      />
    </Card>    
    </ul>
          </ul>
        </li>
        <li><Link href="#" underline="none">WEDDING VENDORS</Link>
        <ul className="menu-area">
        <ul>
              <Typography variant='subtitle1'>Start hiring your vendors</Typography>
              <li><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}><CameraAltOutlinedIcon sx={{ marginTop:'10px',marginRight:'15px'}}></CameraAltOutlinedIcon>Wedding Photographers</Link></li>
              <li><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}><FactCheckOutlinedIcon sx={{ marginTop:'10px',marginRight:'15px'}}></FactCheckOutlinedIcon> Caterers</Link></li>
              <li><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}><CardGiftcardOutlinedIcon sx={{ marginTop:'10px',marginRight:'15px'}}></CardGiftcardOutlinedIcon>Wedding Gifts</Link></li>
            </ul>
            <ul>
              <li><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}><PeopleAltOutlinedIcon sx={{ marginTop:'40px',marginRight:'15px'}}></PeopleAltOutlinedIcon>Wedding Videography</Link></li>
              <li><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}><WebAssetOutlinedIcon sx={{ marginTop:'10px',marginRight:'15px'}}></WebAssetOutlinedIcon>Wedding Transportation</Link></li>
              <li><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}><WebAssetOutlinedIcon sx={{ marginTop:'10px',marginRight:'15px'}}></WebAssetOutlinedIcon>Florists</Link></li>
              </ul>
            <ul>
              <li><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}><CalculateOutlinedIcon sx={{ marginTop:'40px',marginRight:'15px'}}></CalculateOutlinedIcon>Wedding Music</Link></li>
              <li><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}><TagOutlinedIcon sx={{ marginTop:'10px',marginRight:'15px'}}></TagOutlinedIcon>Wedding Invitations</Link></li>
              <li><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}><TagOutlinedIcon sx={{ marginTop:'10px',marginRight:'15px'}}></TagOutlinedIcon>Wedding Planners</Link></li>
            </ul>
            <ul>
            <Card style={{ display: 'flex',width:'350px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant='subtitle2'>
          Destination Weddings
          </Typography>
          <Typography variant='caption' color="text.secondary" component="div">
          Easily plan your international wedding.
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 60 ,height:60,padding:'20px'}}
        image="https://cdn1.weddingwire.in/assets/svg/original/illustration/plane_destination.svg"
        alt="Live from space album cover"
      />
    </Card> 
                </ul>
                <Typography variant='subtitle2'>COMPLETE YOUR WEDDING TEAM</Typography>
          </ul>
        </li>
        <li className="dropdown hide"><Link href="#" underline="none">BRIDES</Link>
          <ul className="menu-area">
          <ul>
              <Typography variant='subtitle1'>Brides</Typography>
              <li  style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Mehndi Artists</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Bridal Makeup Artists</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Makeup Salon</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Promotions
              </Link></li>
            </ul>
            <ul>
            <li  style={{marginTop:'40px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Bridal jewellery</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Bridal Lehenga</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Trousseau Packing</Link></li>
              </ul>
              <ul>
              <Typography variant='subtitle1'>Promotions</Typography>
              </ul>
          </ul>
        </li>


        <li className="dropdown hide"><Link href="#" underline="none">GROOMS</Link>
          <ul className="menu-area">
          <ul>
              <Typography variant='subtitle1'>Couples</Typography>
              <li  style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Sherwani</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>promotions</Link></li>            </ul>

          </ul>
        </li>

        <li className="dropdown"><Link href="#" underline="none">BLOGS</Link>
          <ul className="menu-area">
          <ul>
              <Typography variant='subtitle1'>Wedding inspiration and ideas</Typography>
              <li  style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Before the wedding</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>The wedding ceremony</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>The wedding banquet</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>The services for your wedding</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Wedding fashion</Link></li>

            </ul>
            <ul>
            <li  style={{marginTop:'40px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Health and beauty</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Honeymoon</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>After the wedding</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>The wedding reception</Link></li>
              </ul>
              <ul></ul>
            <ul>
            <Card style={{width:'300px' }}>
      <Box>
      <CardMedia
        component="img"
        sx={{ width: "304px" ,height:"90px"}}
        image="https://www.weddingwire.in/assets/img/components/header/tabs/realweddings_banner.jpg"
        alt="Live from space album cover"
      />

        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant='subtitle2'>
          Real Weddings
          </Typography>
          <Typography variant='caption' color="text.secondary" component="div">
          Find wedding inspiration that fits your style with photos from real couples.
          </Typography>
        </CardContent>
      </Box>
         </Card>    
    </ul>
          </ul>
        </li>


        <li className="hide"><Link href="#" underline="none">COMMUNITY</Link>
        <ul className="menu-area">
          <ul>
              <Typography variant='subtitle1'>Community</Typography>
              <li  style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Gifts and Favours</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Invites and Stationery</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Fitness and Health</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Bachelor & Bachelorette Fun</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Wedding Fashion</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Beauty, Hair & Makeup</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Traditions & Ceremonies</Link></li>
              </ul>
            <ul>
            <li  style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Honeymoon</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Trending Weddings</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Plan a Wedding</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>WeddingWire Tech Support</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Pre-Wedding Functions</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Do It Yourself</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Married Life</Link></li>
            </ul>
            <ul>
            <li  style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Wedding Trivia</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Community Conversations</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Groups by city</Link></li>              
              </ul>
           <ul>
             
             <ul>
             <Typography variant='subtitle1'>ViewTheLatest</Typography>
             <li  style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Discussions</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Photos</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Videos</Link></li>
              <li  style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Members</Link></li>
             </ul>
           </ul>
          </ul>
        </li>

        {/* <li className="dropdown"><Link href="#" underline="none">BLOGS</Link>
          <ul className="menu-area">
          <ul>
              <Typography variant='subtitle1'>Wedding inspiration and ideas</Typography>
              <li  style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Before the wedding</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>The wedding ceremony</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>The wedding banquet</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>The services for your wedding</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Wedding fashion</Link></li>

            </ul>
            <ul>
            <li  style={{marginTop:'40px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Health and beauty</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Honeymoon</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>After the wedding</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>The wedding reception</Link></li>
              </ul>
              <ul></ul>
            <ul>
 
    </ul>
          </ul>
        </li> */}
      </ul>
    </nav>
  </div>
  </div>
  </Grid>

  <Grid item xs={5}>
    <Link href='#' underline='none' sx={{fontSize:'12px', color:'black'}} onClick={goToVendor} ><WorkOutlineOutlinedIcon sx={{fontSize:'12px', color:'black'}}
    ></WorkOutlineOutlinedIcon> ARE YOU AVENDOR?</Link><br></br> 
<Link href="#" underline="none" onClick={goTologin} sx={{color:'red',fontSize:'12px'}}>LOG IN</Link>
<Link href="#" underline="none"onClick={goTosignup} sx={{color:'red',fontSize:'12px',marginLeft:'8px'}}>FREE SIGN UP</Link>

</Grid>
  <Grid item xs={2}>

</Grid> 
  </Grid>
  </>)}
  </Toolbar>
  </React.Fragment>
);
}
