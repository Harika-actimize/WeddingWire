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
import { Grid } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import BrunchDiningOutlinedIcon from '@mui/icons-material/BrunchDiningOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
// import theme from "./Theme"
import { ThemeProvider } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
        backgroundColor: red[700],
    },
}));

function LightBox() {
    return (
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
                        <SwiperSlide>
                            <Card sx={{marginBottom:1}} className="avatarimage"  >
                                <CardMedia
                                    image='https://cdn0.weddingwire.in/article/6337/3_2/640/jpg/107336-marriage-dates-2024.webp'
                                     sx={{ height: 200, width:'100%',
                                    ":hover":{
                                        transform: 'scale(1.0)',
                                    }
                                 }}
                                />
                            </Card>
                            <Typography sx={{marginBottom:1}} variant='caption'>BEFORE THE WEDDING</Typography>
                                <Typography sx={{fontFamily:'font-family: ProximaNova,ProximaNova-fallback-Arial,sans-serif',fontWeight:'bold',fontSize:'16px'}}>The Ultimate 2024 Wedding Calendar To Help You Choose Your Marriage Date</Typography>

                        </SwiperSlide>
                        <SwiperSlide>
                        <Card sx={{marginBottom:1}}>
                                <CardMedia
                                    sx={{ height: 200, width:'100%' }}
                                    image='https://cdn0.weddingwire.in/article/7244/3_2/640/jpeg/94427-questions-to-ask-your-venue-the-wedding-design-company-simple-questions.webp'

                                />

                            </Card>
                            <Typography sx={{marginBottom:1}}variant='caption'>PLANNING YOUR WEDDING</Typography>
                                <Typography sx={{fontFamily:'font-family: ProximaNova,ProximaNova-fallback-Arial,sans-serif',fontWeight:'bold',fontSize:'16px'}}>Questions You Should Ask a Wedding Venue Before You Book</Typography>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Card sx={{marginBottom:1}}>
                                <CardMedia
                                    sx={{ height: 200, width:'100%' }}
                                    image='https://cdn0.weddingwire.in/article/8669/3_2/640/jpg/109668-pinterest.webp'

                                />
                            </Card>
                            <Typography sx={{marginBottom:1}} variant='caption'>THE BRIDE</Typography>
                            <Typography sx={{fontFamily:'font-family: ProximaNova,ProximaNova-fallback-Arial,sans-serif',fontWeight:'bold',fontSize:'16px'}}>A Step-by-step Guide to Pick the Right Ring Size & Design for Your Wedding</Typography>
                        </SwiperSlide>
                        <SwiperSlide>
                        <Card sx={{marginBottom:1}}>
                                <CardMedia
                                    sx={{ height: 200, width:'100%' }}
                                    image='https://cdn0.weddingwire.in/article/6622/3_2/640/png/112266-lovedeal-3.webp'

                                />
                            </Card>
                            <Typography sx={{marginBottom:1}} variant='caption'>TIPS FOR MARRIED LIFE</Typography>
                            <Typography sx={{fontFamily:'font-family: ProximaNova,ProximaNova-fallback-Arial,sans-serif',fontWeight:'bold',fontSize:'16px'}}>Meet These 3 Co-preneurs Who Are Redefining the Meaning of 'Life Partners'</Typography>
                        </SwiperSlide>

                    </Swiper>
                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
        </div >
    )
}

export default LightBox




