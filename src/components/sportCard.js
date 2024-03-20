import React from "react";

const sportCard = ({ location, start }) => {
	return (
		<div className="w-[30rem] flex h-32 border bg-white text-black rounded-xl text-2xl">
			<div className="bg-gray-500 w-14 h-[100%]"></div>
			<div className="text-center">
				<div>Location:{location} </div>
				<div>Start Time: {start} </div>
				<div> </div>
			</div>
		</div>
	);
};

export default sportCard;
