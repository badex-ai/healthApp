import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LandingPage from './landingPage';
import classes from './auth.module.css';

import Loading from './loading'

function Auth(props) {

    const { user,isLoading,isAuthenticated,loginWithRedirect} = useAuth0();


    let [loaded, setLoaded] = useState(false);

    useEffect(() => {
      if(!isLoading){
        setLoaded(true)
      }
      
    }, [isLoading])
  

  
  
    

    
    
  console.log(isLoading)
    const section = !loaded ? "loading" :  (isAuthenticated ? "Authenticated" : <LandingPage/>)
     
    return (
        <div className={classes.container}>
            {section}
        </div>
        
        
      
      
        
    )
    
    
}

export default Auth
