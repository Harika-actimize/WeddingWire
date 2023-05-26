import { Icon } from '@iconify/react'
import { Button, Typography } from '@mui/material'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
// import { register } from "./teststyle";
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
// import {auth} from 'firebase/auth';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { auth, facebookprovider, googleprovider } from '../firebase'
import { LoginStart, LoginSuccess } from '../redux/actions/userActions'
import MessageInfo from './message'
import { fbSignInInitiate, googleSignInSuccess } from '../redux/actions/GoogleActions'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';


const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Login = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const errorObject = {
    email: { valid: true, helperText: "Email required" },
    password: { valid: true, helperText: "Password required" }
  }

  const [errorObj, updateErrorObj] = useState(errorObject)
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const [showalert, setShowalert] = useState(false)

  const { email, password } = state
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const goToSignup = () => {
    navigate("/signup");

  };
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     console.log("user",user)
  //     if (user) {
  //       setCurrentUser({
  //         // uid: user.uid,
  //         email: user.email,
  //         // displayName: user.displayName,
  //         // photoURL: user.photoURL,
  //       });
  //     }
  //     else {
  //       setCurrentUser('');
  //     }
  //   });
  // }, []);

  const handleFBSignIn = () => {
    signInWithPopup(auth, facebookprovider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = facebookprovider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = facebookprovider.credentialFromError(error);

        // ...
      });
  };

  const handleGoogleSignIn = async e => {
    // e.preventDefault();
      try {
        let res = await signInWithPopup(auth, googleprovider)
        // console.log("resssssssssssssssss",res)
          console.log(res);
          console.log(res.user);
          const user = res.user;
          dispatch(googleSignInSuccess(user));
        navigate('/')
      }
      catch (error) {
        console.log(error)
        dispatch({ type: 'ALERT', payload: { open: true, severity: 'error', message: "Unable to login, please try again" } })

      };

  }

  // const handleGoogleSignIn = () => {
  //   signInWithPopup(auth, googleprovider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = googleprovider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ..
  //       navigate('/')
  //     }).catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       // const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       // const credential = googleprovider.credentialFromError(error);
  //       // ...
  //     });
  // };
  const formValid = () => {
    //  debugger;
    let isValid = true
    let obj = { ...errorObj }
    if (email === '') {
      obj.email.valid = false
      isValid = false
    } else {
      obj.email.valid = true
    }
    if (password === '') {
      obj.password.valid = false
      isValid = false
    } else {
      obj.password.valid = true
    }

    updateErrorObj(obj)
    return isValid
  }
  const expirationTime =()=>{

  }
  const handleSubmit = async e => {
    e.preventDefault();
    let valid = formValid()
    // console.log("///////////////")
    if (valid) {
      try {
        let res = await signInWithEmailAndPassword(auth, email, password)
        console.log("login", res.user.stsTokenManager.expirationTime)
        localStorage.setItem("accessToken",JSON.stringify(res.user.stsTokenManager.accessToken))
       let myDate = new Date() 
      localStorage.setItem("expritiontime",myDate.setHours(myDate.getHours() + 24));
      // dispatch({ type: 'ALERT', payload: { open: true, severity: 'success', message: "User login successfully",accessToken:JSON.stringify(res.user.stsTokenManager.accessToken),expritiontime:myDate.setMinutes(myDate.getMinutes() + 1) }})
      // dispatch({ type: 'ALERT', payload: { open: true, severity: 'success', message: "User login successfully",expritiontime:myDate.setMinutes(myDate.getMinutes() + 1) }})
  
      // sessionStorage.setItem("user",JSON.stringify({id:res.user,expireat:res.user.stsTokenManager.expirationTime}));
        // sessionStorage.setItem("user",JSON.stringify(res.user));
        // let myDate = new Date() // your date object
        // sessionStorage.setItem("expritiontime",myDate.setHours(myDate.getHours() + 1));
        dispatch(LoginSuccess(res.user.stsTokenManager.accessToken));
        navigate('/')
      }

      catch (error) {
        console.log(error)
        dispatch({ type: 'ALERT', payload: { open: true, severity: 'error', message: "Unable to login, please try again" } })

      };

      setState({ email: '', password: '' })
    }
  }

  const handleChange = e => {
    let { name, value } = e.target
    let obj = { ...errorObj }
    if (value && value !== '') {
      obj[name].valid = true
    }
    updateErrorObj(obj)
    setState({ ...state, [name]: value })
  }

  return (
    <React.Fragment>
      <Box sx={{ textAlign: 'center', mb: '2pc', mt: '2pc' }}>
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

      <Grid container sx={{ maxWidth: '860px', margin: 'auto', maxHeight: '800px', position: "relative", border: '1px solid grey' }} >
        <Grid xs={5} className="layout-auth-cover pure-u-2-5">
          <img
            // component="img"
            width={'90%'}
            height={'100%'}
            alt="The house from the offer."
            src="https://cdn1.weddingwire.in/assets/img/layer-alta/default_en-IN.jpg"
            style={{ objectFit: "cover" }}
          ></img>
        </Grid>
        <Grid xs={7} sx={{ textAlign: "center", alignItems: "center", marginTop: '50px' }}>
          <MessageInfo />
          <Grid
            sx={{
              fontSize: 15,
              fontWeight: 600,
              fontFamily: 'ProximaNova,Helvetica,Arial,sans-serif',
            }}>
            Log in to your account
              </Grid>
          <Typography
            level="body1"
            sx={{ mt: 2 }}
            className="layout-auth-action"
          >
            Don't have an account?{' '}
            <a onClick={goToSignup}>Free sign up</a>
          </Typography>
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
          <Typography sx={{ mt: 1, fontWeight: 500, fontSize: "12px" }}>Or log in with your email</Typography>
          {showalert ? (
            <Alert variant="filled" severity="error">please enter vaild email and password</Alert>
          ) : (
            ''
          )}
          <TextField
            id="input-with-icon-textfield"
            name="email"
            sx={{ mt: 1 }}
            className="pure-u-1"
            value={email}
            helperText={!errorObj.email.valid && errorObj.email.helperText}
            error={!errorObj.email.valid}
            required
            onChange={handleChange}
            label="Your email"
            variant="standard"
          />
          <TextField
            name="password"
            sx={{ mt: 1 }}
            className="pure-u-1"
            value={password}
            helperText={!errorObj.password.valid && errorObj.password.helperText}
            error={!errorObj.password.valid}
            required
            type="password"
            onChange={handleChange}
            label="Your password"
            variant="standard"
          />
          <Typography
            sx={{
              fontSize: 14,
              color: '#202428',
              pt: "1px",
              textAlign: 'right',
              mr: 8
            }}>
            Forgot your username/password?
              </Typography>
          <Button
            sx={{
              backgroundColor: '#fb1b26',
              mt: 1,
              p: '5px 15px',
              color: '#fff'
            }}
            className="btn-flat.red btn-full btn-flat--big btn-flat select "
            onClick={handleSubmit}>Log In
              </Button>
          <Typography sx={{ mt: 1 }}>Are you a vendor?</Typography>
          <Typography sx={{ mt: 1, color: 'black' }}><a>Vendor login</a></Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontSize: '12px' }}>Sign up with WeddingWire Register your business Contact Us Terms & Privacy Do Not Sell My Personal Information About Us</Typography>
          <Typography sx={{ fontSize: '12px' }}>Other countries: Spain France Italy United Kingdom Ireland Portugal Mexico Chile Argentina Brazil Colombia Peru Uruguay Canada United States</Typography>
          <Typography sx={{ fontSize: '12px' }}>© 2007 - 2023 weddingwire.in</Typography>
        </Grid>
      </Grid>
    </React.Fragment>

  )
}
export default Login;
