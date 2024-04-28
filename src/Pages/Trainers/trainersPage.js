import React from 'react'
import Header from '../../components/header'
import Search from '../../components/search'
import Trainers from '../../components/layout/trainers'
import maleTrainer1 from "../../assets/images/maleTrainer1.jpg"
import maleTrainer2 from "../../assets/images/maleTrainer2.jpg"
import femaleTrainer1 from "../../assets/images/femaleTrainer1.jpg"
import femaleTrainer2 from "../../assets/images/femaleTrainer2.jpg"

const TrainersPage = () => {

 const trainersSample =[
  {name: "Tunde", weight : 85, rating : 5, price: 1000, experience: 12, videoLink: '',img:maleTrainer1, sex: "Male" },
  {name: "Bunmi", weight : 85, rating : 5, price: 1000, experience: 12, videoLink: '',img:femaleTrainer1, sex: "Female" },
  {name: "Sesan", weight : 85, rating : 5, price: 1000, experience: 12, videoLink: '',img:maleTrainer2, sex: "Male" },
  {name: "kehinde", weight : 65, rating : 5, price: 1000, experience: 12, videoLink: '',img:maleTrainer2, sex: "Male" },
  {name: "Bisola", weight : 85, rating : 5, price: 1000, experience: 12, videoLink: '',img:femaleTrainer2, sex: "Female" },
  {name: "Shane", weight : 85, rating : 5, price: 1000, experience: 12, videoLink: '', sex: "Trans" },
 ]

 const trainersDiv = trainersSample.map((trainer)=>(
  <Trainers name={trainer.name} img={trainer.img} weight={trainer.weight} sex={trainer.sex}></Trainers>

 ))
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
        {trainersDiv}
        </div>
        </div>
        
  )
}

export default TrainersPage