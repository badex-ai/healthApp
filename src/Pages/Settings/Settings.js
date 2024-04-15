import React,{useState} from "react";
import Header from "../../components/header";
import ButtonLg from "../../components/buttons/buttonMd";

const Settings = () => {
	const [formData, setFormData] = useState('')



	function submitFrom(params) {
		
	}
	return <div>
		<Header 
				// date={date}
				title={"Settings"}/>
				<form>
					<label>change Tagname</label>
					
					<label>	change difficulty</label>
				
				
					
	<label>change password</label>
					
					old password
					New password
					Confirm password




<div className="flex mx-auto w-[20rem] h-[20rem]">
<ButtonLg text='Save' action={submitFrom}/>
	<ButtonLg text='Cancel'/>
</div>

				</form>
				
	</div>;
};

export default Settings;
