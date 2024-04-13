import React from "react";
import Header from "../../components/header";
import Selector from "../../components/selector";
import Sport from "../../components/sport";
import tennis from "../../assets/tennis.jpg";
import tableTennis from "../../assets/tableTennis.jpg";
import football from "../../assets/football.jpg";
import rugby from "../../assets/rugby.jpg";
import basketball from "../../assets/basketball.jpg";
import golf from "../../assets/golf.jpg";
import karate from "../../assets/karate.jpg";
import Search from "../../components/search";

const Activities = () => {
	const sports = [
		{ link: tennis, name: "tennis" },
		{ link: tableTennis, name: "tableTennis" },
		{ link: football, name: "football" },
		{ link: rugby, name: "rugby" },
		{ link: golf, name: "golf" },
		{ link: basketball, name: "basketball" },
		{ link: karate, name: "karate" },
	];

	const displayedSport = sports.map((sport) => (
		<Sport key={sport.name} name={sport.name} img={sport.link}></Sport>
	));

	return (
		<div>
			<Header
				components={[
					<Search />,
					<Selector name="LGA" array={["day", "week", "month", "year"]} />,
				]}
				title={"Social Activities"}
			></Header>
			<div>
				<div className="grid grid-cols-3 place-items-center gap-16">
					{displayedSport}
				</div>
			</div>
		</div>
	);
};

export default Activities;
