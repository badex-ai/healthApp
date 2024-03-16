import React, { useState, useEffect, createContext } from "react";
import Navigation from "../../components/Navigation";
import Dashboard from "../../components/dashboard";
import classes from "./home.module.css";
import LandingPage from "../../components/landingPage";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../components/loading";
import UserContext from "../../context/user";

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

	const section = (
		// !loaded ? <div ><Loading/></div>:  (isAuthenticated ?

		<div className={classes.container}>
			<Navigation></Navigation>
			<Dashboard />
		</div>
	);
	//  : <LandingPage signIn={signInUser}/>)

	return (
		<div>
			{/* <UserContext.Provider value={user}> */}
			{section}
			{/* </UserContext.Provider> */}
		</div>
	);
}

export default Home;
