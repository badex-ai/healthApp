import React from "react";
import Header from "../../components/header";
import AchievementCont from "../../components/achievementCont";
const Achievements = () => {
	const achievements = [
		{
		year: '2024',
		trophies : [{}]
	},
		{
		year: '2023',
		trophies : [{}]
	},
		{
		year: '2022',
		trophies : [{}]
	},
		{
		year: '2021',
		trophies : [{}]
	},
		{
		year: '2020',
		trophies : [{}]
	},
		{
		year: '2019',
		trophies : [{}]
	},
		{
		year: '2018',
		trophies : [{}]
	}

	
]

const achievementsList = achievements.map((achievement)=>(
	<AchievementCont achievement= {achievement} />

)
)
	return <div>
		<Header
				components={[
					
					// <Selector name="duration" array={["day", "week", "month", "year"]} />,
				]}
				// date={date}
				title={"Achievements"}
			/>
			<div className="flex flex-col">
			{achievementsList}

			</div>
	</div>;
};

export default Achievements;
