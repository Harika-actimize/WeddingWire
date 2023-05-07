import * as types from '../actions/actionTypes';
const initialState = {
    register: {
        users: [],
        loading: false,
           },
};
const registerUserReducer = (state = initialState.register, action)=>{
    switch (action.type) {
            case types.REGISTER_USER_START:
                return {
                    ...state,
                    loading: true,
                };
            case types.REGISTER_USER_SUCCESS:
                return {
                    ...state,
                    loading: false ,
                };
            case types.REGISTER_USER_ERROR:
                return {
                    ...state,
                    loading: false ,
                    error:action.payload
                };
            default:
            return state;
    }

}
export default registerUserReducer;