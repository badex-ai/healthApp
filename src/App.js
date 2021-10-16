import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './components/home';
import Auth from './components/auth';
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import ProtectedRoute from './auth/protectedRoute';
// import Auth from './components/loading';
import Me from './components/me';
import { createContext } from 'react';
import { useAuth0 } from "@auth0/auth0-react";





function App() {
  
  const { user } = useAuth0();


  const UserContext = createContext()
  console.log(user)
  
  return (
    // <Auth/>
    // <Home/>
    <Router>
     <Auth0ProviderWithHistory>
     
     <UserContext.Provider value={user}>
     <Switch>
         <Route path="/dashboard" exact component = {Home}/> 
         {/* <ProtectedRoute path="/home"  component = {Home} exact/>  */}
         <Route path="/me"  component = {Me} exact/> 
         <Route to="/" component={Auth} />
     </Switch>
     </UserContext.Provider>
       
     
     </Auth0ProviderWithHistory>
     </Router>
  );
}

export default App;
