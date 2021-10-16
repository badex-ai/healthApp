import React from 'react';
import Logo from '../assets/logo-sm.svg';
import classes from './navigation.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from '../icons/dashboard';
import Events from '../icons/events';
import Achievement from '../icons/achievement';
import Settings from '../icons/settings';
import Activities from '../icons/activities';
import {NavLink,Link} from 'react-router-dom';






function Navigation(props) {
    const { user  } = useAuth0();
    console.log(user)
    
    const { logout } = useAuth0();
    return (
        <nav className={classes.container}>
            <div className={classes.navbox}>
                <div className={classes.logo}>
                    <img src={Logo} alt="logo for summer Body" />
                </div>
                <div className={classes.navs}>
                    <ul>
                        <li>
                            <NavLink exact activeClassName={classes.navActive} to="/dashboard" className={classes.navtag}>
                                <div>{<Dashboard/>}</div>
                                <div className={classes.nav_txt} >Dashboard</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="navActive" to="#" className={classes.navtag}>
                                <div><Activities/></div>
                                <div className={classes.nav_txt}>Activities</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="navActive" to="#" className={classes.navtag}>
                                <div>{<Achievement/>}</div>
                                <div className={classes.nav_txt}>Achievement</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="navActive" to="#" className={classes.navtag}>
                                <div>{<Events/>}</div>
                                <div className={classes.nav_txt}>Events</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="navActive" to="#" className={classes.navtag}>
                                <div><Settings/></div>
                                <div className={classes.nav_txt}>Settings</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={classes.profile}>
                    <div className={classes.profile_pic} >
                        <img className={classes.profile_pic} src={user.picture} alt="my_proile_picture" width="42px" />
                    </div>
                    <Link className={classes.linktag} to="/me">{user.name}</Link>

                </div>
                <button className={classes.logout} onClick={() =>logout({ returnTo: window.location.origin,})}>
                    Log Out
                </button>

            </div>
            
        </nav>
    )
}

export default Navigation
