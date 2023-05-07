import * as types from './actionTypes';
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

 