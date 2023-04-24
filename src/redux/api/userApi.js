import axios from "axios";
// import firebase from "firebase";
// import { useDispatch } from "react-redux";

// import {loadFavImgsSuccess,loadFavImgsError,loadFavImgsStart} from '../actions/userActions'
const url = 'https://event-app-22d17-default-rtdb.firebaseio.com/';
const lfiendPoint = 'favorites.json';
// const lciendpoint ='category.json';
const lpiendpoint ='products.json';
const ljiendpoint ='jewelry.json';

export const loadFavImgApi = async () => {
    

        try {
            const result = await axios.get(`${url}${lfiendPoint}`);
            // console.log(result);
           
        //    dispatch(loadFavImgsSuccess(result))

            return result
        } catch (error) {
            // dispatch(loadFavImgsError(error))
            return error
        }
    
}
// export const loadCatImgApi = async () => {
    

//     try {
//         const result = await axios.get(`${url}${lciendpoint}`);
//         console.log(result);
       
//     //    dispatch(loadFavImgsSuccess(result))

//         return result
//     } catch (error) {
//         // dispatch(loadFavImgsError(error))
//         return error
//     }

// }
export const loadJewImgApi = async () => {
    

    try {
        const result = await axios.get(`${url}${ljiendpoint}`);
        // console.log(result);
       
    //    dispatch(loadFavImgsSuccess(result))

        return result
    } catch (error) {
        // dispatch(loadFavImgsError(error))
        return error
    }

}


export const loadProImgApi = async () => {
    

    try {
        const result = await axios.get(`${url}${lpiendpoint}`);
        // console.log(result);
       
    //    dispatch(loadFavImgsSuccess(result))

        return result
    } catch (error) {
        // dispatch(loadFavImgsError(error))
        return error
    }

}

