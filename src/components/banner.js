import React from 'react';
import classes from './banner.module.css';
import Topheart from '../icons/top-heart';
import Go from '../icons/go';

function header() {
    return (
        <div className={classes.container}>
            <div className={classes.textContainer} >
                <div className={classes.icon}> {<Topheart/>}</div>
                <div className={classes.textbox}>
                    <div className={classes.text}>Challenge a friend.</div>
                    <div className={classes.subtext}>Reach you goals faster by challenging your friend.
                        The first to complete an activity wins.
                    </div>
                    <div className={classes.cta}>
                        <div>Start a Challenge<span className={classes.go}><Go/></span></div>
                        <div></div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default header
