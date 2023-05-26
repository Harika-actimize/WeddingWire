import * as types from '../actions/actionTypes';
const initialState = {
    googleSignInDetails: {
        activeuser: null,
        loading: false,
    },
};

const googleSignInReducer = (state = initialState.googleSignInDetails, action) => {
    switch (action.type) {
        case types.GOOGLE_SIGN_IN_START:
            return {
                ...state,
                loading: true,
            };
        case types.GOOGLE_SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                activeuser:action.payload,
            };
        case types.GOOGLE_SIGN_IN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
export default googleSignInReducer;