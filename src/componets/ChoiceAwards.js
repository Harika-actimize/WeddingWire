import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Grid } from '@mui/material';
import  Stack  from '@mui/material/Stack';
// import { Image } from './ChoiceAwardsStyle';
import  BannerContainer  from '@mui/material/Container';
const ChoiceAwards = () => {
    const data = [
        { id: 1, name: "Violet", image:"https://cdn1.weddingwire.in/assets/svg/original/illustration/search.svg"},
        { id: 2, name: "Indigo", image: "https://cdn1.weddingwire.in/assets/svg/original/illustration/websites.svg" },
        { id: 3, name: "Blue", image: "https://cdn1.weddingwire.in/assets/svg/original/illustration/notebook.svg" },
        { id: 4, name: "Green", image: "https://cdn1.weddingwire.in/assets/svg/original/illustration/lightbulb.svg" },
        { id: 5, name: "Yellow", image: "https://cdn1.weddingwire.in/assets/svg/original/illustration/camera.svg" },
        { id: 6, name: "Orange", image: "https://cdn1.weddingwire.in/assets/svg/original/illustration/chat_bubble.svg" }
      ];
      const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary
      }));
  return (
    <>
      <Grid container spacing={12} columns={18} sx={{justifyContent:'center'}}>
        <Grid item xs={18} sm={18} md={6}>
          <Item
          // sx={{
          //   // display: "flex",
          //   // mx: 20,
          //   // mr: 4,
          //   // flexWrap: "wrap",
          //   "& > :not(style)": {
          //     m: 1,
          //     width: 250,
          //     height: 128
          //   }
          // }}
        >
          {/* <Item
            elevation={3}
            sx={{
              ":hover": {
                boxShadow: 10 // theme.shadows[20]
                
              }
            }}
          > */}
<Typography>Easily Plan Your Wedding</Typography>
<Typography>Get Started<KeyboardArrowRightIcon></KeyboardArrowRightIcon></Typography>
          {/* </Item> */}
        </Item>
        </Grid>
        {data.map((item, index) => {
        //   const bc = `${item.bcolor}`;
        //   console.log("bc", bc);
        return(
        <Grid item xs={6} sm={6} md={2}>
           <Item
                // elevation={3}
              key={item.index}
              sx={{
                // display: "flex",
                // mx: 20,
                // flexWrap: "wrap",
                ":hover": {
                  boxShadow: 20 // theme.shadows[20]
                },
                "& > :not(style)": {
                  m: 1,
                  width: 128,
                  height: 128
                }
              }}
            >
                <img src={item.image} height='70px' width='70px'/> 
               {/* {item.name} */}
                      <Typography variant='h5'>{item.name}</Typography>
              </Item>
        </Grid>
        )
        
        })}
      </Grid>
    </>
  );
};
export default ChoiceAwards;