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


const Homepage = () => {
	const homepagedata = useSelector((state) => state.homepagedata.data?.data);
	console.log('homepagedata', homepagedata);
	
	const getData = [];
	for (let key in homepagedata) {
		getData.push({ id: key, ...homepagedata[key] });
	}
	console.log('getData', getData);


	return (
		<>
			{/* <Grid container spacing={2} columns={20}>
   <img src='https://cdn1.weddingwire.in/img/badges/2023/badge-weddingawards_en_IN_small.jpg'></img>
		<Typography variant='h5'>Couples’ Choice Awards</Typography>
		<Typography variant='caption'>Explore winners in your area.</Typography>
		</Grid> */}
			<div>
				<Grid container spacing={2} columns={20}>
					<Grid item xs={2}>

					</Grid>
					<Grid item xs={16}>
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
							{getData.filter((item)=>item.featured !== 'premium').map((itmes, index) => {
									// console.log("catdata",itmes);
									return (
										<SwiperSlide key={index}>
											<Card sx={{ maxWidth: 350 }}>
												<CardMedia
													sx={{ height: 200 }}
													image={itmes.main_image}

												/>
												
													<Typography sx={{ fontSize: '17px', lineHeight: '27px',marginLeft:'15px',marginBottom:'5px' }}>{itmes.name}</Typography>
													<Box sx={{display:'flex',marginLeft:'15px',marginBottom:'5px'}}>
													<StarIcon sx={{ color: '#fabb00', fontSize: '18px' }}></StarIcon><Typography variant='caption' >{itmes.star_rating}({itmes.outof})</Typography>
													<Typography variant='caption'>{itmes.area}.{itmes.cityname}</Typography>					
												</Box>
												<Box sx={{display:'flex',marginLeft:'15px',marginBottom:'5px'}}>
												<LocalOfferOutlinedIcon sx={{fontSize: '18px' }}></LocalOfferOutlinedIcon><Typography variant='caption' >1 promotion</Typography>
												<Typography variant='caption' sx={{ color: '#fabb00'}}>-10%</Typography>
													{/* <AiOutlineTag></AiOutlineTag> */}
												</Box>
												<Typography variant='caption' sx={{marginLeft:'15px',marginBottom:'5px'}}>from{itmes.package_amount}</Typography>
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
export default Homepage;