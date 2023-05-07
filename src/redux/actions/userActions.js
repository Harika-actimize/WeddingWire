import * as types from './actionTypes';
import { facebookprovider , googleprovider,auth} from '../../firebase';
import {getAuth} from "firebase/auth";
// import {auth} from 'firebase/auth';
// import {  signInWithPopup } from "firebase/auth";
import { Await } from 'react-router-dom';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { async } from '@firebase/util';
import {signInWithPopup,signInWithEmailAndPassword} from "firebase/auth";
// import { type } from '@testing-library/user-event/dist/type';

// signup

const signupStart = () => ({
    type: types.SIGNUP_USER_START,
  });
  const signupSuccess = ({ user, additionalData }) => ({
    type: types.SIGNUP_USER_SUCCESS,
    payload: { user, additionalData },
  });
  
  const signupError = (error) => ({
    type: types.SIGNUP_USER_ERROR,
    payload: error,
  });

//   login
 
export const LoginStart = (users) => (
    {
        type: types.LOGIN_USER_START,
        payload: users,
    });
export const LoginSuccess = (data) => ({
    type: types.LOGIN_USER_SUCCESS,
    payload: data

});
export const LoginError = (error) => ({
    type: types.LOGIN_USER_ERROR,
    payload: error,
});

export const Logout = () => ({
  type: types.LOGOUT,
});

// ALERT
export const alert = (alert) =>({
  type:types.ALERT,
  payload:alert
});

// googlesignup

const googleSignInStart = () => ({
    type: types.GOOGLE_SIGN_IN_START,
  });
  
  const googleSignInSuccess = (user) => ({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
  });
  
  const googleSignInFail = (error) => ({
    type: types.GOOGLE_SIGN_IN_ERROR,
    payload: error,
  });

// facebook signup

  const fbSignInStart = () => ({
    type: types.FACEBOOK_SIGN_IN_START,
  });
  
  const fbSignInSuccess = (user) => ({
    type: types.FACEBOOK_SIGN_IN_SUCCESS,
    payload: user,
  });
  
  const fbSignInFail = (error) => ({
    type: types.FACEBOOK_SIGN_IN_ERROR,
    payload: error,
  });



//signing Up details
export const createSignUpStart = (users) => (
    {
        type: types.SIGNUP_USER_START,
        payload: users,
    });
export const createSignUpSuccess = () => ({
    type: types.SIGNUP_USER_SUCCESS,

});
export const createSignUpError = (error) => ({
    type: types.SIGNUP_USER_ERROR,
    payload: error,
});

// const loadData =async()=>{
//     dispatch(loadJewImgsStart())
//     const result = await loadJewImgApi()
//     if(result.status === 200){
//         dispatch(loadJewImgsSuccess(result.data))
//     }else{
//         dispatch(loadJewImgsError(result))
//     }
// }


export const loginInitiate = async (email, password) => {

 let login = await signInWithEmailAndPassword(auth,email, password)
    console.log("login",login)
    return async function (dispatch) {
      dispatch(LoginStart());
          // console.log("////////////",res)
          dispatch(LoginSuccess(login));
     console.log("//////////",LoginSuccess(login))

        }
        
        // .catch((error) => dispatch(LoginError(error.message)));
    };
  
    
  export const registerInitiate = async (email, password,displayName) => {
    
   let register= await createUserWithEmailAndPassword(auth, email, password,displayName)
   console.log(register,"userrrrrrrrrrrrrrrr")
    
    // return  function  (dispatch) {
    //   dispatch(signupStart());
    //   dispatch(signupSuccess({ register, additionalData: { displayName } }));
          
    //     }
        
    };
  

  export const fbSignInInitiate = () => {
    return function (dispatch) {
    // alert("haiiiiiiiiiii")
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
  }
}

export const googleSignInInitiate = () => {
    return function (dispatch) {
      dispatch(googleSignInStart());
      signInWithPopup(auth,googleprovider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user));
      })
      .catch((error) => dispatch(googleSignInFail(error.message)));
  
}
}