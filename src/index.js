import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/CircularStd-Medium.otf";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home/home";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import Me from "./Pages/me/me";
import Events from "./Pages/Events/Events";
import Achievements from "./Pages/Achievements/Achievements";
import Settings from "./Pages/Settings/Settings";
import Activities from "./Pages/Activities/Activities";
import SportPage from "./Pages/Activities/SportPage";

// import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		// errorElement: <ErrorPage />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/activities",
				element: <Activities />,
			},
			{
				path: "/activities/:sportname",
				element: <SportPage />,
			},
			{
				path: "/achievements",
				element: <Achievements />,
			},
			{
				path: "/settings",
				element: <Settings />,
			},
			{
				path: "/events",
				element: <Events />,
			},
			{
				path: "me",
				element: <Me />,
			},
		],
	},
	// {
	// 	path: "/Home",
	// 	element: <Home />,
	// },
	// {
	// 	path: "/activities",
	// 	element: <Home />,
	// },
	// {
	// 	path: "/events",
	// 	element: <Events />,
	// },
	// {
	// 	path: "/acheivements",
	// 	element: <Achievements />,
	// },
	// {
	// 	path: "/settings",
	// 	element: <Settings />,
	// },
	// {
	// 	path: "me",
	// 	element: <Me />,
	// },
]);

// ReactDOM.render(
// 	<React.StrictMode>
// 		{/* <Auth0ProviderWithHistory> */}
// 		<App />
// 		{/* </Auth0ProviderWithHistory> */}
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
