import React from 'react';
import classes from './statsBottom.module.css'

function statsBottom(props) {
    return (
        <div className={classes.container}>
            <div className={classes.icon}>{props.icon}</div>
            <div className={classes.value}>{props.value} <span className={classes.unit}>{props.unit}</span></div>
            <div className={classes.txt}>{props.txt}</div>
            
        </div>
    )
}

export default statsBottom
