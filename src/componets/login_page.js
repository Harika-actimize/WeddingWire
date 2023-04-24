import * as React from 'react'
import '../App.css'
// import { register } from "./teststyle";
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp'
import TextField from '@mui/material/TextField'
import { Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppleIcon from '@mui/icons-material/Apple'
import GoogleIcon from '@mui/icons-material/Google';
import { facebookprovider, googleprovider, auth } from '../firebase';
import { getAuth } from "firebase/auth";
// import {auth} from 'firebase/auth';
import { signInWithPopup } from "firebase/auth";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { LoginError, loginInitiate } from '../redux/actions/userActions';
import welcomepage from './welcomepage';
import { LoginStart, LoginSuccess } from '../redux/actions/userActions'
import { signInWithEmailAndPassword } from "firebase/auth";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Icon } from '@iconify/react';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const [showalert, setShowalert] = useState(false)

  const { email, password } = state
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const activeuser = useSelector((state) => state.userData.activeuser);
  // console.log("activeuser",activeuser)

  const goToSignup = () => {
    navigate("/signup");

  };
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/Home");
  //   }
  // }, [currentUser]);

  // const loadData =async()=>{
  // 	dispatch(loadJewImgsStart())
  // 	const result = await loadJewImgApi()
  // 	if(result.status === 200){
  // 		dispatch(loadJewImgsSuccess(result.data))
  // 	}else{
  // 		dispatch(loadJewImgsError(result))
  // 	}
  // }

  const handleFBSignIn = () => {
    // alert("hello")
    // dispatch(fbSignInInitiate());
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

  const handleGoogleSignIn = (res) => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = googleprovider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = googleprovider.credentialFromError(error);
        // ...
      });
  };

  const handleSubmit = async e => {
    // dispatch(LoginSuccess(login));
    console.log('??????????', state)
    // alert("................")
    e.preventDefault();
    if (email == '' || password == '') {
      dispatch({ type: 'ALERT', payload: { open: true, severity: 'error', message: "please give email and password" } })

    }
    dispatch(LoginStart());
    try {
      let login = await signInWithEmailAndPassword(auth, email, password)
      console.log("login", login)
      dispatch(LoginSuccess(login));
      if (email || password) {

        // const catdata = Object.keys(catimagdata)
        console.log("statee", state)
        navigate('/welcomepage', { state: state.email })

      }
    }

    catch (error) {
      // dispatch(LoginError());
      //   if(email == "" || password == ""){
      // <Stack sx={{ width: '100%' }} spacing={2}>

      setShowalert(true)
      setTimeout(() => setShowalert(false), 5000);
      console.log("///////////", error);
    };

    setState({ email: '', password: '' })
    // .catch((error) => dispatch(LoginError(error.message)));

    // dispatch(loginInitiate(email, password))
    // let login = loginInitiate( email, password)
    // console.log("login",login)
    // console.log(" email, password,name", email, password)

  }

  const handleChange = e => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <React.Fragment>
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

      <Grid container sx={{ maxWidth: '860px', margin: 'auto', maxHeight: '800px', position: "relative",border:'1px solid grey' }} >
            <Grid xs= {5} className="layout-auth-cover pure-u-2-5">
              <img
                // component="img"
                width={'90%'}
                height={'100%'}
                alt="The house from the offer."
                src="https://cdn1.weddingwire.in/assets/img/layer-alta/default_en-IN.jpg"
                style={{objectFit: "cover"}}
              ></img>
            </Grid>
            <Grid xs={7} sx={{ textAlign: "center", alignItems: "center",marginTop:'50px' }}>
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
                    <Icon icon="icon-park:facebook" style={{ marginRight: "auto" }}/>
                    <span style={{ marginRight: "auto", fontWeight:600, fontSize: "12px"}}>Sign in with Facebook</span>
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
                   <Icon icon="flat-color-icons:google" style={{ marginRight: "auto" }}/>
                   <span style={{ marginRight: "auto", fontWeight:600, fontSize: "12px"}}>Sign in with Google</span>
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
                    <Icon icon="logos:apple"  style={{ marginRight: "auto" }}/>
                    <span style={{ marginRight: "auto", fontWeight:600, fontSize: "12px"}}>Sign in with Apple</span>
                  </Button>
              <Typography sx={{ mt: 1, fontWeight: 500, fontSize: "12px"}}>Or log in with your email</Typography>
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
                  onChange={handleChange}
                  label="Your email"
                  variant="standard"
                />
                <TextField
                  name="password"
                  sx={{ mt: 1 }}
                  className="pure-u-1"
                  value={password}
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
          <Grid xs={12} sx={{textAlign:'center'}}>
          <Typography sx={{fontSize:'12px'}}>Sign up with WeddingWire Register your business Contact Us Terms & Privacy Do Not Sell My Personal Information About Us</Typography>
          <Typography sx={{fontSize:'12px'}}>Other countries: Spain France Italy United Kingdom Ireland Portugal Mexico Chile Argentina Brazil Colombia Peru Uruguay Canada United States</Typography>
        <Typography sx={{fontSize:'12px'}}>© 2007 - 2023 weddingwire.in</Typography>
       </Grid>
        </Grid>
    </React.Fragment>

  )
}
export default Login;
