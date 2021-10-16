import React, { useContext } from 'react';
import Navigation  from './Navigation';
import Main from './main';
import classes from './home.module.css';
import LandingPage from './landingPage';
import { useAuth0 } from "@auth0/auth0-react";



function Home() {
    const {isAuthenticated,loginWithRedirect  } = useAuth0();

    const  signInUser=()=>{
       ;loginWithRedirect()

    }
    

    const section = isAuthenticated ? <div className ={classes.container}>
        <Navigation></Navigation>
        <Main />
   
        </div>: <LandingPage signIn={signInUser}/>

    return (
        <div>
            {section}
        </div>
        
        
    )
}

export default Home
    