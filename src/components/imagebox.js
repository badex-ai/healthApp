import React from 'react';
import classes from './imagebox.module.css';
import Body from '../assets/body';

function imagebox() {
    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <Body/>
            </div>
            <div className={classes.bottom}>
                <div className={classes.btm}>
                    <div className={classes.circlecont}>
                        <button className={classes.btncircle}/>
                        <button className={classes.btncircle}/>
                    </div>
                    <div className={classes.txt}>Upload your full frontal and side view pictures</div>
                    <button className={classes.btn}>Upload</button>
                </div>
            </div>
        </div>
    )
}

export default imagebox
