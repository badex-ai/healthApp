import React,  from "react";
import { createPortal } from 'react-dom';
import MapModal from "./mapModal";

const SportCard = ({ location, start, showMapDirection }) => {
	// const [openModal, setOpenModal] = useState(false);

	
	



	function openDirectionModal() {
		
		showMapDirection()
	
		
	}
	
	return (
		<div className="relative">
			<div className="w-[30rem] flex h-32 border bg-white text-black rounded-xl text-2xl">
				<div className="bg-gray-500 w-14 h-[100%]"></div>
				<div className="text-center">
					<div>Location:{location} </div>
					<div>Start Time: {start} </div>
					<button onClick={openDirectionModal}>Direction </button>
				</div>
			</div>
			
			
		</div>
	);
};

export default SportCard;
