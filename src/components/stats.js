import React from 'react';
import classes from './stats.module.css';
import StatsBottom from './statsBottom';
import Energy from '../icons/energy';
import Steps from '../icons/steps';
import Time from '../icons/time'
import Sleep from '../icons/sleep';

function stats() {
    return (
        <div className={classes.container}>
           <h2>Personal Best</h2> 
            <div className={classes.statsBottomCont}>
                  <StatsBottom icon={<Energy/>} value={22894} txt={'Most steps'} unit={' steps'}></StatsBottom>  
                  <StatsBottom icon={<Steps/>} value={9} txt={'Most sleep'} unit={'hrs'}></StatsBottom>  
                  <StatsBottom icon={<Time/>} value={30} txt={'Duration'} unit={'hrs'}></StatsBottom>  
                  <StatsBottom icon={<Sleep/>} value={138} txt={'Calories Burnt'} unit={' Kcal'}></StatsBottom>  
            </div>
        </div>
    )
}

export default stats
