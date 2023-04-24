import * as types from '../actions/actionTypes'

const initialState = {
    loading: false,
    currentUser: null,
    error: null,
    activeuser:{},
    alert:{open:false,severity:'info',message:''},

}; 
                const LoginReducer = (state = initialState, action) => {
                    // console.log(action.type)
                    switch (action.type) {
                        case types.SIGNUP_USER_START:
                        case types.LOGIN_USER_START:
                        // case types.LOGOUT_START:
                        case types.GOOGLE_SIGN_IN_START:
                        case types.FACEBOOK_SIGN_IN_START:
                          return {
                            ...state,
                            loading: true,
                          };
                        case types.SIGNUP_USER_SUCCESS:
                        case types.LOGIN_USER_SUCCESS:
                        case types.GOOGLE_SIGN_IN_SUCCESS:
                        case types.FACEBOOK_SIGN_IN_SUCCESS:
                          return {
                            ...state,
                            loading: false,
                            activeuser: action.payload,
                          };
                        // case types.LOGOUT_SUCCESS:
                        //   return {
                        //     ...state,
                        //     currentUser: null,
                        //   };
                        case types.SIGNUP_USER_ERROR:
                        case types.LOGIN_USER_ERROR:
                        // case types.LOGOUT_ERROR:
                        case types.GOOGLE_SIGN_IN_ERROR:
                        case types.FACEBOOK_SIGN_IN_ERROR:
                          return {
                            ...state,
                            loading: false,
                            error: action.payload,
                            alert:{open:true,severity:'info',message:''},
                          };
                        default:
                            return state;
                    }
                };
            
                export default LoginReducer;
               