import React, { useState } from "react";
import MapModal from "./mapModal";

const SportCard = ({ location, start }) => {
	const [openModal, setOpenModal] = useState(false);

	function openDirectionModal() {
		setOpenModal(true);
	}
	
	return (
		<div className="">
			<div className="w-[30rem] flex h-32 border bg-white text-black rounded-xl text-2xl">
				<div className="bg-gray-500 w-14 h-[100%]"></div>
				<div className="text-center">
					<div>Location:{location} </div>
					<div>Start Time: {start} </div>
					<button onClick={openDirectionModal}>Direction </button>
				</div>
			</div>
			<MapModal/>
		</div>
	);
};

export default SportCard;
