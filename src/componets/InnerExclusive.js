import React from 'react'
import { Typography, Card, Box, CardMedia, Avatar, Divider } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import StarIcon from '@mui/icons-material/Star';
import { Icon } from '@iconify/react';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

function InnerExclusive() {
    const cardData = [
        { id: 1, image: "https://cdn0.weddingwire.in/vendor/2870/3_2/320/jpeg/weddingvenues-aagman-by-grewals-red-chilli-cateres-facade-2_15_422870-166253865096411.webp", name: "Aagman- By Grewal's & Red Chilli Caterers", starrating: '5.0', address: 'Kapashera - Samalkha - Rajokri, South Delhi', type: 'Banquet Halls' },
        { id: 2, image: "https://cdn0.weddingwire.in/vendor/0602/3_2/320/jpg/weddingvenue-quality-inn-banquethall-1_15_70602-164150197715790.webp", name: 'Old Gurgaon - Sector 14, Gurgaon', address: 'Old Gurgaon - Sector 14, Gurgaon', type: 'Hotels' },
        { id: 3, image: "https://cdn0.weddingwire.in/vendor/3796/3_2/320/jpg/a53i6451_15_223796-163153716792110.webp", name: 'Tivoli Royal Palace', starrating: '5.0', address: 'Palwal City, Palwal', type: 'Banquet Halls' },
        { id: 4, image: "https://cdn0.weddingwire.in/vendor/3733/3_2/320/jpg/resorts-destination-weddings-paradise-isle-beach-resort-facade_15_273733-163811626570411.webp", name: 'Paradise Isle Beach Resort', starrating: '4.8', address: 'Udupi City, Udupi', type: 'Wedding Lawns and Farmhouses Mumbai' },
        { id: 5, image: "https://cdn0.weddingwire.in/vendor/1073/3_2/320/jpg/img-9584_15_401073-165778483475142.webp", name: 'Hilltop Greens', address: 'Suraj Kund, Faridabad, Faridabad', type: 'Banquet Halls' },
    ];
    return (
        <div>
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    }

                }}
            >
                <Box>
                    {cardData.map((itmes, index) => {
                        // console.log("catdata",itmes);
                        return (
                            <SwiperSlide key={index}>
                                <Card sx={{ maxWidth: 360, marginLeft: '15px' }}>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={itmes.image}
                                    />
                                    <Avatar className="avatarhide" sx={{
                                        position: 'absolute',
                                        // color: 'black',
                                        backgroundColor: '#fff',
                                        top: '51%',
                                        right: '15%',
                                        height: 40,
                                        width: 40,
                                        // padding:'0px 8px',
                                        zIndex: 1,
                                        cursor: 'pointer',
                                        transform: 'translateX(-50%)'
                                    }}>
                                        <Icon className="avatarhide" style={{ color: 'black' }} icon="iconoir:percentage-circle" height='30' width='30' /></Avatar>
                                    <Typography sx={{
                                        fontSize: '13px',
                                        lineHeight: '27px',
                                        marginLeft: '15px',
                                        marginBottom: '5px'
                                    }}>ELCLUSIVE DISCOUNT</Typography>
                                    <Typography sx={{
                                        fontSize: '16px',
                                        fontFamily: 'ProximaNova,ProximaNova-fallback-Arial,sans-serif',
                                        fontWeight: '400',
                                        marginLeft: '15px',
                                        marginBottom: '15px'
                                    }}>5% discount for WeddingWire.in couples</Typography>
                                    <Divider></Divider>
                                    <Typography noWrap sx={{
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        marginLeft: '15px',
                                        marginTop:'15px'
                                    }}>{itmes.name}</Typography>
                                    <Box sx={{ display: 'flex',
                                    marginLeft: '15px',
                                    marginBottom: '15px',
                                    
                                    }}>
                                    <StarIcon sx={{ color: '#fabb00',
                                    fontSize: '18px',
                                    
                                     }}></StarIcon><Typography variant='caption'  >{itmes.starrating}</Typography>
                                        <Typography variant='caption' noWrap>{itmes.type}.{itmes.address}</Typography>
                                    </Box>
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

        </div>
    )
}

export default InnerExclusive