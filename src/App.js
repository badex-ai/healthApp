import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './components/home';
import Auth from './components/auth';
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import ProtectedRoute from './auth/protectedRoute';
import UserProfile from './components/userProfile';




function App() {
  return (
    // <Auth/>
    // <Home/>
    <Router>
     <Auth0ProviderWithHistory>
     <Switch>
         
         <Route path="/" exact component = {Home}/> 
         {/* <ProtectedRoute path="/home"  component = {Home} exact/>  */}
         <ProtectedRoute path="/me"  component = {UserProfile} exact/> 
         <Route to="/" />
       
     </Switch>
     </Auth0ProviderWithHistory>
     </Router>
  );
}

export default App;
