import React from 'react'
import WorkoutCard from '../../components/layout/workoutCard';
import Header from '../../components/header';
import Search from '../../components/search';

const TrainingPage = () => {
  const workouts = [
		{ link: "upperBody", name: "upper body" },
		{ link: "lowerBody", name: "lower body" },
		{ link: 'cardio', name: "football" },
		{ link: 'HIIT', name: "hiit" },
		{ link: 'core', name: "core" },
		{ link: 'yoga', name: "yoga" },
		{ link: 'calisthenics', name: "calisthenics" },
		{ link: 'meditation', name: "meditation" },
	
	];

  const trainingList = workouts.map((workout) => (
		<WorkoutCard key={workout.name} name={workout.name} img={workout.link}></WorkoutCard>
	));
  return (
    <div>
      <Header
				components={[
					<Search />,
					
				]}
				title={"Training"}
			></Header>
      <div className='grid grid-cols-2 gap-8'>
      {trainingList}

      </div>
    </div>
  )
}

export default TrainingPage