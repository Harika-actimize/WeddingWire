import LoginReducer from './userReducer'
import loadHomePageReducer from './homepageReducer'
import registerUserReducer from './registerReducer';
import { combineReducers } from "redux";
const rootRducer = combineReducers({
    userData: LoginReducer,
    registerdata:registerUserReducer,
    homepagedata:loadHomePageReducer,

    // signupdata:signUpReducer,
    // logindata:loginReducer,
    // googledata:googleSignInReducer,
});
export default rootRducer;