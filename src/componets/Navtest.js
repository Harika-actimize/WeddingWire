
import * as React from "react";
import '../App.css';
import Typography from '@mui/material/Typography';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import { Card } from "@material-ui/core";
import { Divider, useMediaQuery, Grid, Box, CardContent, CardMedia, Link, useTheme,Toolbar} from "@mui/material";
import DrawerComp from "./Drawer";



export default function InteractiveList() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
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
              <Typography variant='subtitle1'>Designing</Typography>
              <li><Link href="#" underline="none">Logo Design</Link></li>
              <li><Link href="#" underline="none"> broushure Design</Link></li>
            </ul>
            <ul>
              <Typography variant='subtitle1'>Web Designing</Typography>
              <li><Link href="#" underline="none">Html website</Link></li>
              <li><Link href="#" underline="none">Joomla website</Link></li>
            </ul>
            <ul>
              <Typography variant='subtitle1'>Photography</Typography>
              <li><Link href="#" underline="none">Html Photography</Link></li>
              <li><Link href="#" underline="none">Joomla Photography</Link></li>
             
            </ul>
            <ul>
            <Card sx={{ display: 'flex',maxWidth:330 }}>
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
        sx={{ width: 60 ,height:60}}
        image="https://www.weddingwire.in/assets/img/logos/square-icon.svg"
        alt="Live from space album cover"
      />
    </Card>
            </ul>
          </ul>
          </li>
        <li className="dropdown"><Link href="#" underline="none">WEDDING VENUES</Link>
          <ul className="menu-area">
            <ul>
              <Typography variant='subtitle1'>Our Company</Typography>
              <img src="https://image.shutterstock.com/image-photo/earth-crystal-glass-globe-ball-260nw-1500154991.jpg"></img>
            </ul>
            <ul>
              <Typography variant='subtitle1'>Designing</Typography>
              <li><Link href="#" underline="none">Logo Design</Link></li>
              <li><Link href="#" underline="none"> broushure Design</Link></li>
              <li><Link href="#" underline="none">Template Design</Link></li>
              <li><Link href="#" underline="none">website Design</Link></li>
            </ul>
            <ul>
              <Typography variant='subtitle1'>Web Designing</Typography>
              <li><Link href="#" underline="none">Html website</Link></li>
              <li><Link href="#" underline="none">Joomla website</Link></li>
              <li><Link href="#" underline="none">Wordpress website</Link></li>
              <li><Link href="#" underline="none">Megento website</Link></li>
              <li><Link href="#" underline="none">Blogger Website</Link></li>
            </ul>
            <ul>
              <Typography variant='subtitle1'>Photography</Typography>
              <li><Link href="#" underline="none">Html Photography</Link></li>
              <li><Link href="#" underline="none">Joomla Photography</Link></li>
              <li><Link href="#" underline="none">Wordpress Photography</Link></li>
              <li><Link href="#" underline="none">Megento Photography</Link></li>
              <li><Link href="#" underline="none">Blogger Photography</Link></li>
              <li><Link href="#" underline="none">Html Photography</Link></li>
              <li><Link href="#" underline="none">Joomla Photography</Link></li>
              <li><Link href="#" underline="none">Wordpress Photography</Link></li>
              <li><Link href="#" underline="none">Megento Photography</Link></li>
              <li><Link href="#" underline="none">Blogger Photography</Link></li>
            </ul>
          </ul>
        </li>


        <li><Link href="#" underline="none">WEDDING VENDORS</Link></li>
        <li className="dropdown"><Link href="#" underline="none">BRIDES</Link>
          <ul className="menu-area">
            <ul>
              <Typography variant='subtitle1'>Our Company</Typography>
              <img src="https://image.shutterstock.com/image-photo/earth-crystal-glass-globe-ball-260nw-1500154991.jpg"></img>
            </ul>
            <ul>
              <Typography variant='subtitle1'>Designing</Typography>
              <li><Link href="#" underline="none">Logo Design</Link></li>
              <li><Link href="#" underline="none"> broushure Design</Link></li>
              <li><Link href="#" underline="none">Template Design</Link></li>
              <li><Link href="#" underline="none">website Design</Link></li>
            </ul>
            <ul>
              <Typography variant='subtitle1'>Web Designing</Typography>
              <li><Link href="#" underline="none">Html website</Link></li>
              <li><Link href="#" underline="none">Joomla website</Link></li>
              <li><Link href="#" underline="none">Wordpress website</Link></li>
              <li><Link href="#" underline="none">Megento website</Link></li>
              <li><Link href="#" underline="none">Blogger Website</Link></li>
            </ul>
            <ul>
              <Typography variant='subtitle1'> Photography</Typography>
              <li><Link href="#" underline="none">Html Photography</Link></li>
              <li><Link href="#" underline="none">Joomla Photography</Link></li>
              <li><Link href="#" underline="none">Wordpress Photography</Link></li>
              <li><Link href="#" underline="none">Megento Photography</Link></li>
              <li><Link href="#" underline="none">Blogger Photography</Link></li>
            </ul>
          </ul>
        </li>


        <li className="dropdown"><Link href="#" underline="none">GROOMS</Link>
          <ul className="menu-area">
            <ul>
              <Typography variant='subtitle1'>Our Company</Typography>
              <img src="https://image.shutterstock.com/image-photo/earth-crystal-glass-globe-ball-260nw-1500154991.jpg"></img>
            </ul>
             <ul>
              <Typography variant='subtitle1'> Designing</Typography>
              <li><Link href="#" underline="none">Logo Design</Link></li>
              <li><Link href="#" underline="none"> broushure Design</Link></li>
              <li><Link href="#" underline="none">Template Design</Link></li>
              <li><Link href="#" underline="none">website Design</Link></li>
            </ul>
            <ul>
              <Typography variant='subtitle1'>Web Designing</Typography>
              <li><Link href="#" underline="none">Html website</Link></li>
              <li><Link href="#" underline="none">Joomla website</Link></li>
              <li><Link href="#" underline="none">Wordpress website</Link></li>
              <li><Link href="#" underline="none">Megento website</Link></li>
              <li><Link href="#" underline="none">Blogger Website</Link></li>
            </ul>
            <ul>
              <Typography variant='subtitle1'>Photography</Typography>
              <li><Link href="#" underline="none">Html Photography</Link></li>
              <li><Link href="#" underline="none">Joomla Photography</Link></li>
              <li><Link href="#" underline="none">Wordpress Photography</Link></li>
              <li><Link href="#" underline="none">Megento Photography</Link></li>
              <li><Link href="#" underline="none">Blogger Photography</Link></li>
            </ul> 
          </ul>
        </li>

        <li className="dropdown"><Link href="#" underline="none">BLOGS</Link>
          <ul className="menu-area">
            <ul>
              <Typography variant='subtitle1'>Our Company</Typography>
              <img src="https://image.shutterstock.com/image-photo/earth-crystal-glass-globe-ball-260nw-1500154991.jpg"></img>
            </ul>
            <ul>
              <Typography variant='subtitle1'>Designing</Typography>
              <li><Link href="#" underline="none">Logo Design</Link></li>
              <li><Link href="#" underline="none"> broushure Design</Link></li>
              <li><Link href="#" underline="none">Template Design</Link></li>
              <li><Link href="#" underline="none">website Design</Link></li>
            </ul>
            <ul>
              <Typography variant='subtitle1'>Web Designing</Typography>
              <li><Link href="#" underline="none">Html website</Link></li>
              <li><Link href="#" underline="none">Joomla website</Link></li>
              <li><Link href="#" underline="none">Wordpress website</Link></li>
              <li><Link href="#" underline="none">Megento website</Link></li>
              <li><Link href="#" underline="none">Blogger Website</Link></li>
            </ul>
            <ul>
              <Typography variant='subtitle1'>Photography</Typography>
              <li><Link href="#" underline="none">Html Photography</Link></li>
              <li><Link href="#" underline="none">Joomla Photography</Link></li>
              <li><Link href="#" underline="none">Wordpress Photography</Link></li>
              <li><Link href="#" underline="none">Megento Photography</Link></li>
              <li><Link href="#" underline="none">Blogger Photography</Link></li>
            </ul>
          </ul>
        </li>


        <li><Link href="#" underline="none">COMMUNITY</Link></li>
      </ul>
    </nav>
  </div>
  </div>
  </Grid>

  <Grid item xs={3}>
    <Link href='#' underline='none' sx={{fontSize:'12px', color:'black'}}><WorkOutlineOutlinedIcon sx={{fontSize:'12px', color:'black'}}
    ></WorkOutlineOutlinedIcon> ARE YOU AVENDOR?</Link><br></br> 
<Link href="#" underline="none" sx={{color:'red',fontSize:'12px'}}>LOG IN</Link>
<Link href="#" underline="none" sx={{color:'red',fontSize:'12px',marginLeft:'8px'}}>FREE SIGN UP</Link>

</Grid>
  <Grid item xs={2}>

</Grid> 
  </Grid>
  </>)}
  </Toolbar>
  </React.Fragment>
);
}
