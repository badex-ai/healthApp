import React from 'react';
import classes from './header.module.css';
import Notif from '../icons/notification';

function Header(props) {
    return (
        <div className={classes.container}>
            <div className={classes.header_left}>
                {props.title}
                {props.date}
            </div>
            <div className={props.search?classes.header_right : classes.header_right_sm}>
                {props.search}
                
                {props.selector}
                <div className={classes.notification}>
                    {<Notif/>} 
                </div>
            </div>
        </div>
    )
}

export default Header
