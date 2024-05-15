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
  {name: "Tunde", weight : 85, rating : 5, price: 1000, experience: 12, videoLink: '',img:maleTrainer1, sex: "Male" ,description :"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",id: '4'},
  {name: "Bunmi", weight : 85, rating : 5, price: 1000, experience: 12, videoLink: '',img:femaleTrainer1, sex: "Female",description :"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",id: '3' },
  {name: "Sesan", weight : 85, rating : 5, price: 1000, experience: 12, videoLink: '',img:maleTrainer2, sex: "Male" ,description :"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",id: '2'},
  {name: "kehinde", weight : 65, rating : 5, price: 1000, experience: 12, videoLink: '',img:maleTrainer2, sex: "Male",description :"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",id: '6' },
  {name: "Bisola", weight : 85, rating : 5, price: 1000, experience: 12, videoLink: '',img:femaleTrainer2, sex: "Female",description :"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",id: '156' },
  {name: "Shane", weight : 85, rating : 5, price: 1000, experience: 12, videoLink: '', sex: "Females",description :"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",id: '346' },
 ]

 const trainersDiv = trainersSample.map((trainer)=>(
  <Trainers trainer={trainer}></Trainers>

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