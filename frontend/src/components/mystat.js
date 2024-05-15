import React, {useContext} from 'react';
import classes from './mystat.module.css';
import  Data from './data';
import UserContext1 from '../context/user'
import Profilepic from '../assets/profile-pic.png';
import { useAuth0 } from "@auth0/auth0-react";
import ButtonMd from './buttons/buttonMd';
// import { useAuth0 } from "@auth0/auth0-react";



function Mystat() {
    // const {user}=useAuth0()
    //  const user = useContext(UserContext1)
    //  console.log(user);

    return (
        <div className={classes.container}>
            <div className={classes.prof_title}>Your Profile</div>
            <div className={classes.prof_cont}>

                    <div >
                        <img className={classes.prof_img} src={''} width="134px" alt="" />
                    </div>
                    <div className={classes.prof_subcont}>
                        {/* {user.name}  */}
                        Aliu
                        <ButtonMd text='Edit'/>
                        {/* <button className={classes.prof_button}>Edit</button> */}
                    </div>
                
            </div>
            <div className={classes.profbottom}>
                <div className={classes.subtxt}>Health Stats</div>
                <div className={classes.subCont}>
                    <div className={classes.subContData}>
                    <Data className={classes.subContDatacl}  variable={'weight'}  value={62.5}   unit={'kg'} ></Data>
                    <Data className={classes.subContDatacl} variable={'Blood Pressure'}  value={'123/85'}   unit={'mmHg'} ></Data>
                    <Data className={classes.subContDatacl} variable={'Blood Gluscose'}  value={'123/85'}   unit={'mgdL'} ></Data>
                    <Data className={classes.subContDatacl} variable={'Body Mass Index'}  value={'123/85'}   unit={'kg/m'}></Data>
                    </div>
              

                </div>
            </div>
        </div>
    )
}

export default Mystat
