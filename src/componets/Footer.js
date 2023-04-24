import React from 'react'
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Icon } from '@iconify/react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const currencies = [
    {
      value: 'USD',
    },
    {
      value: 'India',
    },
    {
      value: 'BTC',
    },
    {
      value: 'JPY',
    },
  ];
  

function Footer() {
    return (
        <div>
            <Grid container spacing={2} columns={20} sx={{ marginTop: '40px', height: '100%', backgroundColor: '#d9d9d9' }}>
                <Grid item xs={2}>

                </Grid>

                <Grid item xs={20} md={4} sm={8} lg={4} sx={{ paddingBottom: '100px',textAlign:'left'}}>
                    <Typography sx={{ marginBottom: 2 }} >Information</Typography>
                    <Typography sx={{ marginBottom: 1 }} variant='caption'>Contact us</Typography><br></br>
                    <Typography sx={{ marginBottom: 1 }} variant='caption'>Terms & Privacy</Typography><br></br>
                    <Typography sx={{ marginBottom: 1 }} variant='caption'>Do Not Sell My Personal Information</Typography><br></br>
                    <Typography sx={{ marginBottom: 1 }} variant='caption'>Register your business</Typography><br></br>
                    <Typography sx={{ marginBottom: 1 }} variant='caption'>About Us</Typography><br></br>
                    <Typography sx={{ marginBottom: 1 }} variant='caption'>Editorial Team & Policies</Typography><br></br>
                    <Typography sx={{ marginBottom: 1 }} variant='caption'>Careers</Typography><br></br>
                    <Typography sx={{ marginBottom: 1 }} variant='caption'>Couples' Choice Awards 2023</Typography><br></br>
                    <Typography sx={{ marginBottom: '20px' }} variant='caption'>Wedding website</Typography>
                </Grid>
                <Grid item xs={16} md={4} sm={8} lg={4}>
                    <Typography sx={{ marginBottom: 2 }}>Get the WeddingWire app</Typography>
                    <Box sx={{ display: 'flex' }}>
                        <img src='https://www.weddingwire.in/assets/img/dropdown/app.png'></img>
                        <Typography variant='caption' sx={{ marginLeft: 3 }}>Plan your wedding on the go with the WeddingWire app</Typography>
                    </Box>
                    <Box sx={{ marginTop: 3 }}>
                        <img sx={{ marginRight: '10px' }} src='https://www.weddingwire.in/assets/img/footer/appstore.png'></img>
                        <img src='https://www.weddingwire.in/assets/img/footer/googleplay.png'></img>
                    </Box>
                </Grid>
                <Grid item xs={16} md={4} sm={8} lg={4}>
                    <Typography sx={{ marginBottom: 2 }}>Follow us on</Typography>
                    <svg style={{ paddingRight: 10 }} xmlns="http://www.w3.org/2000/svg" color='grey' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z" /></svg>
                    <svg style={{ paddingRight: 10 }} xmlns="http://www.w3.org/2000/svg" color='grey' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M22.212 5.656a8.384 8.384 0 0 1-2.401.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.621-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.205 4.205 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.394 8.394 0 0 1-6.192 1.732a11.831 11.831 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9c0-.18-.004-.362-.012-.541a8.497 8.497 0 0 0 2.086-2.164Z" /></svg>
                    <svg style={{ paddingRight: 10 }} xmlns="http://www.w3.org/2000/svg" color='grey' width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297c.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943c.682 0 1.012.512 1.012 1.127c0 .686-.437 1.712-.663 2.663c-.188.796.4 1.446 1.185 1.446c1.422 0 2.515-1.5 2.515-3.664c0-1.915-1.377-3.254-3.342-3.254c-2.276 0-3.612 1.707-3.612 3.471c0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907c-.035.146-.116.177-.268.107c-1-.465-1.624-1.926-1.624-3.1c0-2.523 1.834-4.84 5.286-4.84c2.775 0 4.932 1.977 4.932 4.62c0 2.757-1.739 4.976-4.151 4.976c-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" /></svg>
                    <svg style={{ paddingRight: 10 }} xmlns="http://www.w3.org/2000/svg" color='grey' width="25" height="25" viewBox="0 0 72 72"><path fill="#FFF" d="M46.785 12.614h-21.57c-6.96 0-12.601 5.642-12.601 12.601v21.57c0 6.96 5.642 12.601 12.602 12.601h21.568c6.96 0 12.602-5.642 12.602-12.602V25.215c0-6.96-5.642-12.601-12.602-12.601z" /><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M46.785 12.614h-21.57c-6.96 0-12.601 5.642-12.601 12.601v21.57c0 6.96 5.642 12.601 12.602 12.601h21.568c6.96 0 12.602-5.642 12.602-12.602V25.215c0-6.96-5.642-12.601-12.602-12.601z" /><circle cx="36" cy="36" r="11.29" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" /><circle cx="49.709" cy="22.291" r="2.419" /></svg>
                    {/* <Icon sx={{fontSize:'25px'}} icon="jam:twitter-circle"  /> */}

                </Grid>
                <Grid item xs={16} md={4} sm={8} lg={4}>
                    <Typography sx={{ marginBottom: "40px"}}>Choose a country</Typography>
                    <Button sx={{transition: 'border-color .15s',
    borderRadius:' .5rem',
    border: '1px solid #d9d9d9',
    backgroundColor:' #fff',
    display: 'flex',
    alignItems: 'center',
    height: '48px',
    padding: '0 2rem',
    cursor: 'pointer',
    lineHeight: 'normal',
    borderColor: '#8c8c8c',
    color:'black',
    textTransform:'none',
    width:'100%'
    }}>
        <img src='https://www.weddingwire.in/assets/img/flags/country-selector/in.png' width='18' height='12' style={{marginRight:'5%'}}></img>
        India<KeyboardArrowDownIcon sx={{marginLeft:'70%'}}></KeyboardArrowDownIcon>
        </Button>
                </Grid>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={2}>

                </Grid>

                <Grid item xs={16}>
                    <Divider sx={{ marginBottom: '15px' }}></Divider>

                    <img src='https://www.weddingwire.in/assets/img/footer/tkww_logo_KO.png'></img>
                    <Typography sx={{ marginLeft: '30px' }} variant='caption'>© 2023 WeddingWire</Typography>
                </Grid>
                <Grid item xs={2}>

                </Grid>

            </Grid>

        </div>
    )
}

export default Footer
