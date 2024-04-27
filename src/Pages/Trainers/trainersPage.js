import React from 'react'
import Header from '../../components/header'
import Search from '../../components/search'
import Trainers from '../../components/layout/trainers'

const TrainersPage = () => {
  return (
    <div>
        <Header
				components={[
					<Search />,
					
				]}
				title={"Trainers"}
			></Header>
        TrainersPage
        <div className='grid grid-cols-3 gap-16'>
          <Trainers></Trainers>
          <Trainers></Trainers>
          <Trainers></Trainers>
          <Trainers></Trainers>
          <Trainers></Trainers>
          <Trainers></Trainers>
          <Trainers></Trainers>
          <Trainers></Trainers>
          <Trainers></Trainers>
        </div>
        </div>
        
  )
}

export default TrainersPage