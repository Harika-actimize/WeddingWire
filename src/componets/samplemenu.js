import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import { Typography } from "@mui/material";
import {Card,Box,CardMedia} from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import '../App.css'
// import { hasChildren } from "./utils";
// const coustmcard= () =>{
//     return '<Typography>' +sadfghj+'</Typography>'
// } 

const menu = [
  {
    // icon: <HomeOutlinedIcon />,
    menuId:1,
    title: "Planing Tools",
    items: [
        {
            title: "Checklist",
            path: "/profiles/personaldetails"
          },
          {
            title: "Guests",
            path: "/profiles/familydetails"
          },
          {
            title: "Budget",
            path: "/profiles/emergencydetails"
          },
          {
            title: "Wedding vendors",
            path: "/profiles/userprofile"
          },
          {
            title: "Wedding Website",
            path: "/profiles/userprofile"
          },
          {
            title: "Wedding Generator",
            path: "/profiles/userprofile"
          },
          {
            title:<Card style={{ display: 'flex',width:'250px'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography component="div" variant='subtitle2' sx={{fontSize:'10px'}}>
                  Get the wedding wire App
                </Typography>
                <Typography variant='caption' color="text.secondary" component="div" sx={{fontSize:'10px'}}>
                Plan your wedding on the go with the WeddingWire app
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 40 ,height:40,padding:'30px'}}
              image="https://www.weddingwire.in/assets/img/logos/square-icon.svg"
              alt="Live from space album cover"
            />
          </Card>
,
            path: "/profiles/userprofile"
          },
          {
              title:    <Card style={{ display: 'flex',width:'250px',marginBottom:'1%'}}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Typography component="div" variant='subtitle2' sx={{fontSize:'10px'}}>
                    Wedshorts
                  </Typography>
                  <Typography variant='caption' color="text.secondary" component="div" sx={{fontSize:'10px'}}>
                  Easily collect all of your guests' event photos in one album!
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 40 ,height:40,padding:'30px'}}
                image="https://www.weddingwire.in/assets/img/wedshoots/ico_wedshoots.svg"
              />
            </Card>,
            path:'/profiles/card'
            
          }
    ]
  },
  { menuId:2,
    title: "Wedding Venues",
    path: "/profiles",
    // icon: <HomeOutlinedIcon />,
    items: [
      {
        title: "Banquet Halls",
        path: "/profiles/personaldetails"
      },
      {
        title: "Hotels",
        path: "/profiles/familydetails"
      },
      {
        title: "Marriage Gardens",
        path: "/profiles/emergencydetails"
      },
      {
        title: "Kalyana Mandapams",
        path: "/profiles/userprofile"
      },
      {
        title: "Wedding Resorts",
        path: "/profiles/userprofile"
      },
      {
        title: "Wedding Lawns Farmhouses",
        path: "/profiles/userprofile"
      },
      {
        title: "Promotions",
        path: "/profiles/userprofile"
      },
      {
        title:          <Card style={{ display: 'flex',width:'250px'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant='subtitle2' sx={{fontSize:'10px'}}>
            Destination Weddings
            </Typography>
            <Typography variant='caption' color="text.secondary" component="div" sx={{fontSize:'10px'}}>
            Easily plan your international wedding.
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 60 ,height:60,padding:'30px'}}
          image="https://cdn1.weddingwire.in/assets/svg/original/illustration/plane_destination.svg"
          alt="Live from space album cover"
        />
      </Card> ,
        path: "/profiles/userprofile"
      }

    ]
  },
  {
    // icon: <LocalLibraryOutlinedIcon />,
    menuId:3,
    title: "Wedding Vendors",
    items: [
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      },
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      },
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      }
    ]
  },
  {
    // icon: <LocalLibraryOutlinedIcon />,
    menuId:4,
    title: "Brides",
    items: [
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      },
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      },
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      }
    ]
  },
  {
    // icon: <LocalLibraryOutlinedIcon />,
    menuId:5,
    title: "Grooms",
    items: [
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      },
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      },
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      }
    ]
  },
  {
    // icon: <LocalLibraryOutlinedIcon />,
    menuId:6,
    title: "Blogs",
    items: [
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      },
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      },
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      }
    ]
  },
  {
    // icon: <LocalLibraryOutlinedIcon />,
    menuId:7,
    title: "Community",
    items: [
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      },
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      },
      {
        title: "The Dow Theory",
        to: "/thedowtheory"
      }
    ]
  }
];

const hasChildren = (item) => {
  const { items: children } = item;
  // console.log("items",item)

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length === 0) {
    return false;
  }

  return true;
};

const MenuItem = ({item, activeMenuID, handleClick}) => {
  // console.log(key,"item",item,"index",index)
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} activeMenuID={activeMenuID} handleClick={handleClick}/>;
};

const SingleLevel = ({ item }) => {
  return (
    <ListItem button>
      {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
      <ListItemText style={{fontFamily:'ProximaNova,ProximaNova-fallback-Arial,sans-serif',
      fontSize:'1.1rem',
      fontWeight:'600'
    }} primary={item.title} />
    </ListItem>
  );
};

const MultiLevel = ({ item, activeMenuID, handleClick }) => {
  const { items: children } = item;
  return (
    <>
      <ListItem button onClick={()=>handleClick(item.menuId)}>
        {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
        <ListItemText
        style={{fontFamily:'ProximaNova,ProximaNova-fallback-Arial,sans-serif',
        fontSize:'1.1rem',
        fontWeight:'600'
      }}
         primary={item.title} />
        {activeMenuID === item.menuId ? <ExpandLessIcon /> : <ExpandMoreIcon  />}
      </ListItem>
      <Collapse style={{minHeight:"auto"}} in={activeMenuID === item.menuId} children={<List component="div" disablePadding>
          {children.map((child) => (
            <MenuItem item={child} />
          ))}
        </List>}>
       
      </Collapse>
    </>
  );
};

const SampleMenu = () => {
  const [activeMenuID, setActiveMenuID] = useState(null);

  const handleClick = (Id) => {
    let ressult = activeMenuID === Id?null:Id
    setActiveMenuID(ressult)
  };
  return menu.map((item) => <MenuItem item={item} activeMenuID={activeMenuID} handleClick={handleClick}/>);
};

export default SampleMenu;
