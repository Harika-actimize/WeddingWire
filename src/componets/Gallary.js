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
        
        { id: 1, image: "https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/dark_deco_md.jpg", name:'Plainthing Studio',location:'Kakinada',country:'India'},
        { id: 2, image:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/block_print_md.jpg" ,name:'Sameer',location:'Switzerland',country:'Australia'},
        { id: 3, image:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/midnight_florals_md.jpg" ,name:'Lakshman',location:'Omnivar',country:'Canada'},
        { id: 4, image:"https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/tangerine_dream_md.jpg",name:'Srikanth',location:'Cape Town',country:'South Africa'},

        { id: 5, image: "https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/beloved_floral_md.jpg", name:'Odama',location:'Karachi',country:'Pakistan'},
        { id: 6, image:"https://cdn0.weddingwire.in/website/fotos/templates/259_thumb_md.jpg?v=61bfb",name:'Harika',location:'London',country:'UK'},
    ];
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3} md={2.4} sx={{display:'grid'}}>
        <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="140"
          image="https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/dark_deco_md.jpg"
          alt="green iguana"
          className="galary imgA1"
        />
                <CardMedia
          component="img"
          // height="140"
          image="https://cdn1.weddingwire.in/assets/img/wedsites/thumb_mobile/in/dark_deco.jpg"
          alt="green iguana"
          className="galary imgB1"
        />
        
      </CardActionArea>
    </Card>

        </Grid>
        <Grid item xs={3} md={12} sx={{display:'grid'}}>
        <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="140"
          image="https://cdn1.weddingwire.in/assets/img/wedsites/thumb/in/dark_deco_md.jpg"
          alt="green iguana"
          className="galary imgA1"
        />
                <CardMedia
          component="img"
          // height="140"
          image="https://cdn1.weddingwire.in/assets/img/wedsites/thumb_mobile/in/dark_deco.jpg"
          alt="green iguana"
          className="galary imgB1"
        />
        
      </CardActionArea>
    </Card>

        </Grid>

        <Grid item xs={3} md={12}>
        <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        </Grid>
        <Grid item xs={3} md={12}>
        <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        </Grid>

      </Grid>

      {/* <Grid container columns={20}>
        <Grid item xs={2}></Grid>
        <Grid item xs={5.3}>
        <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        </Grid>
        <Grid item xs={5.3}>
        <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        </Grid>
        <Grid item xs={5.3}>
        <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        </Grid>

<Grid item xs={2}></Grid>
      </Grid> */}
    </div>
  
  );
}