import React from 'react';
// import Logo from '../assets/logo-health'
import classes from './navigation.module.css'
import { useAuth0 } from "@auth0/auth0-react";


function Navigation() {
    const { logout } = useAuth0();
    return (
        <nav className={classes.container}>
            <div className={classes.navbox}>
                <div className={classes.logo}>
                    LOGO
                </div>
                <div className={classes.navs}>
                    <ul>
                        <li className={classes.nav}>
                            <div></div>
                            <div>Dashboard</div>
                        </li>
                        <li className={classes.nav}><div></div>
                            <div>Activities</div></li>
                        <li className={classes.nav}>
                            <div></div>
                            <div>Achievement</div>
                        </li>
                        <li className={classes.nav}>
                            <div></div>
                            <div>Events</div>
                        </li>
                        <li className={classes.nav}>
                            <div></div>
                            <div>Settings</div>
                        </li>
                    </ul>
                </div>
                <div className={classes.profile}>
                    <div className={classes.profile_pic} > imag</div>
                    <div>Shamsudeen Badamasi</div>

                </div>
                <button className="btn btn-danger btn-block" onClick={() =>logout({ returnTo: window.location.origin,})}>
                    Log Out
                </button>

            </div>
            
        </nav>
    )
}

export default Navigation
