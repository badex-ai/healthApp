import React from "react";
import classes from "./header.module.css";
import Notif from "../icons/notification";
import Selector from "./selector";
import Search from "./search";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

function Header({ components, ...props }) {

	const componentsList = components ? 
		components.map((component) => {
			return <div>{component}</div>;
		})
	 : ''
	return (
		<div className={classes.container}>
			<div className={classes.header_left}>
				{props.title}
				{props.date}
			</div>
			<div className={classes.header_right}>
				{componentsList}
				{/* <Search />

				<Selector name="duration" array={["day", "week", "month", "year"]} /> */}
	
				<div className='w-[42px] h-[42px] rounded-full flex items-center justify-center relative border-white border cursor-pointer'>
					<div className="w-4 h-4 bg-red-500 rounded-full absolute -top-1 right-2"></div>
					{<Notif />}</div>
			</div>
		</div>
	);
}

export default Header;
