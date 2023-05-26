import * as types from './actionTypes';
import { getAuth,signInWithPopup } from "firebase/auth";
import { auth,googleprovider} from '../../firebase';
//login details
export const googleSignInStart = () => (
    {
        type: types.GOOGLE_SIGN_IN_START,
    });
export const googleSignInSuccess = (users) => ({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: users,
});
export const googleSignInError = (error) => ({
    type: types.GOOGLE_SIGN_IN_ERROR,
    payload: error,
});

export const googleSignInInitaite = () => {
    return function (dispatch) {
        dispatch(googleSignInStart());
        signInWithPopup(auth, googleprovider)
            .then(async (res) => {
                console.log(res);
                const user = res.user;
                dispatch(googleSignInSuccess(user));
            })
            .catch((error) => dispatch(googleSignInError(error.message)))
    }
}