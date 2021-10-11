import React from 'react';
import classes from './data.module.css'

function data(props) {
    return (
        <div style={{backgroundColor: props.color} } className={classes.container}>
            <div className={classes.top}> {props.variable}</div>
            <div className={classes.bottom}>{props.value} <div className={classes.unit}>{props.unit}</div></div>
        </div>
    )
}

export default data
