import React from 'react';
import classes from './header.module.css';
import Notif from '../icons/notification';
import Search from '../icons/search';
import ListIcon from '../icons/list-icon';

function Header() {
    return (
        <div className={classes.container}>
            <div className={classes.header_left}>
            <div className={classes.header_title}>Dashboard Overview</div>
            <div className={classes.date} >
                {new Date().toISOString()}
            </div>
            </div>
            <div className={classes.header_right}>
                <div className={classes.searchbar}>
                    <div className={classes.search}>Search</div>
                    <div><input type="text" ></input></div>
                    <div className={classes.searchIcon}><button>{<Search/>}</button></div>
                </div>
                <div className={classes.duration}>
                    <div className={classes.duration_val} >
                        <select name="duration" id="duration">
                        <option value="weeks">Volvo</option>
                        <option value="month">Saab</option>
                        <option value="year">Mercedes</option>
                        </select>
                    </div>
                   
                    </div>
                <div className={classes.notification}>
                    {<Notif/>} 
                </div>
            </div>
        </div>
    )
}

export default Header
