import React, { useState, useEffect, createContext } from "react";
import Navigation from "../../components/Navigation";
import Dashboard from "../../components/dashboard";
import classes from "./home.module.css";
import LandingPage from "../../components/landingPage";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../components/loading";
import UserContext from "../../context/user";
import { Outlet } from "react-router-dom";

function Home() {
	// const { isAuthenticated, loginWithRedirect, isLoading, user } = useAuth0();
	// user
	// console.log(user, "user");
	// console.log(createContext())

	// let [loaded, setLoaded] = useState(false);

	// useEffect(() => {
	// 	if (!isLoading) {
	// 		setLoaded(true);
	// 	}
	// }, [isLoading]);

	// const signInUser = () => {
	// 	loginWithRedirect();
	// };

	// const section = (
	// !loaded ? <div ><Loading/></div>:  (isAuthenticated ?

	// <div className={classes.container}>
	// 	<Navigation></Navigation>
	// 	<div><Outlet/></div>
	// 	{/* <Dashboard /> */}
	// </div>

	// );
	//  : <LandingPage signIn={signInUser}/>)

	return (
		<>
			{/* <UserContext.Provider value={user}> */}
			<Dashboard />
			{/* </UserContext.Provider> */}
		</>
	);
}

export default Home;
