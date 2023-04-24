import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Card, Grid, Typography } from '@mui/material';
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';



function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <>

      <Grid container spacing={2} columns={20}>
        <Grid item xs={2}>

        </Grid>
        <Grid item xs={16} sx={{ display: 'flex' }}>
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
            <SwiperSlide> <Card sx={{ textAlign: '-webkit-center', height: 'auto' }}>
              <ImageList
                sx={{ width: 300, height: 300 }}
                variant="quilted"
                cols={3}
                rowHeight={90}
                height='110px'
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                      {...srcset(item.img, 90, item.rows, item.cols)}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              <CardContent sx={{ textAlign: 'left' }}>
                <Typography sx={{ fontFamily: 'ProximaNova,ProximaNova-fallback-Arial,sans-serif', fontWeight: 'bold' }}>Suminder & Deepika</Typography>
                <Typography variant='caption'>37 photos · Dera Bassi, Zirakpur</Typography>
              </CardContent>
            </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card sx={{ textAlign: '-webkit-center' }}>
                <ImageList
                  sx={{ width: 300, height: 300 }}
                  variant="quilted"
                  cols={3}
                  rowHeight={90}
                >
                  {itemData1.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                      <img
                        {...srcset(item.img, 90, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
                <CardContent sx={{ textAlign: 'left' }}>
                  <Typography sx={{ fontFamily: 'ProximaNova,ProximaNova-fallback-Arial,sans-serif', fontWeight: 'bold' }}>Sachee & Himanshu</Typography>
                  <Typography variant='caption'>35 photos · Samalka, South Delhi
</Typography>
                </CardContent>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card sx={{ textAlign: '-webkit-center' }}>
                <ImageList
                  sx={{ width: 300, height: 300 }}
                  variant="quilted"
                  cols={3}
                  rowHeight={90}
                >
                  {itemData2.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                      <img
                        {...srcset(item.img, 90, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
                <CardContent sx={{ textAlign: 'left' }}>
                  <Typography sx={{ fontFamily: 'ProximaNova,ProximaNova-fallback-Arial,sans-serif', fontWeight: 'bold' }}>Mayuri & Ajit</Typography>
                  <Typography variant='caption'>30 photos · Akota, Vadodara</Typography>
                </CardContent>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card sx={{ textAlign: '-webkit-center' }}>
                <ImageList
                  sx={{ width: 300, height: 300 }}
                  variant="quilted"
                  cols={3}
                  rowHeight={90}
                >
                  {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                      <img
                        {...srcset(item.img, 90, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
                <CardContent sx={{ textAlign: 'left' }}>
                  <Typography sx={{ fontFamily: 'ProximaNova,ProximaNova-fallback-Arial,sans-serif', fontWeight: 'bold' }}>Varsha & Salil</Typography>
                  <Typography variant='caption'>16 photos · Rajajinagar - Malleshwaram, Bangalore</Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Grid>
        <Grid item xs={2}>

        </Grid>
      </Grid>

    </>
  );
}

const itemData = [
  {
    img: 'https://cdn0.weddingwire.in/real-wedding-photo/955/3_2/320/jpg/200007.webp',
    title: 'Suminder & Deepika',
    rows: 2,
    cols: 3,
  },
  {
    img: 'https://cdn0.weddingwire.in/real-wedding-photo/955/3_2/320/jpg/199935.webp'
  },
  {
    img: 'https://cdn0.weddingwire.in/real-wedding-photo/955/3_2/320/jpg/199937.webp'
  },
  {
    img: 'https://cdn0.weddingwire.in/real-wedding-photo/955/3_2/320/jpg/199939.webp'
  }

];

const itemData1 = [
  {
    img: 'https://cdn0.weddingwire.in/real-wedding-photo/781/3_2/320/jpg/60207.webp',
    title: 'Breakfast',
    rows: 2,
    cols: 3,
  },
  {
    img: 'https://cdn0.weddingwire.in/real-wedding-photo/781/3_2/320/jpg/60203.webp',
    title: 'Burger',
  },
  {
    img: 'https://cdn0.weddingwire.in/real-wedding-photo/781/3_2/320/jpg/60159.webp',
    title: 'Camera',
  },
  {
    img: 'https://cdn0.weddingwire.in/real-wedding-photo/781/3_2/320/jpg/60161.webp',
    title: 'Coffee',
  }

];
const itemData2 = [
  {
    img: 'https://cdn0.weddingwire.in/real-wedding-photo/891/3_2/320/jpg/155859.webp',
    title: 'Breakfast',
    rows: 2,
    cols: 3,
  },
  {
    img: 'https://cdn0.weddingwire.in/real-wedding-photo/891/3_2/320/jpg/155915.webp',
    title: 'Burger',
  },
  {
    img: 'https://cdn0.weddingwire.in/real-wedding-photo/891/3_2/320/jpg/155911.webp',
    title: 'Camera',
  },
  {
    img: 'https://cdn0.weddingwire.in/real-wedding-photo/891/3_2/320/jpg/155913.webp',
    title: 'Coffee',
  }

];