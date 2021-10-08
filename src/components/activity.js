import React from 'react';
// import classes from './index.css'
import classes from './activity.module.css'

function Activity(props) {
    return (
        <div className={classes.activityContainer}>
            <div className={classes.activity_top} >
                <div>{props.icon}</div>
                <div className={classes.progress}>{props.progess} <span  className={classes.activity_difference}>{props.incValue}</span></div>
            </div>
            <div className={classes.activity_box}>
                <div className={classes.activity}>{props.activity}</div>
                <div className={classes.activity_unitValue}> <span className={classes.activity_value}>{props.activityvalue}</span>{props.activityUnit}</div>
            </div>
            
            <div className={classes.activity_descriptionbx}>
                <div className={classes.activity_description}>{props.activityText1}</div>
                <div className={classes.activity_subdescription}>{props.activityText2}</div>
            </div>
            
        </div>
    )
}

export default Activity
