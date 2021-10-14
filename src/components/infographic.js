import React from 'react';
import classes from './infographic.module.css';




function infographic(props) {

    



    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <div  className={classes.top_bg}>
                    <div className={classes.icon}>{props.icon}</div>
                    <div className={props.selector? classes.selector : null}>
                        {props.selector}
                    </div>
                </div>
                <div className={classes.top_sm}>
                {props.maintext}
                <div className={classes.subtext}>{props.subtext}</div>
                </div>
            </div>
            <div className={classes.bottom}>
               {props.children}
            </div>
                
        </div>
    )
}

export default infographic
