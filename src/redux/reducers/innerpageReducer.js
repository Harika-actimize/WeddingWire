import * as types from '../actions/actionTypes';
// import { homePageApi } from '../api/homepageApi';
// const initialState = {
//     favimages: {},
//     loading:false,
//     error:null
// };
const initialState = {
    getInnerPageData: {
        users: [],
        loading: false,
    },
};

const loadInnerPageReducer = ( state = initialState.getInnerPageData, action)=>{
   
    // console.log(action)
    switch (action.type) {
        case types.GET_INNER_PAGE_START:
            // alert("homepage reducer file");
            return {
                ...state,
                loading: true
            };
        case types.GET_INNER_PAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case types.GET_INNER_PAGE_ERROR:
           return {
                ...state,
                loading: false,
                error: action.payload
            };
        
        default:
            return state;
        
 }
};
export default loadInnerPageReducer;