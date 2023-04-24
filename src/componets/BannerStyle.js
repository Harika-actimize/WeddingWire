import { Box, Button, Typography } from "@mui/material";
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

export const BannerContent = styled(Box)(() => ({
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 450,
  padding: "30px",
  position: 'relative',
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  backgroundImage: `url(${src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "800px",
  height:'384px',
  borderLeftTopRadius:' 50% 25%',
  borderLeftBottomRadius:' 50% 25%',  // clipPath:'border-box',
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));
export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: '35px',
  fontWeight :'bolder',
  fontSize: "33px",
  // marginBottom: "20px",
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px',    
  }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  marginTop:"5px",
  fontSize:'15px !important',
  [theme.breakpoints.down("md")]: {
   fontSize:'11px',
    // marginBottom: "1.5em",
  },
}));

export const BannerShopButton = styled(Button, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== "color",
  name: "MyShopButton",
  slot: "Root",
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "primary" && styles.primary,
    props.color === "secondary" && styles.secondary,
  ],
})(({ theme }) => ({
  padding: "20px 0px",
  color: Colors.black,
  flexDirection:"row",
  display:"inline",
  border: "1px solid #d9d9d9",
  fontWeight: "bold",
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    fontSize: "14px",
  },
}));