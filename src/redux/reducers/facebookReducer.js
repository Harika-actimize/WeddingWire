import * as types from '../actions/actionTypes';
const initialState = {
    facebookSignInDetails: {
        activeuser: null,
        loading: false,
    },
};

const facebookSignInReducer = (state = initialState.facebookSignInDetails, action) => {
    switch (action.type) {
        case types.FACEBOOK_SIGN_IN_START:
            return {
                ...state,
                loading: true,
            };
        case types.FACEBOOK_SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                activeuser:action.payload,
            };
        case types.FACEBOOK_SIGN_IN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
export default facebookSignInReducer;