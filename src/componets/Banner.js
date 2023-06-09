import {
  createStyles, InputAdornment,


  makeStyles
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Divider, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { useState } from "react";
import '../App.css';
import {
  BannerContent,
  BannerDescription,
  BannerImage,


  BannerTextfiled, BannerTitle
} from "./BannerStyle";

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

export default function Banner() {
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

  
  return (
  <>
  <Grid container columns={20} sx={{flex:1}}>
    {/* <BannerContainer sx={{marginTop:'5px',borderTop:'1px solid rgba(0, 0, 0, 0.12)',borderBottom:'1px solid rgba(0, 0, 0, 0.12)'}} > */}
    <Grid item xs={20} md={10} sm={20} lg={10} xl={10} sx={{textAlign:'-webkit-center'}}>
      <Divider></Divider>
<BannerContent>
        <BannerTitle sx={{
  fontFamily:"Merriweather,Merriweather-fallback-TimesNewRoman,times,serif",marginTop:'3%',mb:'1%'
        }}>Discover everything you need to plan your big day
</BannerTitle>
        <BannerDescription variant="subtitle2" sx={{fontFamily: 'ProximaNova,ProximaNova-fallback-Arial,sans-serif',
            mt:'5%'
}}>
        Search over 71,000 local professionals with reviews, pricing, and more
        </BannerDescription>
        <Grid
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper',display:'flex'}}>
{matches ? (<>
<Button sx={{color:'#fff',
backgroundColor:'red',
transition:'all .15s',
backgroundPosition:'center',
display:'flex',
textAlign:'center',
justifyContent:'center',
padding:'.69rem 1rem',
fontWeight:'600',
width:'max-content',
marginBottom:'0',
borderRadius:'.5rem',
border:'1px solid transparent'}}><SearchIcon/>Search vendors</Button>
</>) :(
  <>
  <Box sx={{display:'flex'}}>
        <BannerTextfiled
  variant="outlined"
  placeholder='Search for'
  // sx={{width:'100%'}}
  // button
  // id="lock-button"
  // aria-haspopup="listbox"
  // aria-controls="lock-menu"
  // aria-label="when device is locked"
  // value={options[selectedIndex]}
  // aria-expanded={open ? 'true' : undefined}
  // onClick={handleClickListItem}
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
      <Grid>
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

<BannerTextfiled
  variant="outlined"
  placeholder='in (E.g.Delhi)'
  // sx={{width:'100%'}} 
/>
<Button variant="contained" color='primary' sx={{textTransform:'none'}}>
      Find
    </Button>
    </Box>
    </>)}
</Grid>

       </BannerContent>
</Grid>
      <Grid item xs={20} md={10} sm={20}>
                  {/* <div className='banner'></div> */}
      <BannerImage src="https://cdn1.weddingwire.in/assets/img/home/bg_home1.jpg" className='banner' />
      </Grid>
          </Grid>
      <Divider></Divider>

    </>
  );
}