import {
  createStyles, InputAdornment,
  makeStyles, TextField
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Divider, Grid, useMediaQuery } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from "@mui/system";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import '../App.css';
import {
  BannerContent,
  BannerInnerImg, BannerTitle
} from "./BannerStyle";
import { BridalMakeupArtists, WeddingCatering, WeddingDecorator, WeddingInvitations, WeddingPhotography, WeddingPlanners, WeddingVenues } from "./modalData";

const options = [
  'babyee',
  'januuu',
  'hariiii',
  'tarak',
  'ramarao',
  'venkat',
  'ram',
  'rishi',
  'mani',
  'sita',
  'babyee',
  'januuu',
  'hariiii',
  'tarak',
  'ramarao',
  'venkat',
  'ram',
  'rishi',
  'mani',
  'sita'
];
const randompics = 
  {[WeddingVenues]:'https://www.weddingwire.in/assets/img/directory/headings/bg_directory-hero-banquetes.jpg',
  [WeddingPhotography]:"https://www.weddingwire.in/assets/img/directory/headings/bg_directory-hero-wedding-photography.jpg",
  [WeddingPlanners]:"https://www.weddingwire.in/assets/img/directory/headings/bg_directory-hero-wedding-planners.jpg",
  [BridalMakeupArtists]:"https://www.weddingwire.in/assets/img/directory/headings/bg_directory-hero-bridal-makeup.jpg",
  [WeddingDecorator]:"https://www.weddingwire.in/assets/img/directory/headings/bg_directory-hero-wedding-decoration.jpg",
  [WeddingCatering]:'https://www.weddingwire.in/assets/img/directory/headings/bg_directory-hero-catering.jpg',
  [WeddingInvitations]:"https://www.weddingwire.in/assets/img/directory/headings/bg_directory-hero-wedding-invitations.jpg"}

export default function InnerPageBannerRes() {
  const param = useParams()
  // console.log("param",param.sub_category_name);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = 
  useState();
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    // console.log("////////////",event.target)
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    // console.log("@@@@@@@@@@@@",index)
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));


  const useStyles = makeStyles(() => {
    return createStyles({
      search: {
        margin: "0"
      }
    });
  });  
  // console.log("//////////",randompics[param.sub_category_name])
  return (
  <>
{matches ?(<>
<Divider></Divider>
<Grid container columns={20} sx={{flex:1}}>
<Grid item xs={20} md={10} sm={20} lg={10} xl={10} >
    <BannerContent sx={{marginTop:'15px'}}>
    <Breadcrumbs>
      <Link underline="hover" color="inherit" href="/">
        Wedding
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/weddingvenues"
      >
        {param.sub_category_name}
      </Link>
    </Breadcrumbs>
      
      <BannerTitle className="BannerTitle" sx={{
fontFamily:"Merriweather,Merriweather-fallback-TimesNewRoman,times,serif",marginTop:'3%',mb:'3%'
      }}>{param.sub_category_name}
</BannerTitle>

      <Grid
      aria-label="Device settings"
      sx={{ bgcolor: 'background.paper',display:'flex'}}>
{matches ? (<>
<TextField
variant="outlined"
placeholder='Wedding'
button
style={{width:"80%"}}
id="lock-button"
aria-haspopup="listbox"
aria-controls="lock-menu"
aria-label="when device is locked"
value={options[selectedIndex]}
aria-expanded={open ? 'true' : undefined}
onClick={handleClickListItem}
InputProps={{
  startAdornment: (
    <InputAdornment>
      <IconButton>
        <SearchIcon />
      </IconButton>
    </InputAdornment>
  )
}}
/>
{/* <Menu
      id="lock-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'lock-button',
        role: 'listbox',
      }}
    >
      {options.map((option, index) => (
        <MenuItem
          key={option}
          onClick={(event) => handleMenuItemClick(event, index)}
        >
           <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} columns={12}>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4}>
          {option}
      </Grid>
      <Grid item xs={4}>
      </Grid>

    </Grid>
  </Box>

        </MenuItem>
      ))}
    </Menu> */}

<TextField
variant="outlined"
style={{width:"50%"}}
placeholder={param.sub_category_name}
/>
</>) :(
<>
<Grid sx={{marginBottom:'10px'}}>
      <TextField
variant="outlined"
placeholder='Wedding'
button
id="lock-button"
aria-haspopup="listbox"
aria-controls="lock-menu"
aria-label="when device is locked"
value={options[selectedIndex]}
aria-expanded={open ? 'true' : undefined}
onClick={handleClickListItem}
InputProps={{
  startAdornment: (
    <InputAdornment>
      <IconButton>
        <SearchIcon />
      </IconButton>
    </InputAdornment>
  )
}}
/>
<Menu
      id="lock-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'lock-button',
        role: 'listbox',
      }}
    >
      {options.map((option, index) => (
        <MenuItem
          key={option}
          onClick={(event) => handleMenuItemClick(event, index)}
        >
           <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} columns={12}>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4}>
          {option}
      </Grid>
      <Grid item xs={4}>
      </Grid>

    </Grid>
  </Box>

        </MenuItem>
      ))}
    </Menu>

<TextField
variant="outlined"
placeholder='in (E.g.Delhi)' 
/>
<Button variant="contained" color='error' sx={{textTransform:'none'}}>
    Find
  </Button>
  </Grid>
  </>)}
</Grid>
    </BannerContent>
    </Grid>
</Grid>
</>):(<>
  <Divider></Divider>
  <Grid container columns={20} sx={{flex:1}}>
  <Grid item xs={20} md={10} sm={20} lg={10} xl={10} sx={{textAlign:'-webkit-center'}}>
      <BannerContent sx={{marginTop:'15px'}}>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/">
          Wedding
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/weddingvenues"
        >
        {param.sub_category_name}
        </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
      {param.location}
      </Link>
      </Breadcrumbs>
        
        <BannerTitle className="BannerTitle" sx={{
  fontFamily:"Merriweather,Merriweather-fallback-TimesNewRoman,times,serif",marginTop:'3%',mb:'3%'
        }}>{param.sub_category_name}
</BannerTitle>

        <Grid
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper',display:'flex'}}>
{matches ? (<>
  
</>) :(
  <>
      <TextField
variant="outlined"
placeholder='Wedding'
button
id="lock-button"
aria-haspopup="listbox"
aria-controls="lock-menu"
aria-label="when device is locked"
value={options[selectedIndex]}
aria-expanded={open ? 'true' : undefined}
onClick={handleClickListItem}
InputProps={{
  startAdornment: (
    <InputAdornment>
      <IconButton>
        <SearchIcon />
      </IconButton>
    </InputAdornment>
  )
}}
/>
<Menu
      id="lock-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'lock-button',
        role: 'listbox',
      }}
    >
      {options.map((option, index) => (
        <MenuItem
          key={option}
          onClick={(event) => handleMenuItemClick(event, index)}
        >
           <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} columns={12}>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4}>
          {option}
      </Grid>
      <Grid item xs={4}>
      </Grid>

    </Grid>
  </Box>

        </MenuItem>
      ))}
    </Menu>

<TextField
variant="outlined"
placeholder='in (E.g.Delhi)' 
/>
<Button variant="contained" color='error' sx={{textTransform:'none'}}>
    Find
  </Button>
  </>)}
</Grid>
    </BannerContent>
    </Grid>
    <Grid item xs={20} md={10} sm={20}>
      {/* <div className='banner'></div> */}
    <BannerInnerImg src={randompics[param.sub_category_name]} className='banner' />
    {/* <div className='homeHeading_content'>

    </div> */}
    </Grid>
</Grid>
<Divider></Divider>
</>)
} </>)}
