import React, { useState } from "react";
import Header from "../../components/header";
import SportCard from "../../components/sportCard";
import { Link, Outlet, useParams, Navigate } from "react-router-dom";
import Search from "../../components/search";
import Selector from "../../components/selector";
import MapModal from "../../components/mapModal";
import InletModal from "../../components/layout/inletModal";

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


	const openMap =()=>{
		setShowModal(true)
	}

	const closeMap=()=>{
		setShowModal(false)
	}

	const mapModal = showModal ? <InletModal opacity className="fixed bg-gray-500 bg-opacity-80 top-0 z-1 w-[100%] map-height " action={closeMap}>
		<MapModal closeModal={closeMap}/> 
		</InletModal>: ''

	const sportEvents = sampleSport.map((sp) => (
		<SportCard showMapDirection={openMap} location={sp.location} start={sp.start} />
	));

	
	return (
		<div className="relative min-h-screen bg-brown-500">
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
