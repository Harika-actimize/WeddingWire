import { Box, Button, Typography ,TextField} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "./Theme";
// import Banner from './Banner';
// import { Stack } from '@mui/material/Stack';

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: '-webkit-inline-flex',
  justifyContent: "center",
  width: "100%",
  height: "100%",
  right:'0 !important',
  padding: "0px 0px",
  background: Colors.white,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  // backgroundImage: `url(/images/banner/banner.png)`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
}));

export const BannerContent = styled(Box)(({ matches, theme }) => ({
  width:'70%',
  boxSizing:'border-box',
  margin:0,
  padding:0,
  layoutPadding:'2rem',
  [theme.breakpoints.down("md")]: {
   gap:'1.5rem',
   modalPaddingX:'1.5rem',
   textAlign:'center'
      },
  [theme.breakpoints.down("sm")]: {

     },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  backgroundImage: `url(${src})`,
  backgroundPosition: "top center",
  width:'calc((100vw - 100%)/2 + 49%)',
  backgroundSize:'cover',
  height: 'calc(100% + 0px)',
  right:'50%',
    bottom:0,
    left:'initial',
    margin:'0 -50vw 0 0',

  [theme.breakpoints.down("md")]: {
    height: "250px",
    left:'-1.5rem',
    width:'100vw',
    marginTop:'-16px',
    backgroundPosition:'center top',
    backgroundSize:'cover'

      },
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    height: "176px",
    marginTop:'-16px',
    backgroundPosition:'center top',
    left:'-1rem',
    backgroundSize:'cover'
  },
}));
export const BannerInnerImg = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  backgroundImage: `url(${src})`,
  backgroundPosition: "left top,center center",
  width:'calc((100vw - 100%)/2 + 50%)',
  backgroundSize:'4em,cover',
  height: 'calc(100% + 0px)',
  right:'50%',
    bottom:0,
    left:'initial',
    margin:'0 -50vw 0 0',

  [theme.breakpoints.down("md")]: {
    height: "250px",
    left:'-1.5rem',
    width:'100vw',
    marginTop:'-16px',
    backgroundPosition:'center top',
    backgroundSize:'cover'

      },
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    height: "176px",
    marginTop:'-16px',
    backgroundPosition:'center top',
    left:'-1rem',
    backgroundSize:'cover'
  },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  textAlign:'left',
  fontSize: '38px',
    lineHeight:'2.25rem',
    fontWeight:600,
    fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif',    
  [theme.breakpoints.down("md")]: {
    fontSize:'1.875rem',
    lineHeight:'2.625rem',
    maxWidth:'none',
  },
    [theme.breakpoints.down("sm")]: {
      fontSize:'1.25rem',
    lineHeight:'2rem',
    textAlign:'center',
    zIndex:2,
    fontWeight:700,
    fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif',
    // fontWeight:700,
    // fontFamily:'Merriweather,Merriweather-fallback-TimesNewRoman,times,serif'    
  }
}));

export const BannerDescription = styled(Typography)(({ matches, theme })  => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  marginTop:"5px",
  fontSize:'15px !important',
  textAlign:'left'
,
  [theme.breakpoints.down("md")]: {
    fontSize:'1.125rem',
    lineHeight:'1.6875rem',
    textAlign:'center',
    maxWidth:'none',
    margin:'1rem 0'
  },
    [theme.breakpoints.down("sm")]: {
      fontSize:'1.125rem',
    lineHeight:'1.6875rem',
    textAlign:'center',
    margin:'1rem auto',
    maxWidth:'25ch'  
  }
}));

export const BannerShopButton = styled(Button)(({ matches, theme })  => ({
  maxWidth:'615px',
  width:'50vw',
  [theme.breakpoints.down("md")]: {
    display:'grid',
    
  },
    [theme.breakpoints.down("sm")]: {
     mb:'2rem',
     display:'block',  
  }
}));
export const BannerTextfiled = styled(TextField)(({ matches, theme })  => ({
  
  [theme.breakpoints.down("md")]: {
    maxWidth:'360px'
    
  }
}));