import React from 'react';
import classes from './imagebox.module.css';
import Body from '../assets/body';
import ButtonMd from './buttons/buttonMd';

function imagebox() {

    function pictureUpload(){
        console.log('upload')
    }
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
                    <ButtonMd action ={pictureUpload}text='Upload' />
                    {/* <button className={classes.btn}>Upload</button> */}
                </div>
            </div>
        </div>
    )
}

export default imagebox
