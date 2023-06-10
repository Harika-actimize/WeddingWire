import React from 'react';
import {Card,Grid } from '@mui/material';
import { styled } from '@mui/joy/styles';
import { useMediaQuery} from "@mui/material";
import { useTheme } from "@mui/system";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";


export const Gallary = () => {
    // const Item = styled(Sheet)(({ theme }) => ({
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     backgroundColor:'pink',
    //     color: theme.vars.palette.text.tertiary,
    // }));
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));  

    const cardData = [
        
      { id: 1, image: "https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/block_print_md.jpg", image1:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb_mobile/in/block_print.jpg"},
      { id: 2, image:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/dark_deco_md.jpg" ,image1:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb_mobile/in/dark_deco.jpg"},
      { id: 3, image:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/beloved_floral_md.jpg" ,image1:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb_mobile/in/beloved_floral.jpg"},
      { id: 4, image:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/tangerine_dream_md.jpg",image1:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb_mobile/in/tangerine_dream.jpg"},
  
      { id: 5, image: "https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/midnight_florals_md.jpg",image1:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb_mobile/in/midnight_florals.jpg"},
      { id: 6, image:"https://cdn0.weddingwire.in/website/fotos/templates/259_thumb_md.jpg?v=f1ace",image1:'https://cdn0.weddingwire.in/website/fotos/templates/259_thumb_mobile.jpg?v=f1ace'},
  ];
  return (
    <div>
         <Grid container xs={16} md={12} sx={{width:'100%', justifyContent: 'center',}}>
                     <Grid item xs={18} sx={{display:"contents"}}>
         {matches ? (<>   
         <Swiper
							freeMode={true}
							grabCursor={true}
							modules={[FreeMode]}
							className="mySwiper"
							breakpoints={{
								0: {
									slidesPerView: 1,
									spaceBetween: 10,
								},
                320: {
									slidesPerView: 1,
									spaceBetween: 10,
								},
								480: {
									slidesPerView: 1,
									spaceBetween: 10,
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 15,
								},
								1024: {
									slidesPerView: 3,
									spaceBetween: 15,
								},
								1280: {
									slidesPerView: 4,
									spaceBetween: 20,
								}

							}}
						>
              {cardData.map((item,index) => (
              <SwiperSlide>
    <Card variant="outlined" sx={{ margin: '10px', minHeight: '280px',backgroundColor:'#f8f8f8' }} key={index}>
                <img
                src={item.image}
                style={{height:"285px",width:"300px"}}
                className="galary imgA1 bigimg"
              //   srcSet="assets/img/{item.image}&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
                <img
                src={item.image1}
                style={{height:'180px',width:"100px"}}
                className= "galary imgB1 smallimg"
              //   srcSet="assets/img/{item.image}&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
</Card>
</SwiperSlide>
))}
              
          </Swiper></>):(cardData.map((item,index) => (
    <Card variant="outlined" sx={{margin: '10px', minHeight: '280px',backgroundColor:'#f8f8f8' }} key={index}>
                <img
                src={item.image}
                // style={{height:'250px',width:"300px"}}
                className="bigimg galary imgA1"
              //   srcSet="assets/img/{item.image}&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
                <img
                src={item.image1}
                // style={{height:'180px',width:"100px"}}
                className= "galary imgB1 smallimg"
              //   srcSet="assets/img/{item.image}&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
</Card>
)))}
</Grid>
          </Grid>
         
    </div>
  );
};