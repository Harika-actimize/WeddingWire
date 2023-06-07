import * as types from './actionTypes';
import { getAuth,signInWithPopup } from "firebase/auth";
import { auth,facebookprovider} from '../../firebase';
//login details
export const facebookSignInStart = () => (
    {
        type: types.FACEBOOK_SIGN_IN_START,
    });
export const facebookSignInSuccess = (users) => ({
    type: types.FACEBOOK_SIGN_IN_SUCCESS,
    payload: users,
});
export const facebookSignInError = (error) => ({
    type: types.FACEBOOK_SIGN_IN_ERROR,
    payload: error,
});

export const facebookSignInInitaite = () => {
    return function (dispatch) {
        dispatch(facebookSignInStart());
        signInWithPopup(auth, facebookprovider)
            .then(async (res) => {
                // console.log(res);
                const user = res.user;
                dispatch(facebookSignInSuccess(user));
            })
            .catch((error) => dispatch(facebookSignInError(error.message)))
    }
}