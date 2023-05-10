import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Areyouvendor from './componets/Areyouvendor';
import Innerpage from './componets/InnerPage';
import Innerpagevennues from './componets/Innerpagevennues';
import Login from "./componets/login_page";
import InteractiveList from './componets/Navbar';
import Pages from './componets/Pages';
import Signup from "./componets/signup";
import Welcomepage from './componets/welcomepage';
import { getHomePageInitiate } from './redux/actions/homepageActions';
import { LoginSuccess } from './redux/actions/userActions';



function App() {
  const dispatch = useDispatch();

	useEffect(() => {
		// alert("homepage ui");
    let user = localStorage.getItem("user")
    if(user) {
      dispatch(LoginSuccess(JSON.parse(user)));
      console.log("userrrrrrrr",user)
    }
		dispatch(getHomePageInitiate());
	}, []);

  return (
    <>
    {/* <ColumnsGrid/> */}
    {/* <Notification/> */}
    {/* <Homepage/> */}
     <Routes>
          <Route path="/" element={ <Pages/> }/>
          <Route path="signup"  exact element={ <Signup/> } />
          <Route path="signup"  exact element={ <InteractiveList/> } />
          <Route path="login"  exact element={ <Login/> } />
          <Route path="login"  exact element={ <InteractiveList/> } />
          <Route path='welcomepage' exact element={<Welcomepage/>}/>
          <Route path='weddingvenues' exact element={<Innerpagevennues/>}/>
          <Route path='weddingvenues/mumbai' exact element={<Innerpage/>}/>
          <Route path='areyouvendor' exact element={<Areyouvendor/>}/>
        </Routes>
    </>
    // <div className="App">
    //   <header className="App-header">
    //   <Login/>
    //   {/* <Signup/> */}
    //   </header>
     
    // </div>
  );
}

export default App;

