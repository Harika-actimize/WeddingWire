import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@mui/material/Typography';
import { Divider, useMediaQuery, Grid, Card, Text, Box, CardContent, CardMedia, Link, useTheme,Toolbar} from "@mui/material";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const styles = (theme) => ({
  popoverPaper: {
    width: '100%',
    top: "10% !important"
  },
});

const Blogs = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    // console.log('currect target', event.currentTarget);
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div>
      <Link  aria-controls="customized-menu" underline="none" sx={{fontSize:'12px',padding:0,color:'black'}}
        aria-haspopup="true" variant="contained" onClick={handleClick} >BLOGS
    </Link>
    <Menu
      PopoverClasses={{paper: props.classes.popoverPaper}}
        id="customized-menu"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom' }}
        transformOrigin={{ vertical: 'top' }}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <ContentPasteOutlinedIcon sx={{lineHeight: 2.7, fontSize: "2em", float:"left", marginRight:"10px"}}></ContentPasteOutlinedIcon>
                <Typography sx={{padding: ".5em", fontSize: "16px"}}>Checklist</Typography>
            </Grid>
            <Grid item xs={2}>
                <PeopleAltOutlinedIcon sx={{lineHeight: 2.7, fontSize: "2em", float:"left", marginRight:"10px"}}></PeopleAltOutlinedIcon>
                <Typography sx={{padding: ".5em", fontSize: "16px"}}>Guests</Typography>
            </Grid>
            <Grid item xs={2}>
                <PeopleAltOutlinedIcon sx={{lineHeight: 2.7, fontSize: "2em", float:"left", marginRight:"10px"}}></PeopleAltOutlinedIcon>
                <Typography sx={{padding: ".5em", fontSize: "16px"}}>Guests</Typography>
            </Grid>
            <Grid item xs={6}>
                <Card sx={{padding: "1px", width:"80%"}}>
                    <Box sx={{float: "left"}}>
                        <CardContent>
                            <Typography component="div" variant='subtitle2'>
                                Get the wedding wire App
                            </Typography>
                            <Typography variant='caption' color="text.secondary" component="div">
                                Plan your wedding on the go with the WeddingWire app
                            </Typography>
                        </CardContent>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 60 ,height:60}}
                        image="https://www.weddingwire.in/assets/img/logos/square-icon.svg"
                        alt="Live from space album cover"/>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <FactCheckOutlinedIcon sx={{lineHeight: 2.7, fontSize: "2em", float:"left", marginRight:"10px"}}></FactCheckOutlinedIcon>
                <Typography sx={{padding: ".5em", fontSize: "16px"}}> Wedding Vendors</Typography>
            </Grid>
            <Grid item xs={2}>
                <WebAssetOutlinedIcon sx={{lineHeight: 2.7, fontSize: "2em", float:"left", marginRight:"10px"}}></WebAssetOutlinedIcon>
                <Typography sx={{padding: ".5em", fontSize: "16px"}}>Wedding website</Typography>
            </Grid>
            <Grid item xs={2}>
                <WebAssetOutlinedIcon sx={{lineHeight: 2.7, fontSize: "2em", float:"left", marginRight:"10px"}}></WebAssetOutlinedIcon>
                <Typography sx={{padding: ".5em", fontSize: "16px"}}>Wedding website</Typography>
            </Grid>
            <Grid item xs={6}>
                <Card sx={{width:"80%"}}>
                    <Box sx={{float:"left"}}>
                        <CardContent>
                            <Typography component="div" variant='subtitle2'>
                            Wedshorts
                            </Typography>
                            <Typography variant='caption' color="text.secondary" component="div">
                            Easily collect all of your guests' event photos in one album!
                            </Typography>
                        </CardContent>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 60 ,height:60,padding:'20px'}}
                        image="https://www.weddingwire.in/assets/img/wedshoots/ico_wedshoots.svg"/>
                </Card>
            </Grid>
            </Grid>
        </MenuItem>
      </Menu>
    
      
    </div>
  );
  }

export default withStyles(styles)(Blogs);