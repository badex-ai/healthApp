import React from "react";
import { Link } from "react-router-dom";

const Sport = ({ img, name, time, location }) => {
	return (
		<>
			<Link
				className=" relative w-[24rem] h-[30rem] border rounded-xl overflow-hidden p-6"
				to={`./${name}`}
			>
				<div className="">
					<img
						className="w-[99%] h-[100%] object-cover mt-2"
						src={img}
						alt={name}
					/>
					<div className="absolute bottom-10 font-bold text-5xl capitalize">
						{name}
					</div>
				</div>
			</Link>
		</>
	);
};

export default Sport;
