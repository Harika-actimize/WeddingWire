import React from 'react'
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
import { Grid ,useMediaQuery} from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import BrunchDiningOutlinedIcon from '@mui/icons-material/BrunchDiningOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
// import theme from "./Theme"
import { ThemeProvider } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { BridalMakeupArtists, WeddingCatering, WeddingDecorator, WeddingInvitations, WeddingPhotography, WeddingPlanners, WeddingVenues } from "./modalData";
import { Icon } from '@iconify/react';
import { useTheme } from "@mui/system";


const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(red[500]),
	backgroundColor: red[500],
	'&:hover': {
		backgroundColor: red[700],
	},
}));

function Premium() {
	const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
	const getData = useSelector((state) => state.homepagedata.data);	return (
		<div>
			<Grid container spacing={2} columns={20}>
				<Grid item xs={2}>

				</Grid>
				{ matches ?
				<Grid item xs={19}>
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
						{getData.filter((item)=>item.featured === 'premium').map((itmes, index) => {
								// console.log("catdata",itmes);
								// if (itmes.featured === 'premium') {


									return (
										<SwiperSlide key={index}>
											<Card sx={{ maxWidth: 350}}>
												<CardMedia
													sx={{ height: 200 }}
													image={itmes.main_image}

												/>
												<Button style={{
													position: 'absolute',
													color: 'white',
													top: 12,
													backgroundColor:'red',
													left: '20%',
													padding:'0px 8px',
													transform: 'translateX(-50%)'
												}} >premium</Button>
											<Typography sx={{ fontSize: '20px', lineHeight: '27px', marginLeft: '15px', marginBottom: '5px' }} noWrap>{itmes.name}</Typography>
											<Box sx={{ display: 'flex', marginLeft: '15px', marginBottom: '5px' }}>
												<StarIcon sx={{ color: '#fabb00', fontSize: '18px' }}></StarIcon><Typography variant='caption' >{itmes.star_rating}({itmes.outof})</Typography>
												<Typography variant='caption' noWrap>{itmes.area}.{itmes.cityname}</Typography>
											</Box>
											<Box sx={{ display: 'flex', marginLeft: '15px', marginBottom: '15px' }}>
											{(itmes.sub_category_name.toLowerCase() === WeddingDecorator.toLowerCase()||itmes.sub_category_name.toLowerCase() === WeddingInvitations.toLowerCase()||itmes.sub_category_name.toLowerCase() === BridalMakeupArtists.toLowerCase()||itmes.sub_category_name.toLowerCase() === WeddingPlanners.toLowerCase()||itmes.sub_category_name.toLowerCase() === WeddingPhotography.toLowerCase())&&
												<Box>
                        <Typography variant='caption' sx={{marginLeft:'15px',marginBottom:'5px'}}><Icon icon="bi:database-fill" /> from ₹{itmes.features.package_amount}</Typography></Box>}
												{(itmes.sub_category_name.toLowerCase() === WeddingVenues.toLowerCase()||itmes.sub_category_name.toLowerCase() === WeddingCatering.toLowerCase())&&
												 
                          
                        <Typography variant='caption' sx={{marginLeft:'15px',marginBottom:'5px'}}><Icon icon="streamline:travel-hotel-serving-dome-cook-tool-dome-kitchen-drink-serving-platter-dish-tools-food-cooking" />
                        from ₹{itmes.features.plate_price}  <Icon icon="majesticons:users-line" />  {itmes.features.number_of_guests}</Typography>}
											</Box>
											</Card>
											{/* <Card>
												<img width="640px" variant="top" src={itmes.main_image} />
												<Typography variant="h6">{itmes.name}</Typography>
												<StarIcon></StarIcon><Typography >{itmes.cityname}</Typography>
												<Typography>{itmes.package_amount}</Typography>
											</Card> */}
									{/* <img variant="top" /> */ }
										</SwiperSlide>
									)
								// }

							})}
						</Box>
					</Swiper>
			</Grid> :
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
				{getData.filter((item)=>item.featured === 'premium').map((itmes, index) => {
						// console.log("catdata",itmes);
						// if (itmes.featured === 'premium') {


							return (
								<SwiperSlide key={index}>
									<Card sx={{ maxWidth: 350}}>
										<CardMedia
											sx={{ height: 200 }}
											image={itmes.main_image}

										/>
										<Button style={{
											position: 'absolute',
											color: 'white',
											top: 12,
											backgroundColor:'red',
											left: '20%',
											padding:'0px 8px',
											transform: 'translateX(-50%)'
										}} >premium</Button>
									<Typography sx={{ fontSize: '20px', lineHeight: '27px', marginLeft: '15px', marginBottom: '5px' }} noWrap>{itmes.name}</Typography>
									<Box sx={{ display: 'flex', marginLeft: '15px', marginBottom: '5px' }}>
										<StarIcon sx={{ color: '#fabb00', fontSize: '18px' }}></StarIcon><Typography variant='caption' >{itmes.star_rating}({itmes.outof})</Typography>
										<Typography variant='caption' noWrap>{itmes.area}.{itmes.cityname}</Typography>
									</Box>
									<Box sx={{ display: 'flex', marginLeft: '15px', marginBottom: '15px' }}>
									{(itmes.sub_category_name.toLowerCase() === WeddingDecorator.toLowerCase()||itmes.sub_category_name.toLowerCase() === WeddingInvitations.toLowerCase()||itmes.sub_category_name.toLowerCase() === BridalMakeupArtists.toLowerCase()||itmes.sub_category_name.toLowerCase() === WeddingPlanners.toLowerCase()||itmes.sub_category_name.toLowerCase() === WeddingPhotography.toLowerCase())&&
										<Box>
				<Typography variant='caption' sx={{marginLeft:'15px',marginBottom:'5px'}}><Icon icon="bi:database-fill" /> from ₹{itmes.features.package_amount}</Typography></Box>}
										{(itmes.sub_category_name.toLowerCase() === WeddingVenues.toLowerCase()||itmes.sub_category_name.toLowerCase() === WeddingCatering.toLowerCase())&&
										 
				  
				<Typography variant='caption' sx={{marginLeft:'15px',marginBottom:'5px'}}><Icon icon="streamline:travel-hotel-serving-dome-cook-tool-dome-kitchen-drink-serving-platter-dish-tools-food-cooking" />
				from ₹{itmes.features.plate_price}  <Icon icon="majesticons:users-line" />  {itmes.features.number_of_guests}</Typography>}
									</Box>
									</Card>
									{/* <Card>
										<img width="640px" variant="top" src={itmes.main_image} />
										<Typography variant="h6">{itmes.name}</Typography>
										<StarIcon></StarIcon><Typography >{itmes.cityname}</Typography>
										<Typography>{itmes.package_amount}</Typography>
									</Card> */}
							{/* <img variant="top" /> */ }
								</SwiperSlide>
							)
						// }

					})}
				</Box>
			</Swiper>
	</Grid>}
			<Grid item xs={2}>

			</Grid>
			</Grid>
		</div >
	)
}

export default Premium
