import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
export const Gallary = () => {
    const Item = styled(Sheet)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor:'pink',
        color: theme.vars.palette.text.tertiary,
    }));


    const cardData = [
        
        { id: 1, image: "https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/block_print_md.jpg", image1:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb_mobile/in/block_print.jpg"},
        { id: 2, image:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/dark_deco_md.jpg" ,image1:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb_mobile/in/dark_deco.jpg"},
        { id: 3, image:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/beloved_floral_md.jpg" ,image1:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb_mobile/in/beloved_floral.jpg"},
        { id: 4, image:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/tangerine_dream_md.jpg",image1:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb_mobile/in/tangerine_dream.jpg"},

        { id: 5, image: "https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/midnight_florals_md.jpg",image1:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb_mobile/in/midnight_florals.jpg"},
        { id: 6, image:"https://cdn0.weddingwire.in/website/fotos/templates/259_thumb_md.jpg?v=f1ace",image1:'https://cdn0.weddingwire.in/website/fotos/templates/259_thumb_mobile.jpg?v=f1ace'},
    ];
  return (
    <div className="websitesComponent__cardContainer scrollSnap scrollSnap--fullBleed">
      <div className='websitesComponent__sliderItem scrollSnap__item app-websites-tile app-websites-link'>
        <div className='websitesComponent__sliderItem scrollSnap__item app-websites-tile app-websites-link'>
          <div className="websitesComponent__cardItem websitesComponent__cardItem--vertical">
            <img src='https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/block_print_md.jpg' className='websitesComponent__image websitesComponent__image--desktopThumb lazyloaded'></img>
         <img src="https://cdn1.weddingwire.in/assets/img/wedsites/thumb_mobile/in/block_print@2x.jpg" className="websitesComponent__image websitesComponent__image--mobileThumb ls-is-cached lazyloaded"></img>
          </div>
        </div>

      </div>
     
        </div>
  
  );
}