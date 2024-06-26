import Logo from "../assets/logo-sm.svg";
import classes from "./navigation.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "../icons/dashboard";
import Events from "../icons/events";
import Achievement from "../icons/achievement";
import Settings from "../icons/settings";
import Activities from "../icons/activities";
import { NavLink, Link } from "react-router-dom";
import React, { useContext } from "react";
import TrainersPage from "../Pages/Trainers/trainersPage";
import UserContext from "../context/user";
// useContext

function Navigation(props) {
	// const { logout,user } = useAuth0();

	return (
		// <nav className={classes.container}>
		<nav className={classes.navbox}>
			<div className={classes.logo}>
				<Link to="/home">
					<img src={Logo} alt="logo for summer Body" />
				</Link>
			</div>
			<div className={classes.navs}>
				<ul>
					<li>
						<NavLink
							exact
							// activeClassName={classes.navActive}

							to="/home"
							// className={classes.navtag}
							className={({ isActive }) =>
								isActive ? `${classes.navActive}` : `${classes.navtag}`
							}
						>
							<div>{<Dashboard />}</div>
							<div className={classes.nav_txt}>Dashboard</div>
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="navActive"
							to="/activities"
							className={({ isActive }) =>
								isActive ? `${classes.navActive}` : `${classes.navtag}`
							}
						>
							<div>
								<Activities />
							</div>
							<div className={classes.nav_txt}>Activities</div>
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="navActive"
							to="/training"
							className={({ isActive }) =>
								isActive ? `${classes.navActive}` : `${classes.navtag}`
							}
						>
							<div>
								<Activities />
							</div>
							<div className={classes.nav_txt}>Training</div>
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="navActive"
							to="/trainers"
							className={({ isActive }) =>
								isActive ? `${classes.navActive}` : `${classes.navtag}`
							}
						>
							<div>
							<Activities />
							</div>
							<div className={classes.nav_txt}>Trainers</div>
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="navActive"
							to="/achievements"
							className={({ isActive }) =>
								isActive ? `${classes.navActive}` : `${classes.navtag}`
							}
						>
							<div>{<Achievement />}</div>
							<div className={classes.nav_txt}>Achievements</div>
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="navActive"
							to="/events"
							className={({ isActive }) =>
								isActive ? `${classes.navActive}` : `${classes.navtag}`
							}
						>
							<div>{<Events />}</div>
							<div className={classes.nav_txt}>Events</div>
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="navActive"
							to="/settings"
							className={({ isActive }) =>
								isActive ? `${classes.navActive}` : `${classes.navtag}`
							}
						>
							<div>
								<Settings />
							</div>
							<div className={classes.nav_txt}>Settings</div>
						</NavLink>
					</li>
				</ul>
			</div>
			<div className={classes.profile}>
				<div className={classes.profile_pic}>
					<img
						className={classes.profile_pic}
						src=""
						// {user.picture}
						alt="my_profile_picture"
						width="42px"
					/>
				</div>
				<Link className={classes.linktag} to="/me">
					{/* {user.name} */}
					Aliu
				</Link>
			</div>
			<button
				className={classes.logout}
				onClick={
					console.log("me")
					// () =>
					//  logout({ returnTo: window.location.origin })
				}
			>
				Log Out
			</button>
		</nav>
		/* </nav> */
	);
}

export default Navigation;
