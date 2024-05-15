import React from "react";
import classes from "./landingPage.module.css";
import Logo from "../assets/logo.svg";

function LandingPage(props) {
	function onSignIn() {
		props.signIn();
	}
	const homeImg =
		"https://res.cloudinary.com/dkxbadex/image/upload/v1633568453/healthApp/appImg.svg";

	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<div className={classes.logoContainer}>
					<div>
						<img src={Logo} alt="health_app_logo" />
					</div>
					<div className={classes.logo_text}>Summer body</div>
				</div>
				<div className={classes.text}>
					Stay Healthy By Monitoring
					<div>Your Health Regularly</div>
				</div>
				<button
					className={classes.signInBtn}
					onClick={console.log("clicked")}
					// {onSignIn}
				>
					Sign in
				</button>
			</div>
			<div>
				<img
					className={classes.mainImg}
					src={homeImg}
					alt="image_for_app_landing_page"
				/>
			</div>
		</div>
	);
}

export default LandingPage;
