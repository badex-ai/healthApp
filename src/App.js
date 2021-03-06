import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './Pages/Home/home';
import Auth from './components/auth';
import ProtectedRoute from './auth/protectedRoute';
// import Auth from './components/loading';
import Me from './Pages/me/me';
import { createContext} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useState,useEffect } from 'react';
// import UserContext from './context/user';





function App() {
  

 


   
  
  return (
    
    <Router>
     
     
     {/* <UserContext.Provider value={cred}> */}
     <Switch>
         <Route path="/" exact component = {Home}/> 
         {/* <ProtectedRoute path="/home"  component = {Home} exact/>  */}
         <Route path="/me"  component = {Me} exact/> 
         {/* <Route to="/" component={Auth} /> */}
     </Switch>
     {/* </UserContext.Provider> */}
       
     
     </Router>
  );
}

export default App;
