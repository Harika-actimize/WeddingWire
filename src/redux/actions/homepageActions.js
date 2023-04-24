import * as types from './actionTypes';
import { homePageApi } from '../api/homepageApi';
//get fav images 
export const loadHomePageStart = () => ({
//   console.log("homepageactions")
    type: types.GET_HOME_PAGE_START
});
export const loadHomePageSuccess = (data) => ({
    type: types.GET_HOME_PAGE_SUCCESS,
    payload: data,
});
    
export const loadHomePageError = (error) =>({
    type:types.GET_HOME_PAGE_ERROR,
    payload: error,
});
    
export const getHomePageInitiate = () => {
    // alert('get user in acation page');
    return function (dispatch) {
        dispatch(loadHomePageStart());
        homePageApi()
            .then(async (res) => {
                dispatch(loadHomePageSuccess(res));
            })
            .catch((error) => dispatch(loadHomePageError(error.message)))
    }
}


	