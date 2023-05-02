import { Box, Typography } from '@mui/material'
import React from 'react'
import { Grid } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function CommunityCard() {
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
                            <Box sx={{
                                ":hover": {
                                    top: '-10px',
                                    boxShadow: 5,
                                }, position: 'relative', height: 150, top: 0, transition: 'top ease 0.5s', color: ' #6c6c6c', boxShadow: ' 0 2px 8px #00000026', borderRadius: '.5rem', padding: ' 1.5rem', flex: 1
                            }}>
                                <CardContent>
                                    <Typography sx={{ fontWeight: 'bold', color: 'black' }}>
                                        Please help in selecting our hashtag </Typography>
                                    <Typography variant='caption'> Please help choosing our hashtag, our name are Aagam & Sakshi</Typography>
                                </CardContent>
                            </Box>
                            <Box sx={{ display: 'flex', marginTop: 2 }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="../avatarcom.webp"
                                    sx={{ width: 56, height: 56 }}
                                />
                                <Box>
                                <Typography sx={{ marginLeft: '10px', fontFamily: 'font-family: ProximaNova,ProximaNova-fallback-Arial,sans-serif', fontWeight: 'bold', fontSize: '16px' }}>AaGaM</Typography>
                                <Typography variant='caption' sx={{marginLeft:'10px'}}>The 30 March, 2023 at 17:38</Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{
                                ":hover": {
                                    top: '-10px',
                                    boxShadow: 5,
                                }, position: 'relative', height: 150, top: 0, transition: 'top ease 0.5s', color: ' #6c6c6c', boxShadow: ' 0 2px 8px #00000026', borderRadius: '.5rem', padding: ' 1.5rem', flex: 1
                            }}>
                                <CardContent>
                                    <Typography sx={{ fontWeight: 'bold', color: 'black' }}>
                                        Hashtag suggestions pleeeeeeeeeeease </Typography>
                                    <Typography variant='caption'>Hi all, desperately (yes, that’s right) seeking for some fun, cute hashtags for the wedding.</Typography>
                                </CardContent>
                            </Box>

                            <Box sx={{ display: 'flex', marginTop: 2 }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="../avatarcom1.webp"
                                    sx={{ width: 56, height: 56 }}
                                />
                                <Box>
                                <Typography sx={{ marginLeft: '10px', fontFamily: 'font-family: ProximaNova,ProximaNova-fallback-Arial,sans-serif', fontWeight: 'bold', fontSize: '16px' }}>Sailee</Typography>
                                <Typography variant='caption' sx={{marginLeft:'10px'}}>The 30 March, 2023 at 17:38</Typography>
                            </Box>    
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{
                                ":hover": {
                                    top: '-10px',
                                    boxShadow: 5,
                                }, position: 'relative', height: 150, top: 0, transition: 'top ease 0.5s', color: ' #6c6c6c', boxShadow: ' 0 2px 8px #00000026', borderRadius: '.5rem', padding: ' 1.5rem', flex: 1
                            }}>
                                <CardContent>
                                    <Typography sx={{ fontWeight: 'bold', color: 'black' }}>
                                        Hashtag for Sagar and Manveen </Typography>
                                    <Typography variant='caption'>Hi! Please help with Hashtag Bride - Manveen Groom - Sagar We are looking for something urgently</Typography>
                                </CardContent>
                            </Box>
                            <Box sx={{ display: 'flex', marginTop: 2 }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="../avatarcom2.webp"
                                    sx={{ width: 56, height: 56 }}
                                />
                                <Box>
                                <Typography sx={{ marginLeft: '10px', fontFamily: 'font-family: ProximaNova,ProximaNova-fallback-Arial,sans-serif', fontWeight: 'bold', fontSize: '16px' }}>Riya</Typography>
                                <Typography variant='caption' sx={{marginLeft:'10px'}}>The 30 March, 2023 at 17:38</Typography>
                                    </Box>           
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{
                                ":hover": {
                                    top: '-10px',
                                    boxShadow: 5,
                                }, position: 'relative', height: 150, top: 0, transition: 'top ease 0.5s', color: ' #6c6c6c', boxShadow: ' 0 2px 8px #00000026', borderRadius: '.5rem', padding: ' 1.5rem', flex: 1
                            }}>
                                <CardContent>
                                    <Typography sx={{ fontWeight: 'bold', color: 'black' }}>
                                        Hashtag </Typography>
                                    <Typography variant='caption'> Please suggest some classy or funny hashtags for names :Shreya and Vivek</Typography>
                                </CardContent>
                            </Box>
                            <Box sx={{ display: 'flex', marginTop: 2 }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="../avatarcom3.webp"
                                    sx={{ width: 56, height: 56 }}
                                />
                                <Box>
                                <Typography sx={{ marginLeft: '10px', fontFamily: 'font-family: ProximaNova,ProximaNova-fallback-Arial,sans-serif', fontWeight: 'bold', fontSize: '16px' }}>Manali</Typography>
                                <Typography variant='caption' sx={{marginLeft:'10px'}}>The 30 March, 2023 at 17:38</Typography>
                                  </Box>     
                            </Box>
                        </SwiperSlide>

                    </Swiper>
                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
        </div>
    )
}

export default CommunityCard

    //   <Box sx={{ display: "flex", flexDirection: "row" }}>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         // mx: 20,
    //         mr: 4,
    //         flexWrap: "wrap",
    //         "& > :not(style)": {
    //           m: 1,
    //           width: 128,
    //           height: 128
    //         }
    //       }}
    //     >
    //       <Item
    //         elevation={3}
    //         sx={{
    //           ":hover": {
    //             boxShadow: 20 // theme.shadows[20]
    //           }
    //         }}
    //       >
    //         White Light
    //       </Item>
    //     </Box>
    //     {data.map((item, index) => {
    //       const bc = `${item.bcolor}`;
    //       console.log("bc", bc);
    //       return (
    //         <Box
    //           key={item.index}
    //           sx={{
    //             display: "flex",
    //             // mx: 20,
    //             flexWrap: "wrap",
    //             "& > :not(style)": {
    //               m: 1,
    //               width: 128,
    //               height: 128
    //             }
    //           }}
    //         >
    //           <Item
    //             elevation={3}
    //             sx={{
    //               ":hover": {
    //                 boxShadow: 20 // theme.shadows[20]
    //               },
    //               backgroundColor: bc
    //             }}
    //           >
    //             {item.name}
    //           </Item>
    //         </Box>
