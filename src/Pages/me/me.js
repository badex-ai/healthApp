import classes from './me.module.css';
import Navigation from '../../components/Navigation';
import Profile from '../../components/profile';
import { useAuth0 } from "@auth0/auth0-react";
import UserContext1 from '../../context/user';
import { useContext } from 'react';


import React from 'react'
    

function Me() {
    const {user} = useAuth0();
    console.log(user)

   


    return (
        

        <div className={classes.container}>
            <Navigation/>
            <Profile/>
            
        </div>

       
    )
}

export default Me
