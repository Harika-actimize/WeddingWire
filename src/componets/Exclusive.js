import React from 'react'
import { Typography, Card, Box, CardMedia, Avatar, Divider } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import StarIcon from '@mui/icons-material/Star';
import { Icon } from '@iconify/react';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

function Exclusive() {
    const cardData = [
        { id: 1, image: "https://cdn0.weddingwire.in/vendor/4473/3_2/320/jpeg/weddingvenue-mumbai-house-juhu-hotel-banquets-banquethall-5_15_404473-164930679231688.webp", name: 'Mumbai House Juhu Hotel and Banquet', starrating: '5.0', address: 'Santacruz West, Mumbai', type: 'Banquet Halls' },
        { id: 2, image: "https://cdn0.weddingwire.in/vendor/3166/3_2/320/jpeg/whatsapp-image-2022-04-16-at-5-00-15-pm_15_53166-165026391651660.webp", name: 'Royal Orchid Central Grazia', address: 'Vashi, Mumbai', type: 'Hotels' },
        { id: 3, image: "https://cdn0.weddingwire.in/vendor/1586/3_2/320/png/capture_15_21586.webp", name: 'VITS Hotel, Mumbai', starrating: '5.0', address: 'Andheri East, Mumbai', type: 'Banquet Halls' },
        { id: 4, image: "https://cdn0.weddingwire.in/vendor/6056/3_2/320/jpeg/61100a8a-7db3-4170-870f-082a2d394b46_15_426056-167731087664738.webp", name: 'Lush Weddings n Occasions', starrating: '4.8', address: 'Mira Road, Mumbai', type: 'Wedding Lawns and Farmhouses Mumbai' },
        { id: 5, image: "https://cdn0.weddingwire.in/vendor/1217/3_2/320/jpg/4q9a2327_15_71217-1555762721.webp", name: 'Silverador Resort Club', address: 'Mira Road', type: 'Banquet Halls' },
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
                                <Card sx={{ maxWidth: 360,margin:'15px 15px 15px 0' }}>
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

export default Exclusive
