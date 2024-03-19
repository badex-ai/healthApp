import React from "react";
import Header from "../../components/header";
import Selector from "../../components/selector";
import Sport from "../../components/sport";

const Activities = () => {

const sport = []

	return (
		<div>
			<Header
				components={[
					<Selector name="LGA" array={["day", "week", "month", "year"]} />,
				]}
				title={"Activities"}
			></Header>
			<div>
				<div className="grid grid-cols-3 place-items-center gap-16">
					<Sport name={"Football"} img={""}></Sport>
					<Sport name={"Volleyball"} img={""}></Sport>
					<Sport name={"Hockey"} img={""}></Sport>
					<Sport name={"Cricket"} img={""}></Sport>
					<Sport></Sport>
					<Sport></Sport>
					<Sport></Sport>
				</div>
			</div>
		</div>
	);
};

export default Activities;
