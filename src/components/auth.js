import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import classes from './auth.module.css';
import Loading from './loading'

function Auth(props) {
  const { isLoading } = useAuth0();
  let loading = isLoading? <Loading/> : null 
    
  

  
        const { loginWithRedirect } = useAuth0();
  return (
    
      <div className={classes.container}>
        <button className={classes.authbtn} onClick={() => loginWithRedirect()}>
          Log In
        </button>
       
      <div>
        {loading}
      </div>
      </div>
    
    )
}

export default Auth
