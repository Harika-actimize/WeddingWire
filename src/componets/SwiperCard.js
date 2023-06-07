import { Icon } from '@iconify/react';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import StarIcon from '@mui/icons-material/Star';
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from "react";
import { useSelector } from "react-redux";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate,useParams } from 'react-router-dom';
import { BridalMakeupArtists, WeddingCatering, WeddingInvitations, WeddingPhotography, WeddingPlanners, WeddingVenues, WeddingDecorator } from "./modalData";


const SwiperCard = ({location,heading}) => {
	const navigate = useNavigate()
	const getData = useSelector((state) => state.homepagedata.data);
	const token = useSelector((state) => state.userData.activeuser) 
// console.log("tokennnnnnnnn",token)
const goTonavigate = (id) => {
	if(token){
		document.getElementById("white_icons-"+id).style.display = "none";
		document.getElementById("red_icon-"+id).style.display = "block";
	}
	else{
		navigate("/login")
	}
  }
  const goToWhiteHeart =(id) =>{
	document.getElementById("white_icons-"+id).style.display = "block";
	document.getElementById("red_icon-"+id).style.display = "none";

  }
  console.log("getData",getData)
	return (
		<>
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
							
							<Box>
							{getData.filter((item)=>(item.cityname.trim().toLowerCase() === location && item.sub_category_name === "WeddingVenue") ).slice(0,4).map((itmes, index) => {									
								// console.log("catdata",itmes);
									return (
										<SwiperSlide key={index}>
											<Card sx={{ maxWidth: 350 }}>
												<CardMedia
													sx={{ height: 200 }}
													image={itmes.main_image}
												/>
											
												<Icon id={"white_icons-"+itmes.id} onClick={()=>goTonavigate(itmes.id)} style={{position: 'absolute',
													color: 'white',
													top: 12,
													right: '5%',
													padding:'0px 8px',
                          							cursor:'pointer',
													transform: 'translateX(-50%)'}} height='22' width='22' icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" />
												<Icon id={"red_icon-"+itmes.id}
												onClick={()=>goToWhiteHeart(itmes.id)}
												style={{position: 'absolute',
												// color: 'red',
												top: 12,
												right: '5%',
												padding:'0px 8px',
												display:'none',
												  cursor:'pointer',
												transform: 'translateX(-50%)'}}
												 height='22' width='22'  icon="noto:red-heart"/>
												{/* <Icon id={"red_icon-"+itmes.id} style={{position: 'absolute',
													color: 'red',
													top: 12,
													right: '5%',
													padding:'0px 8px',
													display:'none',
                          							cursor:'pointer',
													transform: 'translateX(-50%)'}} height='22' width='22' icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" /> */}

												
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
												{(itmes.sub_category_name.toLowerCase() === WeddingDecorator.toLowerCase()||itmes.sub_category_name.toLowerCase() === WeddingInvitations.toLowerCase()||itmes.sub_category_name.toLowerCase() === BridalMakeupArtists.toLowerCase()||itmes.sub_category_name.toLowerCase() === WeddingPlanners.toLowerCase()||itmes.sub_category_name.toLowerCase() === WeddingPhotography.toLowerCase())&&
												<Typography variant='caption' sx={{marginLeft:'15px',marginBottom:'5px'}}>from {itmes.features.package_amount}</Typography>}
												{(itmes.sub_category_name.toLowerCase() === WeddingVenues.toLowerCase()||itmes.sub_category_name.toLowerCase() === WeddingCatering.toLowerCase())&&
												<Typography variant='caption' sx={{marginLeft:'15px',marginBottom:'5px'}}>from {itmes.features.plate_price}   {itmes.features.number_of_guests}</Typography>}
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