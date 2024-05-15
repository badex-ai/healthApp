import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="#"className={classes.cta}>
                        <div className={classes.navig}>Start a Challenge</div><span className={classes.go}><Go/></span>
                        
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default header
