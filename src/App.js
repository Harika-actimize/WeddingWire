import { Routes,Route } from 'react-router-dom';
import Login from "./componets/login_page";
import Signup from "./componets/signup";
import Welcomepage from './componets/welcomepage';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Notification from './componets/Notification';
import Pages from './componets/Pages'
import ColumnsGrid from './componets/test1'
import Innerpage from './componets/InnerPage';
import Areyouvendor from './componets/Areyouvendor';
import Innerpagevennues from './componets/Innerpagevennues';
import InteractiveList from './componets/Navbar';


function App() {
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

