import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SampleMenu from "./samplemenu";
const pages = ["PLANNING", "WEDDING VENUES", "WEDDING VENDORS", "BRIDES","GROOMS","BLOGS","COMMUNITY"];
const menu = [
  {
    // icon: <HomeOutlinedIcon />,
    name: "PLANNING",
    link:"/"
  },
  {
    name: "WEDDING VENUES",
    link: "/profiles",
    // icon: <HomeOutlinedIcon />,
    items: [
      {
        name: "PersonalDetails",
        link: "/profiles/personaldetails"
      },
      {
        name: "FamilyDetails",
        link: "/profiles/familydetails"
      }
    ]
  }
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
       <SampleMenu/>
      </Drawer>
      <IconButton
        sx={{ color: "blue", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
