import { Icon } from '@iconify/react'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import { Button, Divider, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Select from '@mui/material/Select'
import { createTheme, styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import axios from 'axios'
import { createUserWithEmailAndPassword } from "firebase/auth"
import * as React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { auth } from "../firebase"
import { fbSignInInitiate, googleSignInInitiate } from '../redux/actions/userActions'
import { registerUserApi } from '../redux/api/registerApi'
import MessageInfo from './message';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))
const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // smol phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536 // large screens
    }
  }
});

const CustomTypo = styled(Typography)(({ theme }) => ({
  whiteSpace:'nowrap',
  // paddingBottom: '2px',
  color: '#8C8C8C',
  // padding:0,
  // margin:1,
  // marginLeft:'2px',
  // height: '7vh',
  fontSize: '12px',
  // lineHeight:'21px',
  // maxWidth:'fit-content',
  // fontWeight: 'bold',
  // borderRadius: '30px',
  // margin: '5px 8px',
  // padding: '10px',
  '&:hover': {color: 'red' },

}));

const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
const Signup = () => {
  // console.log("auth", auth)
  // console.log('===========================')
  // console.log('getauth', getAuth())
  const errorObject = {
    email:{valid:true, helperText:"Email required"},
    name:{valid:true, helperText:"Name required" },
    password:{valid:true, helperText:"Password required"}
  }
  
  const [errorObj, updateErrorObj] = useState(errorObject)
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    phonenumber: '',
    date: null,
    location: '',
    eventlocation: '',
  })
  const {
    name,
    email,
    password,
    phonenumber,
    date,
    location,
    eventlocation,
  } = data
  // console.log("stateeeeeeeeeeeeeeeeeeee",data)
  const [value, setValue] = useState(null)
  const [w, setW] = useState(window.innerWidth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

   const formValid = ()=>{
    //  debugger;
     let isValid = true
     let obj={...errorObj}
     if(email === ''){
        obj.email.valid = false
        isValid = false
     }else{
      let re = new RegExp(emailValidator);
      obj.email.valid = re.test(email)
      obj.email.helperText = !re.test(email)?"Invalid Email":obj.email.helperText
      isValid = re.test(email)
     }
     if(password === ''){
      obj.password.valid = false
     isValid = false
    }else{
      let re = new RegExp(passwordValidator);
      obj.password.valid = re.test(password)
      obj.password.helperText = !re.test(password)?"Invalid Password":obj.password.helperText
      isValid = re.test(password)
    }
    if(name === ''){
      obj.name.valid = false
     isValid = false
    }else{
     obj.name.valid = true
    }
     updateErrorObj(obj)
     return isValid
   }
  const handleSubmit = async e => {
    e.preventDefault()
    let valid = formValid()
    if(valid){
    try {
      await registerUserApi({email, password, name,location,eventlocation,phonenumber,date})
      await createUserWithEmailAndPassword(auth,email, password, name)
      dispatch({ type: 'ALERT', payload: { open: true, severity: 'success', message: "User created successfully" } })

      navigate('/login')
    } catch (error) {
      dispatch({ type: 'ALERT', payload: { open: true, severity: 'error', message: "Unable to create account, please try again" } })

      console.log('///////////', error)
    }
    
    setData({
      name: '',
      email: '',
      password: '',
      Phonenumber: '',
      date: '',
      location: '',
      eventlocation: '',
    })
  }

  }
  const handleChange = e => {
    let { name, value } = e.target
    if(name === "email"||name === 'password'||name==="name"){
      fieldValidation(name)
    }
    setData({ ...data, [name]: value })
  }

  const goToLogin = () => {
    navigate('/login')
  }
  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate())
  }

  const handleFBSignIn = () => {
    dispatch(fbSignInInitiate())
  }
  function weather() {
    // alert(",,,,,,,,,,")
    // to get access token first run this
    // const result = axios.get(
    //   'https://www.universal-tutorial.com/api/getaccesstoken',
    //   {
    //       headers:{
    //            "Accept":"application/json",
    //            "api-token": "AuXnFjES43NqbdODZoc1anLtpO9op_9HsA7hqU56HJoxlbbNrMsUAzmsp6cqoZ0HhWQ",
    //            "user-email": "harika.actimize@gmail.com"
    //          }
    //   },
    // );
    // console.log("result",result);
    const result1 = axios
      .get('https://www.universal-tutorial.com/api/countries', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdmdhZGFnaUBnbWFpbC5jb20ifSwiZXhwIjoxNTY2MjM0ODU0fQ.nMWPN38zptwwDKAo11bFyjhCRuzNhZc6NqqCaYJVxP0',
          Accept: 'application/json',
          //  "api-token": "uw3E9Kbxeya0tQltelUUSplCJSIYxtaPH1HWWV0gTNf0Z-s6f0FwOsr3gAim02VLg_o",
          //  "user-email": "harika.actimize@gmail.com"
        },
      })
      .then(res => {
        // console.log('res.data', res.data)
      })
      .catch(error => error.message)
    // console.log("result//////",result1.data);
    // resolve(result);

    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })

    // .finally(function () {
    //   console.log("all asdvb")
    //   // always executed
    // });
  }

  const fieldValidation = (input)=>{
    let obj={...errorObj}
    if(input&&input!==''){
      obj[input].valid = true
    }
    updateErrorObj(obj)
  }

  return (
    <>
     <Box sx={{textAlign:'center',mb:'2pc',mt:'2pc'}}>
        <img
         style={{
          height: 30,
          mb: 2,

          // width: 350,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }} 
        src='https://www.weddingwire.in/assets/img/logos/gen_logoHeader.svg'></img>
        </Box>
                <Grid container sx={{ marginLeft:'10%', marginRight:'10%', maxWidth: '860px', margin: 'auto', maxHeight: '800px', position: "relative", border: '1px solid grey' }} className="sociallogin" >
          <Grid xs={5} className="layout-auth-cover pure-u-2-5 imageshow">
            <img
              // component="img"
              // className="singupimg"
              width={'90%'}
              height={'100%'}
              alt="The house from the offer."
              src="https://cdn1.weddingwire.in/assets/img/layer-alta/default_en-IN.jpg"
              style={{ objectFit: "cover" }}
            ></img>
          </Grid>
          <Grid xs={7} sx={{ textAlign: "center", alignItems: "center", marginTop: '20px' }} className="socialloginblock">
            <MessageInfo/>
            <Button
              className="btnOutline btnOutline--grey btnOutline--full"
              sx={{
                color: 'black',
                mt: 1,
                textTransform: 'none',
                borderColor: '#d9d9d9',
              }}
              onClick={handleFBSignIn}
              variant="outlined">
              <Icon icon="icon-park:facebook" style={{ marginRight: "auto" }} />
              <span style={{ marginRight: "auto", fontWeight: 600, fontSize: "12px" }}>Sign in with Facebook</span>
            </Button>
            <Button
              variant="outlined"
              className="btnOutline btnOutline--grey p10 mb10 mr15 btnOutline--full"
              onClick={handleGoogleSignIn}
              sx={{
                color: 'black',
                mt: 1,
                textTransform: 'none',
                borderColor: '#d9d9d9'
              }}>
              <Icon icon="flat-color-icons:google" style={{ marginRight: "auto" }} />
              <span style={{ marginRight: "auto", fontWeight: 600, fontSize: "12px" }}>Sign in with Google</span>
            </Button>
            <Button
              className="btnOutline btnOutline--grey btnOutline--full"
              variant="outlined"
              sx={{
                color: 'black',
                mt: 1,
                textTransform: 'none',
                borderColor: '#d9d9d9',
              }}>
              <Icon icon="logos:apple" style={{ marginRight: "auto" }} />
              <span style={{ marginRight: "auto", fontWeight: 600, fontSize: "12px" }}>Sign in with Apple</span>
            </Button>
            <Divider sx={{mt:2,mb:2}}></Divider>
            <Grid
              sx={{
                mt: '2px',
                fontSize: 15,
                fontWeight: 600,
                fontFamily: 'ProximaNova,Helvetica,Arial,sans-serif',
              }}>
              Or sign up with your email
                  </Grid>
            {/* NAME FIELD */}
            <TextField
              id="standard-basic"
              label="Name and Surename"
              variant="standard"
              helperText={!errorObj.name.valid&&errorObj.name.helperText}
              error={!errorObj.name.valid}
              required
              name="name"
              type="text"
              sx={{ mt: 1 }}
              className="pure-u-1"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
              value={name}
            />
            {/* EMAIL FIELD */}
            <TextField
              id="input-with-icon-textfield"
              name="email"
              helperText={!errorObj.email.valid&&errorObj.email.helperText}
              error={!errorObj.email.valid}
              required
              type="email"
              sx={{ mt: 1 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
              className="pure-u-1"
              value={email}
              onChange={handleChange}
              label="Your email"
              variant="standard"
            />
            {/* PASSWORD FIELD */}
            <TextField
              name="password"
              type="password"
              helperText={!errorObj.password.valid&&errorObj.password.helperText}
              error={!errorObj.password.valid}
              required
              sx={{ mt: 1 }}
              className="pure-u-1 mt10"
              value={password}
              onChange={handleChange}
              label="Your password"
              variant="standard"
            />
            {/* EVENT LOCATION */}
            <Grid sx={{width:'80%',display:'inline-flex'}}>
            <TextField
              // sx={{ mt: 1, ml: 1 }}
              // className="pure-u-2"
              type="text"
              name="eventlocation"
              value={eventlocation}
              onChange={handleChange}
              label="Event location"
              variant="standard"
            />
            {/* LOCATION FIELD */}
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                select
                    </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="location"
                id="demo-simple-select"
                value={location}
                label="location"
                placeholder="india"
                variant="standard"
                //  defaultValue={70}
                // sx={{
                //   marginTop: '27px',
                //   marginLeft: '5px',
                // }}
                onChange={handleChange}
              >
                {/* <MenuItem value={''}>select</MenuItem> */}
                <MenuItem value="afghanistan">Afghanistan</MenuItem>
                <MenuItem value="afghanistan">Afghanistan</MenuItem>
                <MenuItem value="Algeria">Algeria</MenuItem>
                <MenuItem value="Andorra">Andorra</MenuItem>
                <MenuItem value="Greece">Greece</MenuItem>
                <MenuItem value="Iran">Iran</MenuItem>
                <MenuItem value="India">India</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid sx={{width:"100%",paddingLeft:'10%',display:"inline-flex"}}>
            {/* DatePicker FIELD */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Event date"
                // sx={{mt:'-6%',ml: '10%'}}
                // sx={{ mr: '40%', mt: '-6%' }}
                className="pure-u-2"
                variant="standard"
                value={date}
                onChange={newValue => {
                  // console.log('newvalue', newValue)
                  setData({ ...data, date: newValue })
                }}
                renderInput={params => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              // sx={{
              //   ml: '45%',
              //   mt: '2%',
              // }}
              label="Phone number"
              type="text"
              value={phonenumber}
              name="phonenumber"
              variant="standard"
              className="pure-u-2"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PhoneIphoneIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            </Grid>
            {/* BRIDE GROOM  */}
            <Grid
              justifyContent="center"
              alignItems="right"
              sx={{ mt: '1%', display: 'flex' }}
            >
              <Typography> I am </Typography>
              <img
                style={{ width: 18, height: 18 }}
                src="https://cdn1.iconfinder.com/data/icons/bride-around-the-world/2126/indian_bride3-512.png"
                alt=""
              />
              <Typography> Bride </Typography>
              <img
                style={{ width: 18, height: 18 }}
                src="https://cdn1.iconfinder.com/data/icons/bride-around-the-world/2126/indian_bride3-512.png"
                alt=""
              />
              <Typography> Groom </Typography>
              <img
                style={{ width: 18, height: 18 }}
                src="https://cdn1.iconfinder.com/data/icons/bride-around-the-world/2126/indian_bride3-512.png"
                alt=""
              />
              <Typography> Other </Typography>
            </Grid>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className="layout-auth-notice"
              sx={{ pb: 1, mt: 2 }}
            >
              By clicking 'Sign up' I accept the Terms of Use of
              WeddingWire.in.
                  </Typography>
            <Button
              sx={{
                backgroundColor: '#fb1b26',
                mt: 1,
                p: '12px 15px',
                color: '#fff',
              }}
              className="btn-flat.red btn-full btn-flat--big btn-flat select "
              onClick={handleSubmit}
            >
              Signup
                  </Button>
            <Typography sx={{ mt: 3,mb:3 }} className="layout-auth-action">
              Already have an account?<a onClick={goToLogin}> Log In</a>
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{fontSize:'14px',lineHeight:'21px',textAlign:'center'}}>
        <ul style={{margin:0,padding:0,listStyleType:'none',color:'grey'}}>
                  <li style={{padding:'0 5px',display:'inline-block'}}>Sign up with WeddingWire</li>
                  <li style={{padding:'0 5px',display:'inline-block',letterSpacing:'normal',wordSpacing:'normal',verticalAlign:'top',textRendering:'auto'}}>Register your business</li>
                  <li style={{padding:'0 5px',display:'inline-block',letterSpacing:'normal',wordSpacing:'normal',verticalAlign:'top',textRendering:'auto'}}>Contact Us</li>
                  <li style={{padding:'0 5px',display:'inline-block',letterSpacing:'normal',wordSpacing:'normal',verticalAlign:'top',textRendering:'auto'}}>Terms & Privacy</li>
                  <li style={{padding:'0 5px',display:'inline-block',letterSpacing:'normal',wordSpacing:'normal',verticalAlign:'top',textRendering:'auto'}}>Do Not Sell My Personal Information</li>
                  <li style={{padding:'0 5px',display:'inline-block',letterSpacing:'normal',wordSpacing:'normal',verticalAlign:'top',textRendering:'auto'}}>About Us</li>
        </ul>
        <ul style={{margin:0,padding:0,listStyleType:'none',color:'grey'}}>
              <li style={{padding:'0 5px',display:'inline-block',color:'black'}}>Other countries:</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>Spain</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>France</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>Italy</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>United Kingdom</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>Ireland</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>Portugal</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>Mexico</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>Chile</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>Argentina</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>Brazil</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>Colombia</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>peru</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>Uruguay</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>Canada</li>
              <li style={{padding:'0 5px',display:'inline-block'}}>United States</li>
          </ul>


          <Typography sx={{color:'grey'}}>© 2007 - 2023 weddingwire.in</Typography> 
              </Grid>
              </>
  )
}

export default Signup;
