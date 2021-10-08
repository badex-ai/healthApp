import React from 'react';
import classes from './main.module.css'
import Activity from './activity';
import Banner from './banner'
import Header from './header';
import Infographic from './infographic';
import Data from './data';
import IconCont from './iconContainer';
import Energy from '../icons/energy';
import Sleep from '../icons/sleep';
import Time from '../icons/time';
import Steps from '../icons/steps';
import Inc from '../icons/inc';
import Dec from '../icons/dec';


function Main() {

    
    return (

        <div className={classes.mainContainer}>
            <div className={classes.headerContainer}>
                <Header></Header>
            </div>
            <div className={classes.bannerContainer}>
                <Banner></Banner>
            </div>
            <div className={classes.activitiesContainer}>
            <Activity icon={<Steps/>} progess={<Inc/>} activity={'Average daily steps'} activityvalue={2894} activityUnit={'/6000 steps'} activityText1={'500 steps more than other people.'} activityText2={'Just few steps to meet avg. steps'} incValue={'+200'}></Activity>
            <Activity icon={<Energy/>} progess={<Inc/>} activity={'avgerage calories burnt'} activityvalue={203} activityUnit={'Kcal'} activityText1={'Pulse rate: 120 bpm'} activityText2={'Today, 4:11am'} incValue={'+120'}></Activity>
            <Activity icon={<Time/>} progess={<Dec/>} activity={'Average active minutes'} activityvalue={6} activityUnit={'hours/9hours'} activityText1={'Participate in more activities.'} activityText2={'Maintain your streak!!!'} incValue={'-35mins'}></Activity>
            <Activity icon={<Sleep/>} progess={<Inc/>} activity={'Average hours of sleep'} activityvalue={4} activityUnit={'hours'} activityText1={'From : 9:00pm (Fri) - 1:30 am (Sat)'} activityText2={'Today'} incValue={'+10min'}></Activity>
            

            </div>
            <div className={classes.infographicsContainer}>
            <Infographic></Infographic>
            <Infographic></Infographic>
          

            </div>
            <div className={classes.dataContainer}>
            <Data></Data>
            <Data></Data>
            <Data></Data>
            <Data></Data>
            </div>
          
        </div>
    )
}

export default Main
