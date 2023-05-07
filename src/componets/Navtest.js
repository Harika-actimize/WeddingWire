import { Card } from "@material-ui/core";
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { Box, CardContent, CardMedia, Grid, Link, useMediaQuery, useTheme } from "@mui/material";
import Typography from '@mui/material/Typography';
import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Logout } from '../redux/actions/userActions';
import DrawerComp from "./Drawer";

export default function InteractiveList() {
  const theme = useTheme();
  const dispatch = useDispatch()
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const user = useSelector((state) => state.userData.activeuser)
  const navigate = useNavigate()
  const goToVendor = () => {
    navigate("/areyouvendor");
  };
  const goTosignup = () => {
    navigate("/signup")
  }
  const goTologin = () => {
    navigate("/login")
  }

  const logout = () => {
    dispatch(Logout())
  }
  return (
    <React.Fragment>
      {/* <Toolbar> */}
      {isMatch ? (
        <>
          <Grid container columns={20} sx={{ padding: "20px 10px", justifyContent: 'space-between' }}>
            <Grid>
              <DrawerComp />
            </Grid>
            <Grid>
              <img src="https://www.weddingwire.in/assets/img/logos/gen_logoHeader.svg"></img>
            </Grid>
            <Grid>
              <PermIdentityIcon onClick={goTosignup} />
            </Grid>
          </Grid>
        </>
      ) : (<>
        <Grid container columns={20}>
          {/* <Grid item xs={4}> */}
          {/* </Grid>
        
        */}

          {/* <Divider></Divider> */}
          {/* <Grid item xs={2}> </Grid> */}
          <Grid item xs={4} style={{ textAlign: 'right' }}>
            <img src="https://www.weddingwire.in/assets/img/logos/gen_logoHeader.svg"></img>

          </Grid>
          <Grid xs={12} style={{ textAlign: 'left' }}>
            <div className='back'>
              <div className="wrapper">

                <nav>
                  <ul>
                    {/* <li>
<img src='https://www.weddingwire.in/assets/img/logos/gen_logoHeader.svg'></img></li> */}
                    <li><Link href="#" underline="none">PLANNING TOOLS</Link>
                      <ul className="menu-area">
                        <ul>
                          <Typography variant='subtitle1'>Plan your wedding</Typography>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><ContentPasteOutlinedIcon sx={{ marginTop: '10px', marginRight: '15px' }}></ContentPasteOutlinedIcon>Checklist</Link></li>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><FactCheckOutlinedIcon sx={{ marginTop: '10px', marginRight: '15px' }}></FactCheckOutlinedIcon> broushure Design</Link></li>
                        </ul>
                        <ul>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><PeopleAltOutlinedIcon sx={{ marginTop: '40px', marginRight: '15px' }}></PeopleAltOutlinedIcon>Guests</Link></li>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><WebAssetOutlinedIcon sx={{ marginTop: '10px', marginRight: '15px' }}></WebAssetOutlinedIcon>Wedding website</Link></li>
                        </ul>
                        <ul>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><CalculateOutlinedIcon sx={{ marginTop: '40px', marginRight: '15px' }}></CalculateOutlinedIcon>Guests</Link></li>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><TagOutlinedIcon sx={{ marginTop: '10px', marginRight: '15px' }}></TagOutlinedIcon>Wedding website</Link></li>

                        </ul>
                        <ul>
                          <Card className="navcardres" style={{ display: 'flex', width: '300px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                              <CardContent sx={{ flex: '1 0 auto' }}>
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
                              sx={{ width: 60, height: 60, padding: '20px' }}
                              image="https://www.weddingwire.in/assets/img/logos/square-icon.svg"
                              alt="Live from space album cover"
                            />
                          </Card>

                          <Card className="navcardres" style={{ display: 'flex', width: '300px', marginTop: '10px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                              <CardContent sx={{ flex: '1 0 auto' }}>
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
                              sx={{ width: 60, height: 60, padding: '20px' }}
                              image="https://www.weddingwire.in/assets/img/wedshoots/ico_wedshoots.svg"
                            />
                          </Card>
                        </ul>
                      </ul>
                    </li>
                    <li className="dropdown"><Link href="#" underline="none">WEDDING VENUES</Link>
                      <ul className="menu-area">
                        <ul>
                          <Typography variant='subtitle1'>Plan your wedding</Typography>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Banquet Halls</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Marriage Garden</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Wedding Resorts</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Promotions
              </Link></li>
                        </ul>
                        <ul>
                          <li style={{ marginTop: '40px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Hotels</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Kalyana Mandapams</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Wedding Lawns Farmhoues</Link></li>
                        </ul>
                        <ul></ul>
                        <ul>
                          <Card className="navcardres" style={{ display: 'flex', width: '300px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                              <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant='subtitle2'>
                                  Destination Weddings
          </Typography>
                                <Typography variant='caption' color="text.secondary" component="div">
                                  Easily plan your international wedding.
          </Typography>
                              </CardContent>
                            </Box>
                            <CardMedia
                              component="img"
                              sx={{ width: 60, height: 60, padding: '20px' }}
                              image="https://cdn1.weddingwire.in/assets/svg/original/illustration/plane_destination.svg"
                              alt="Live from space album cover"
                            />
                          </Card>
                        </ul>
                      </ul>
                    </li>
                    <li><Link href="#" underline="none">WEDDING VENDORS</Link>
                      <ul className="menu-area">
                        <ul>
                          <Typography variant='subtitle1'>Start hiring your vendors</Typography>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><CameraAltOutlinedIcon sx={{ marginTop: '10px', marginRight: '15px' }}></CameraAltOutlinedIcon>Wedding Photographers</Link></li>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><FactCheckOutlinedIcon sx={{ marginTop: '10px', marginRight: '15px' }}></FactCheckOutlinedIcon> Caterers</Link></li>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><CardGiftcardOutlinedIcon sx={{ marginTop: '10px', marginRight: '15px' }}></CardGiftcardOutlinedIcon>Wedding Gifts</Link></li>
                        </ul>
                        <ul>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><PeopleAltOutlinedIcon sx={{ marginTop: '40px', marginRight: '15px' }}></PeopleAltOutlinedIcon>Wedding Videography</Link></li>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><WebAssetOutlinedIcon sx={{ marginTop: '10px', marginRight: '15px' }}></WebAssetOutlinedIcon>Wedding Transportation</Link></li>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><WebAssetOutlinedIcon sx={{ marginTop: '10px', marginRight: '15px' }}></WebAssetOutlinedIcon>Florists</Link></li>
                        </ul>
                        <ul>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><CalculateOutlinedIcon sx={{ marginTop: '40px', marginRight: '15px' }}></CalculateOutlinedIcon>Wedding Music</Link></li>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><TagOutlinedIcon sx={{ marginTop: '10px', marginRight: '15px' }}></TagOutlinedIcon>Wedding Invitations</Link></li>
                          <li><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}><TagOutlinedIcon sx={{ marginTop: '10px', marginRight: '15px' }}></TagOutlinedIcon>Wedding Planners</Link></li>
                        </ul>
                        <ul>
                          <Card className="navcardres" style={{ display: 'flex', width: '300px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                              <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant='subtitle2'>
                                  Destination Weddings
          </Typography>
                                <Typography variant='caption' color="text.secondary" component="div">
                                  Easily plan your international wedding.
          </Typography>
                              </CardContent>
                            </Box>
                            <CardMedia
                              component="img"
                              sx={{ width: 60, height: 60, padding: '20px' }}
                              image="https://cdn1.weddingwire.in/assets/svg/original/illustration/plane_destination.svg"
                              alt="Live from space album cover"
                            />
                          </Card>
                        </ul>
                        <Typography variant='subtitle2'>COMPLETE YOUR WEDDING TEAM</Typography>
                      </ul>
                    </li>
                    <li className="dropdown hide"><Link href="#" underline="none">BRIDES</Link>
                      <ul className="menu-area">
                        <ul>
                          <Typography variant='subtitle1'>Brides</Typography>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Mehndi Artists</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Bridal Makeup Artists</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Makeup Salon</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Promotions
              </Link></li>
                        </ul>
                        <ul>
                          <li style={{ marginTop: '40px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Bridal jewellery</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Bridal Lehenga</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Trousseau Packing</Link></li>
                        </ul>
                        <ul>
                          <Typography variant='subtitle1'>Promotions</Typography>
                        </ul>
                      </ul>
                    </li>


                    <li className="dropdown hide"><Link href="#" underline="none">GROOMS</Link>
                      <ul className="menu-area">
                        <ul>
                          <Typography variant='subtitle1'>Couples</Typography>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Sherwani</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>promotions</Link></li>            </ul>

                      </ul>
                    </li>

                    <li className="dropdown"><Link href="#" underline="none">BLOGS</Link>
                      <ul className="menu-area">
                        <ul>
                          <Typography variant='subtitle1'>Wedding inspiration and ideas</Typography>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Before the wedding</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>The wedding ceremony</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>The wedding banquet</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>The services for your wedding</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Wedding fashion</Link></li>

                        </ul>
                        <ul>
                          <li style={{ marginTop: '40px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Health and beauty</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Honeymoon</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>After the wedding</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>The wedding reception</Link></li>
                        </ul>
                        <ul></ul>
                        <ul>
                          <Card className="navcardres" style={{ width: '300px' }}>
                            <Box>
                              <CardMedia
                                component="img"
                                sx={{ width: "304px", height: "90px" }}
                                image="https://www.weddingwire.in/assets/img/components/header/tabs/realweddings_banner.jpg"
                                alt="Live from space album cover"
                              />

                              <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant='subtitle2'>
                                  Real Weddings
          </Typography>
                                <Typography variant='caption' color="text.secondary" component="div">
                                  Find wedding inspiration that fits your style with photos from real couples.
          </Typography>
                              </CardContent>
                            </Box>
                          </Card>
                        </ul>
                      </ul>
                    </li>


                    <li className="hide"><Link href="#" underline="none">COMMUNITY</Link>
                      <ul className="menu-area">
                        <ul>
                          <Typography variant='subtitle1'>Community</Typography>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Gifts and Favours</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Invites and Stationery</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Fitness and Health</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Bachelor & Bachelorette Fun</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Wedding Fashion</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Beauty, Hair & Makeup</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Traditions & Ceremonies</Link></li>
                        </ul>
                        <ul>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Honeymoon</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Trending Weddings</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Plan a Wedding</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>WeddingWire Tech Support</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Pre-Wedding Functions</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Do It Yourself</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Married Life</Link></li>
                        </ul>
                        <ul>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Wedding Trivia</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Community Conversations</Link></li>
                          <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Groups by city</Link></li>
                        </ul>
                        <ul>

                          <ul>
                            <Typography variant='subtitle1'>ViewTheLatest</Typography>
                            <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Discussions</Link></li>
                            <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Photos</Link></li>
                            <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Videos</Link></li>
                            <li style={{ marginTop: '10px' }}><Link href="#" underline="none" sx={{ fontSize: '14px', color: 'black' }}>Members</Link></li>
                          </ul>
                        </ul>
                      </ul>
                    </li>

                    {/* <li className="dropdown"><Link href="#" underline="none">BLOGS</Link>
          <ul className="menu-area">
          <ul>
              <Typography variant='subtitle1'>Wedding inspiration and ideas</Typography>
              <li  style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Before the wedding</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>The wedding ceremony</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>The wedding banquet</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>The services for your wedding</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Wedding fashion</Link></li>

            </ul>
            <ul>
            <li  style={{marginTop:'40px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>Health and beauty</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>Honeymoon</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px',color:'black'}}>After the wedding</Link></li>
              <li style={{marginTop:'10px'}}><Link href="#" underline="none" sx={{fontSize:'14px', color:'black'}}>The wedding reception</Link></li>
              </ul>
              <ul></ul>
            <ul>
 
    </ul>
          </ul>
        </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </Grid>
          {user ?
            <Grid item xs={4}>
              <Link href="#" underline="none" onClick={logout} sx={{ color: 'red', fontSize: '12px' }}>LOG OUT</Link>
            </Grid> :
            <Grid item xs={4}>
              <Link href='#' underline='none' sx={{ fontSize: '12px', color: 'black' }} onClick={goToVendor} ><WorkOutlineOutlinedIcon sx={{ fontSize: '12px', color: 'black' }}
              ></WorkOutlineOutlinedIcon> ARE YOU AVENDOR?</Link><br></br>
              <Link href="#" underline="none" onClick={goTologin} sx={{ color: 'red', fontSize: '12px' }}>LOG IN</Link>
              <Link href="#" underline="none" onClick={goTosignup} sx={{ color: 'red', fontSize: '12px', marginLeft: '8px' }}>FREE SIGN UP</Link>

            </Grid>}
        </Grid>
      </>)}
      {/* </Toolbar> */}
    </React.Fragment>
  );
}
