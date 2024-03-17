import React from "react";
import { Link } from "react-router-dom";

const Sport = ({ img, name, time, location }) => {
	return (
		<>
			<Link className="w-[24rem] h-[30rem] border rounded-xl" to={`/{name}`}>
				<div>
					<img src="" alt="sports" />
					<div>{name}</div>
				</div>
			</Link>
		</>
	);
};

export default Sport;
