import React from "react";
import { database,dbRef } from '../firebase';
import { useState ,useEffect } from "react";
// import {Card,Button} from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BrowserRouter } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import {useNavigate } from 'react-router-dom';
import {getUserInitiate} from '../redux/actions/homepageActions';
import {homePageApi} from '../redux/api/homepageApi';
import {FreeMode} from "swiper";
import{Swiper,SwiperSlide} from 'swiper/react';
// import API from '../redux/api/API'
import "swiper/css";
import "swiper/css/free-mode";
// import { getDataAxios } from "../redux/reducers/data";
 

// const bull = (
// 	<Box
// 	  component="span"
// 	  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
// 	>
// 	  •
// 	</Box>
//   );
const Homepage = () => {
	// const history = useNavigate(); 
	// const [contacts, setContacts] = useState({})

	// const api = new API();
	// const endPoints = 'data.json';
	const dispatch = useDispatch();
	const homepagedata = useSelector((state) => state.homepagedata);
        // console.log('homepagedata',homepagedata);
	// const data = Object.keys(homepagedata)
	// console.log("...........",Object.values(homepagedata));

	useEffect(() => {
		alert("homepage ui")
		dispatch(getUserInitiate());
	  }, []);
	// const loadData =async()=>{
	// 	dispatch(loadHomePageStart())
	// 	const result = await homePageApi()
	// 	// const data = result.data
	// 	console.log(result)
	// 	if(result.status === 200){
	// 		dispatch(loadHomePageSuccess(result.data))
	// 	}else{
	// 		dispatch(loadHomePageError(result))
	// 	}
	// }
	
	// const goToHome=(data)=>{
	// 	dispatch(selecteditem(data))
	// 	let catId = catimagdata[data].category
	// 	history("jewelry/"+catId);
	// }; 
		

	// console.log("/////////////",catdata)
	// result.map((itmes)=>{
			
	// })
	// console.log("/////////////",data);
	return(
		<>
		
		<div className="container py-4 px-4 justify-content-center">
			{/* <h2 style={{fontFamily: "cormorant,serif",}}>Top Sale Category</h2> */}
			<Swiper
			   freeMode={true}
			   grabCursor={true}
			   modules={[FreeMode]}
			   className="mySwiper"
			  breakpoints={{
				0:{
					slidesPerView:1,
					spaceBetween:10,
				},
				480:{
					slidesPerView:2,
					spaceBetween:10,
				},
				768:{
					slidesPerView:3,
					spaceBetween:15,
				},
				1024:{
					slidesPerView:4,
					spaceBetween:15,
				},
				1280:{
					slidesPerView:4,
					spaceBetween:20,
				}

			  }}
			   >
				   {/* <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
					   <Box>
				   <Card sx={{backgroundColor:"blue",width:"10%",height:100,mr:5}}><Typography>Easily Plan Your Wedding</Typography></Card>
				   <Card sx={{backgroundColor:"blue",width:"10%",height:100}}><Typography>Easily Plan Your Wedding</Typography></Card>
	</Box> */}
	<Box>
			{data.map((itmes,index)=>{	
					console.log("catdata",itmes);
					return(
						<SwiperSlide key={index}>
							<Card>
								<img width="640px"  variant="top" src={homepagedata[itmes].main_image} />
								<Typography variant="h6">{homepagedata[itmes].name}</Typography>	
								<StarIcon></StarIcon><Typography >{homepagedata[itmes].cityname}</Typography>
								<Typography>{homepagedata[itmes].package_amount}</Typography>							
							</Card>
	{/* <img variant="top" /> */}
			 </SwiperSlide>
					)
                  
				})}
				</Box>
				</Swiper>
			   
		</div> 
		
		</>
	)
			}
export default Homepage;

//App.js
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter   } from "react-router-dom";
// import App from "./App";
// import { Provider } from "react-redux";
// import {store} from "../src/redux/store"

// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>,
//     </BrowserRouter>
//   </React.StrictMode> 
// );