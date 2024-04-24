import React from 'react'
import Header from '../../components/header'
import Search from '../../components/search'

const TrainersPage = () => {
  return (
    <div>
        <Header
				components={[
					<Search />,
					
				]}
				title={"Training"}
			></Header>
        TrainersPage
        </div>
  )
}

export default TrainersPage