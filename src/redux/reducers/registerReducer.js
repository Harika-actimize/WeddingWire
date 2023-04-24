import * as types from '../actions/actionTypes';
import {registerUserApi} from '../api/registerApi'
const initialState = {
    register: {
        users: [],
        loading: false,
           },
};
const registerUserReducer = (state = initialState.register, action)=>{
    switch (action.type) {
            case types.REGISTER_USER_START:
                console.log('reducerAction',action);
                console.log('payload',action.payload);
                console.log('reducerType',action.type);
                registerUserApi(action.payload);
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