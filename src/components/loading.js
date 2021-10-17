import React from 'react';
import classes from './loading.module.css'

function loading() {

    // console.log("loading loading loading loading ")
    return (
        <React.Fragment>
            <div className={classes.body}>
            <div className={classes.loading}>

                <div className={classes.arc}></div>
                <div className={classes.arc}></div>
                <div className={classes.arc}></div>
            </div>
    
            </div> 
        </React.Fragment>
        
          
    
        
        
    )
}

export default loading


  {/* <div className="item loading-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em">
    <circle cx="0.6em" cy="0.6em" r="0.5em" className="circle"/>
    </svg>
    <div>.loading-1</div>
  </div> */}