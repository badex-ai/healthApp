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
import EventsPage from "./Pages/Events/EventsPage";
import AchievementsPage from "./Pages/Achievements/AchievementsPage";
import Settings from "./Pages/Settings/Settings";
import Activities from "./Pages/Activities/Activities";
import SportPage from "./Pages/Activities/SportPage";
import EventPage from "./Pages/Events/EventPage";
import TrainingPage from "./Pages/Training/trainingPage"
import Workout from "./Pages/Training/workout";
import TrainersPage from "./Pages/Trainers/trainersPage";
import TrainerPage from "./Pages/Trainers/trainerPage";

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
				element: <AchievementsPage />,
			},
			{
				path: "/training",
			element: <TrainingPage />,
			},
			{
				path: "/training/:workout",
				element: <Workout />,
			},
			{
				path: "/settings",
				element: <Settings />,
			},
			{
				path: "/events",
				element: <EventsPage />,
			},
			{
				path: "/events/:name",
				element: <EventPage />,
			},
			{
				path: "me",
				element: <Me />,
			},
			{
				path: "trainers",
				element: <TrainersPage/>,
			},
			{
				path: "/trainers/:name",
				element: <TrainerPage/>,
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
