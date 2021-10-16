import React from 'react';
import classes from './profilestat.module.css';
import  Data from './data'
import Profilepic from '../assets/profile-pic.png';
// import { useAuth0 } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";



function Profilestat() {
     const { user  } = useAuth0();
     console.log(user);

    return (
        <div className={classes.container}>
            <div className={classes.prof_title}>Your Profile</div>
            <div className={classes.prof_cont}>

                    <div >
                        <img className={classes.prof_img} src={user.picture} width="134px" alt="" />
                    </div>
                    <div className={classes.prof_subcont}>
                        {user.name}
                        <button className={classes.prof_button}>Edit</button>
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

export default Profilestat
