import classes from './me.module.css';
import Navigation from './Navigation';
import Profile from './profile'

import React from 'react'

function me() {
    return (
        <div className={classes.container}>
            <Navigation/>
            <Profile/>
            
        </div>
    )
}

export default me
