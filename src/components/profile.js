import React from 'react';
import classes from './profile.module.css'
import Header from './header';
import Mystat from './mystat';
import Imagebox from './imagebox';
import Stats from './stats';



function Profile() {
    
     

    
    return (

        <div className={classes.mainContainer}>
            {/* <div className={classes.headerContainer}>
            <Header title={'Profile'} search={null} selector={null}></Header>
            </div> */}
            <div className={classes.info}>
            <Mystat ></Mystat>
            </div>
            <div className={classes.imagebox}>
            <Imagebox ></Imagebox>
            </div>
           
           <div className={classes.stats}>
           <Stats ></Stats>
           </div>
           
           
          
        </div>
    )
}

export default Profile
