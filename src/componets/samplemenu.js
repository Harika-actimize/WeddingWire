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
    title: "PLANNING TOOLS",
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
            title:<Card style={{ display: 'flex',width:'310px'}}>
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
              sx={{ width: 40 ,height:40,padding:'10px'}}
              image="https://www.weddingwire.in/assets/img/logos/square-icon.svg"
              alt="Live from space album cover"
            />
          </Card>
,
            path: "/profiles/userprofile"
          },
          {
              title:    <Card style={{ display: 'flex',width:'310px'}}>
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
                sx={{ width: 40 ,height:40,padding:'10px'}}
                image="https://www.weddingwire.in/assets/img/wedshoots/ico_wedshoots.svg"
              />
            </Card>,
            path:'/profiles/card'
            
          }
    ]
  },
  {
    title: "WEDDING VENUES",
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
        title:          <Card style={{ display: 'flex',width:'310px'}}>
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
          sx={{ width: 60 ,height:60,padding:'20px'}}
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
    title: "WEDDING VENDORS",
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
    title: "BRIDES",
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
    title: "GROOMS",
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
    title: "BLOGS",
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
    title: "COMMUNITY",
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

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  return (
    <ListItem button>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

const MultiLevel = ({ item }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </>
  );
};
const SampleMenu = () => {
  return menu.map((item, key) => <MenuItem key={key} item={item} />);
};
export default SampleMenu;
