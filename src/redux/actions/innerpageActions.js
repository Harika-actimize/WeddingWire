import * as types from './actionTypes';
import { innerPageApi} from '../api/innerpageApi'
//get fav images 
export const loadInerPageStart = () => ({
//   console.log("homepageactions")
    type: types.GET_INNER_PAGE_START
});
export const loadInnerPageSuccess = (data) => ({
    type: types.GET_INNER_PAGE_SUCCESS,
    payload: data,
});
    
export const loadInnerPageError = (error) =>({
    type:types.GET_INNER_PAGE_ERROR,
    payload: error,
});
    
export const getInnerPageInitiate = () => {
    // alert('get user in acation page');
    return function (dispatch) {
        dispatch(loadInerPageStart());
        innerPageApi()
            .then(async (res) => {
                dispatch(loadInnerPageSuccess(res));
            })
            .catch((error) => dispatch(loadInnerPageError(error.message)))
    }
}


	