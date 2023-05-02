import { Typography,Button,Box,useMediaQuery, Grid } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
  BannerInnerImg
} from "./BannerStyle";
import {
    FormControl,
    InputAdornment,
    TextField,
    createStyles,
    makeStyles
  } from "@material-ui/core";
  import { useState ,useEffect } from "react";
  import IconButton from "@material-ui/core/IconButton";
  import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import '../App.css'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

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

export default function InnerPageBanner() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = 
  useState();
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    console.log("////////////",event.target)
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    console.log("@@@@@@@@@@@@",index)
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

  
  return (
  <>
  <Grid container columns={20} sx={{flex:1}}>
  <Grid item xs={20} md={10} sm={20} lg={10} xl={10} sx={{textAlign:'-webkit-center'}}>
      <BannerContent>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/">
          Wedding
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Wedding Venues
        </Link>
      </Breadcrumbs>
        
        <BannerTitle sx={{
  fontFamily:"Merriweather,Merriweather-fallback-TimesNewRoman,times,serif",marginTop:'3%',mb:'1%'
        }}>Wedding Venues
</BannerTitle>

        <Grid
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper',display:'flex'}}>
{matches ? (<>
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
      <BannerInnerImg src="https://www.weddingwire.in/assets/img/directory/headings/bg_directory-hero-banquetes.jpg" className='banner' />
      {/* <div className='homeHeading_content'>

      </div> */}
      </Grid>
 </Grid>
    </>
  );
}