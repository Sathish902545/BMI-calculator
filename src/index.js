import React from 'react';
import ReactDOM from 'react-dom/client';
//import RegFrm from './components/sample/RegFrm';
//import Home from './components/home/home';
//import App from './components/growingPlant/GrowingPlant';
//import UserCard from './components/sample/UserCard';
//import { AdviceApp } from './components/sample/advice';
//import Crud from './components/sample/Crud';
import App from './components/sample/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    {/* <Crud/> */}
    <App/>
    {/* <AdviceApp /> */}
    {/* <RegFrm/> */}
    {/* <Home/> */}
    {/* <App/> */}
    {/* <UserCard/> */}
  
  </React.StrictMode>
);


