import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from '@material-ui/core/styles';
import theme from "./Theme"
import {ThemeProvider} from "@material-ui/core";
import { red } from '@mui/material/colors';
import {  Link } from "react-router-dom";
import { Box, Button, styled, Typography } from "@mui/material";
import { Icon } from '@iconify/react';


// import heroImg from "../media/hero_illustration.png";
// import CustomButton from "./CustomButton";

const Banner = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "white",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  }));


  return ( 
    <ThemeProvider theme={theme}>
    <Box sx={{ backgroundImage: `url(https://www.weddingwire.in/assets/img/admin-emp/bg_access-header.jpg)`,backgroundSize:'cover',backgroundPosition:'center',
    maxWidth:'1200px',minWidth:'950px',margin:'auto',display:'block' }}
    // sx={{ backgroundImage: "#E6F0FF", minHeight: "80vh" }}
    >
      <Container>
        {/* <Navbar /> */}
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                webkitFontSmoothing:'antialiased',
                fontFamily:'Merriweather,"Times New Roman",Times,serif',
                fontSize: "30px",
                color: "white",
                lineHeight:'42px',
                fontWeight: "700",
                pt: 6,
                mb: '20px',
              }}
            >
            Grow your business with WeddingWire!

            </Typography>
            <Box sx={{display:'flex'}}>
            <Icon icon="ic:baseline-check" color="#48964d" width="22" height="22" />
             <Typography

              sx={{ fontSize:'18px',color:'#fff',margin:'0 0 10px',lineHeight:'26px',paddingLeft:1}}>
             Showcase your services on our industry leading site!
            </Typography>
       </Box>
       <Box sx={{display:'flex'}}>
            <Icon icon="ic:baseline-check" color="#48964d" width="22" height="22" />
             <Typography

              sx={{ fontSize:'18px',color:'#fff',margin:'0 0 10px',lineHeight:'26px',paddingLeft:1}}>
 Reach local engaged couples and book more weddings.
            </Typography>
       </Box>
       <Box sx={{display:'flex'}}>
            <Icon icon="ic:baseline-check" color="#48964d" width="22" height="22" />
             <Typography

              sx={{ fontSize:'18px',color:'#fff',margin:'0 0 10px',lineHeight:'26px',paddingLeft:1}}>
 Trusted by over 71,000 professionals
            </Typography>
       </Box>
          
          
            <Link  to="/findevent" 
              
                >
               <ColorButton  sx={{ my: 7}}
              type="submit"
            //   fullWidth
            backgroundColor="red"
              variant="contained"
            //   size="large"
            
            //   className={classes.btngoggle}
            >
          Find your next event
            </ColorButton>
                </Link>
         
          </Box>

         
        </CustomBox>
      </Container>
    </Box>
    </ThemeProvider>
  );
};

export default Banner;