import React from "react";
import { database, dbRef } from '../firebase';
import { useState, useEffect } from "react";
// import {Card,Button} from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BrowserRouter } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import { getHomePageInitiate } from '../redux/actions/homepageActions';
import { homePageApi } from '../redux/api/homepageApi';
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import { Grid } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import  AiOutlineTag  from "react-icons/bs";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { Icon } from '@iconify/react';



const SwiperCard = ({location,heading}) => {
	const getData = useSelector((state) => state.homepagedata.data);
	return (
		<>
			{/* <Grid container spacing={2} columns={20}>
   <img src='https://cdn1.weddingwire.in/img/badges/2023/badge-weddingawards_en_IN_small.jpg'></img>
		<Typography variant='h5'>Couples’ Choice Awards</Typography>
		<Typography variant='caption'>Explore winners in your area.</Typography>
		</Grid> */}
			<div>
				<Grid columns={20}>
					<Grid item xs={2}>

					</Grid>
					<Grid item xs={20}>
					<Typography variant='h5'sx={{mb:'1.5rem',fontWeight:'700',fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif'}}>{heading}</Typography>
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
								480: {
									slidesPerView: 2,
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
							{/* <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
					   <Box>
				   <Card sx={{backgroundColor:"blue",width:"10%",height:100,mr:5}}><Typography>Easily Plan Your Wedding</Typography></Card>
				   <Card sx={{backgroundColor:"blue",width:"10%",height:100}}><Typography>Easily Plan Your Wedding</Typography></Card>
	</Box> */}

							<Box>
							{getData.filter((item)=>item.cityname.toLowerCase() === location).map((itmes, index) => {									// console.log("catdata",itmes);
									return (
										<SwiperSlide key={index}>
											<Card sx={{ maxWidth: 350 }}>
												<CardMedia
													sx={{ height: 200 }}
													image={itmes.main_image}
												/>
												<Icon style={{position: 'absolute',
													color: 'white',
													top: 12,
													right: '5%',
													padding:'0px 8px',
                          cursor:'pointer',
													transform: 'translateX(-50%)'}} height='22' width='22' icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" />

												
													<Typography sx={{ fontSize: '17px', lineHeight: '27px',marginLeft:'15px',marginBottom:'5px' }} noWrap >{itmes.name}</Typography>
													<Box sx={{display:'flex',marginLeft:'15px',marginBottom:'5px'}}>
													<StarIcon sx={{ color: '#fabb00', fontSize: '18px' }}></StarIcon><Typography variant='caption' >{itmes.star_rating}({itmes.outof})</Typography>
													<Typography variant='caption' noWrap>{itmes.area}.{itmes.cityname}</Typography>					
												</Box>
												<Box sx={{display:'flex',marginLeft:'15px',marginBottom:'5px'}}>
												<LocalOfferOutlinedIcon sx={{fontSize: '18px' }}></LocalOfferOutlinedIcon><Typography variant='caption' >1 promotion</Typography>
												<Typography variant='caption' sx={{ color: '#fabb00'}}>-10%</Typography>
													{/* <AiOutlineTag></AiOutlineTag> */}
												</Box>
												<Typography variant='caption' sx={{marginLeft:'15px',marginBottom:'5px'}}>from{itmes.package_amount}</Typography>
												<Button sx={{
              ":hover": {
                color: '#b5141b',
            },
    borderRadius:' .5rem',
    border: 'none',
    display: 'flex',
    height: '48px',
    padding: '0 2rem 2rem 0',
    cursor: 'pointer',
    lineHeight: 'normal',
    color:'#ff0000',
	textAlign:'left',
    textTransform:'none',
    width:'90%',
    margin:'10% 5% 0 15px',
	justifyContent:'flex-start',
    fontSize:'inherit'
    }}>
        Request pricing
        </Button>
												</Card>
											{/* <Card>
													<img width="640px" variant="top" src={itmes.main_image} />
													<Typography variant="h6">{itmes.name}</Typography>
													<StarIcon></StarIcon><Typography >{itmes.cityname}</Typography>
													<Typography>{itmes.package_amount}</Typography>
												</Card> */}
											{/* <img variant="top" /> */}
										</SwiperSlide>
									)

								})}
							</Box>
						</Swiper>
					</Grid>
					<Grid item xs={2}>

					</Grid>
				</Grid>
			</div>

		</>
	)
}
export default SwiperCard;