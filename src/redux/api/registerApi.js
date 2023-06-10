import axios from "axios";
const url = 'https://event-app-22d17-default-rtdb.firebaseio.com/';
const endPoint = 'register.json';

export const registerUserApi = async (users) => {
    // console.log("users",users)
 
    try {
        const result = await axios.post(`${url}${endPoint}`,users);
        console.log(result.data);
       
    //    dispatch(loadFavImgsSuccess(result))
        return result
    } catch (error) {
        // dispatch(loadFavImgsError(error))
        return error
    }

}