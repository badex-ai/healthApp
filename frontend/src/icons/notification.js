import React, { useState } from "react";

const Notification = () => {
	const [notifOpen, setNotifOpen] = useState(false);
	function openNotification() {
		if (notifOpen) {
			setNotifOpen(false);
		} else setNotifOpen(true);
	}

	const notif = notifOpen ? (
		<div className="absolute z-50 top-16 right-0  block w-[30rem] h-72 bg-white border rounded-lg rounded-tr-none  ">
			me and you
		</div>
	) : (
		""
	);

	return (
		<>
			<div className="relative cursor-pointer" onClick={openNotification}>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 14H6C6 15.1 6.9 16 8 16C9.1 16 10 15.1 10 14Z"
						fill="#FEFFFF"
					/>
					<path
						d="M15 11H14.5C13.8 10.3 13 9.3 13 8V5C13 2.2 10.8 0 8 0C5.2 0 3 2.2 3 5V8C3 9.3 2.2 10.3 1.5 11H1C0.4 11 0 11.4 0 12C0 12.6 0.4 13 1 13H15C15.6 13 16 12.6 16 12C16 11.4 15.6 11 15 11Z"
						fill="#FEFFFF"
					/>
				</svg>
				{notif}
			</div>
			
		</>
	);
};

export default Notification;
