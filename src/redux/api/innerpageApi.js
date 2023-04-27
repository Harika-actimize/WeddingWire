// import axios from "axios";
// const url = 'https://event-app-22d17-default-rtdb.firebaseio.com/';
// const endPoints = 'data.json';

//     export const homePageApi = async () => {
//     //   alert('home api call');
//       return new Promise(async (resolve, reject) => {
//           try {
//               const result = await axios.get(`${url}${endPoints}`);
//               console.log('result',result);
//               resolve(result.data);
//               return result.data;
//           } catch (error) {
//               reject(error);
//           }
//       });
//   }
import API from '../../commonApi/API';
import { axios } from 'axios';
const api = new API();
const endPoints = 'innerpagedata.json';



    export const innerPageApi = async () => {
            return new Promise(async (resolve, reject) => {
              try {
                const result = await api.get(`${endPoints}`);
                resolve(result);
              } catch (error) {
                reject(error);
              }
            });
          }


