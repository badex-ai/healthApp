import React from "react";
import Header from "../../components/header";
import Selector from "../../components/selector";
import Search from "../../components/search";
import Event from "../../components/event";

const EventsPage = () => {


	const events = [
		{img: '',description: "", location: "", time: '',hilights: '',name: 'agbaya hangout'},
		{img: '',description: "", location: "", time: '',hilights: '',name: 'Lekki golf'},
		{img: '',description: "", location: "", time: '',hilights: '',name: 'archery'},
		{img: '',description: "", location: "", time: '',hilights: '',name: 'linkup'},
		{img: '',description: "", location: "", time: '',hilights: '',name: 'chibiverse'},
		{img: '',description: "", location: "", time: '',hilights: '',name: 'club 16'},
	]

	const eventsList = events.map((e)=>(
		<Event img={e.img} description={e.description} time={e.time} name={e.name}/>
	))
	return <div>
		<Header components={[
			
			<Search/>,
					<Selector name="duration" array={["today", "week", "month", "year"]} />
				]}
				// date={date}
				title={"Events"}/>

				<div className="grid grid-cols-3">
					{eventsList}
				</div>
	</div>;
};

export default EventsPage;
