import { Colors } from "./Theme";
import { Box } from '@mui/material';
import { styled } from "@mui/material/styles";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
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



export const Image = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  [theme.breakpoints.down("md")]: {
    height:'50px',
    width:'50px',
    display:'column'
  },
  [theme.breakpoints.down("sm")]: {
  
  },
}));
  