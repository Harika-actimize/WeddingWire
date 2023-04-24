
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from "@mui/material";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import { Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Weddingplan() {
    return (
        <div>
            <Grid container spacing={2} columns={20} sx={{ mt: '5px' }}>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={16} sx={{ marginLeft: '10px' }}>
                    <Swiper
                        freeMode={true}
                        grabCursor={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 20,
                            },
                            1280: {
                                slidesPerView: 6,
                                spaceBetween: 20,
                            }

                        }}
                    >

                        <Stack direction="row" spacing={2}>
                            <SwiperSlide>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="246"
                                        width="196"
                                        image="https://cdn1.weddingwire.in/assets/img/destination-weddings/widget-full-color/13.jpg"
                                        alt="green iguana"
                                    />
                                </Card>
                                <Typography>Brazil</Typography>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="246"
                                        width="196"
                                        image="https://cdn1.weddingwire.in/assets/img/destination-weddings/widget-full-color/3.jpg"
                                        alt="green iguana"
                                    />
                                </Card>
                                <Typography>France</Typography>

                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="246"
                                        width="196"
                                        image="https://cdn1.weddingwire.in/assets/img/destination-weddings/widget-full-color/2.jpg"
                                        alt="green iguana"
                                    />
                                </Card>
                                <Typography>Italy</Typography>

                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="246"
                                        width="196"
                                        image="https://cdn1.weddingwire.in/assets/img/destination-weddings/widget-full-color/5.jpg"
                                        alt="green iguana"
                                    />
                                </Card>
                                <Typography>Mexico</Typography>

                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="246"
                                        width="196"
                                        image="https://cdn1.weddingwire.in/assets/img/destination-weddings/widget-full-color/6.jpg"
                                        alt="green iguana"
                                    />
                                </Card>
                                <Typography>Portugal</Typography>

                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="246"
                                        width="196"
                                        image="https://cdn1.weddingwire.in/assets/img/destination-weddings/widget-full-color/1.jpg"
                                        alt="green iguana"
                                    />
                                </Card>
                                <Typography>Spain</Typography>

                            </SwiperSlide>

                        </Stack>
                    </Swiper>
                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
        </div>
    );
}

