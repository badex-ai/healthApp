import React from 'react';
import classes from './selector.module.css';

function Selector() {
    return (
        <React.Fragment>
           <div className={classes.duration}>
                    <div className={classes.duration_val} >
                        <select name="duration" id="duration">
                        <option value="week">today</option>
                        <option value="weeks">week</option>
                        <option value="month">month</option>
                        <option value="year">year</option>
                        </select>
                    </div>
                   
                    </div> 
        </React.Fragment>
    )
}

export default Selector
