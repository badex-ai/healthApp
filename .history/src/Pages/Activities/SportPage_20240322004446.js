import React, { useState } from "react";
import Header from "../../components/header";
import SportCard from "../../components/sportCard";
import { Link, Outlet, useParams, Navigate } from "react-router-dom";
import Search from "../../components/search";
import Selector from "../../components/selector";
import MapModal from "../../components/mapModal";

const SportPage = () => {

	const [showModal, setShowModal] = useState(false)

	const sampleSport = [
		{ location: "maryland", start: "8:00am" },
		{ location: "maryland", start: "8:00am" },
		{ location: "maryland", start: "8:00am" },
		{ location: "maryland", start: "8:00am" },
		{ location: "maryland", start: "8:00am" },
		{ location: "maryland", start: "8:00am" },
		{ location: "maryland", start: "8:00am" },
	];

	const { sportname } = useParams();


	const OpenMap =()=>{
		setShowModal(true)
	}

	const mapModal = showModal ? <MapModal/> : ''

	const sportEvents = sampleSport.map((sp) => (
		<SportCard showMapDirection={OpenMap} location={sp.location} start={sp.start} />
	));

	
	return (
		<div>
			<Header
				components={[
					<Search />,
					<Selector name="duration" array={["day", "week", "month", "year"]} />,
				]}
				// date={date}
				title={"Sport"}
			/>
			<div className="">
				<Link to={"../activities"}>
					<div className="w-12 h-12 rounded-r-full bg-white"> back</div>
				</Link>
				{/* <Navigate to="/" replace={true} /> */}
			</div>
			<div className="uppercase text-3xl">{sportname}</div>

			<div className="grid grid-cols-3 place-items-center gap-16 mt-[5rem] ">
				{sportEvents}
			</div>
			{mapModal}
		</div>
	);
};

export default SportPage;
