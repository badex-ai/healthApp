import React, { useState } from "react";

const SportCard = ({ location, start }) => {
	const [openModal, setOpenModal] = useState(false);

	function openDirectionModal() {
		setOpenModal(true);
	}
	const modal = (
		<div className="absolute z-10 bg-white h-[90vh] w-[100vw]">
			<button className="absolute top-1.5 right-16 rounded-full">x</button>


		</div>
	);
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
			{modal}
		</div>
	);
};

export default SportCard;
