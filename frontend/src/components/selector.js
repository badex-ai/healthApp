import React from "react";
import classes from "./selector.module.css";

function Selector({ name, array }) {
	let time;
	const options = array.map((period) => {
		if (period === "day") {
			time = "today";
		} else {
			time = period;
		}
		return <option value={period}>{time}</option>;
	});
	return (
		<React.Fragment>
			<div className={classes.duration}>
				<div className={classes.duration_val}>
					<select name={name} id={name}>
						{/* <option value="weeks">week</option>
                        <option value="month">month</option>
                        <option value="year">year</option> */}
						{options}
					</select>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Selector;
