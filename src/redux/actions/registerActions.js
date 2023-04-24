import * as types from './actionTypes';
// import {registerUserApi} from '../api/registerApi';
export const registerStart =  (users) =>(
    console.log(users),
    {
    
    type:types.REGISTER_USER_START,
    payload: users,
});
export const registerSuccess =  () =>({
    type:types.REGISTER_USER_SUCCESS,
    
});
export const registerError = (error) =>({
    type:types.REGISTER_USER_ERROR,
    payload: error,
});

// export const manualRegisterUserInitiate = (user) => {
//     console.log('user',user);
//     return function (dispatch) {
//         dispatch(registerStart(user));
//         registerUserApi(user)
//             .then(async (res) => {
//                 dispatch(registerSuccess(res));
//             })
//             .catch((error) => dispatch(registerError(error.message)))
//     }
// }
