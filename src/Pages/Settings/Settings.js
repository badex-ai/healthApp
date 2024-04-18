import React,{useState} from "react";
import Header from "../../components/header";
import ButtonLg from "../../components/buttons/buttonMd";
import Select from "../../components/atoms/select";
import * as Separator from '@radix-ui/react-separator';

const Settings = () => {
	const [formData, setFormData] = useState('')



	function submitFrom(params) {
		
	}
	return <div>
		<Header 
				// date={date}
				title={"Settings"}/>
				<div className="bg-gray-500 text-2xl p-10 w-[100%] ">
				<form  className="lg: w-[50%]" >
					<div></div>
					<h2>change Tagname</h2>
					<Separator.Root className="bg-white m-4" />
					
					<div>
					<h2>	change difficulty</h2>
					<div>	<lable>Intensity</lable>
					<Select options={['easy','medium','difficult']}></Select></div>
				
				<div className="flex"><lable>Skill level</lable>
					<Select options={['easy','medium','difficult']}></Select></div>
					
					<div><lable>Equipment</lable>
					<Select options={['easy','medium','difficult']}></Select></div>
					
					<div>
					<lable>Impact</lable>
					<Select options={['easy','medium','difficult']}></Select>
					</div>
					</div>
					
				
					
					<Separator.Root className="bg-white m-4" />
					
				
				
					
					<div>
					<h2>change password</h2>
					
					<label htmlFor="">old password</label>
					
					<label htmlFor="">New password</label>
					

					<label htmlFor="">Confirm password</label>
					</div>
				
					




<div className="flex mx-auto w-[20rem] h-[20rem]">
<ButtonLg text='Save' action={submitFrom}/>
	<ButtonLg text='Cancel'/>
</div>

				</form>
				</div>
				
				
	</div>;
};

export default Settings;
