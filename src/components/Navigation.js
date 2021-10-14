import React from 'react';
import Logo from '../assets/logo-sm.svg';
import classes from './navigation.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from '../icons/dashboard';
import Events from '../icons/events';
import Achievement from '../icons/achievement';
import Settings from '../icons/settings';
import Activities from '../icons/activities';
import Profilepic from '../assets/profile-pic.png'




function Navigation() {
    const { logout } = useAuth0();
    return (
        <nav className={classes.container}>
            <div className={classes.navbox}>
                <div className={classes.logo}>
                    <img src={Logo} alt="logo for summer Body" />
                </div>
                <div className={classes.navs}>
                    <ul>
                        <li className={classes.nav}>
                            <div>{<Dashboard/>}</div>
                            <div className={classes.nav_txt} >Dashboard</div>
                        </li>
                        <li className={classes.nav}>
                            <div><Activities/></div>
                            <div className={classes.nav_txt}>Activities</div>
                        </li>
                        <li className={classes.nav}>
                            <div>{<Achievement/>}</div>
                            <div className={classes.nav_txt}>Achievement</div>
                        </li>
                        <li className={classes.nav}>
                            <div>{<Events/>}</div>
                            <div className={classes.nav_txt}>Events</div>
                        </li>
                        <li className={classes.nav}>
                            <div><Settings/></div>
                            <div className={classes.nav_txt}>Settings</div>
                        </li>
                    </ul>
                </div>
                <div className={classes.profile}>
                    <div className={classes.profile_pic} >
                        <img src={Profilepic} alt="my_proile_picture" width="42px" />
                    </div>
                    <div>Shamsudeen Badamasi</div>

                </div>
                <button className={classes.logout} onClick={() =>logout({ returnTo: window.location.origin,})}>
                    Log Out
                </button>

            </div>
            
        </nav>
    )
}

export default Navigation
