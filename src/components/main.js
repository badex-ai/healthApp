import React from 'react';
import classes from './main.module.css'
import Activity from './activity';
import Banner from './banner'
import Header from './header';
import Infographic from './infographic';
import Data from './data';
import Energy from '../icons/energy';
import Sleep from '../icons/sleep';
import Time from '../icons/time';
import Steps from '../icons/steps';
import Inc from '../icons/inc';
import Dec from '../icons/dec';
import Power from '../icons/power';
import Summary from '../icons/summary';
import Heartpink from '../icons/heart-pink';
import Selector from './selector';
import Search from './search';
import Barchart from '../components/barchart1'



function Main() {
    let color= "#feffff1a"
    const title =  <div className={classes.header_title}>Dashboard Overview</div>;
       const date=  <div className={classes.date} >
            {new Date().toISOString()}
        </div>
    
    let selector= <select  name="duation" id="duration">
                    <option value="week">week</option>
                     <option value="month">month</option>
                    <option value="year">year</option>
                    </select>

    let dataBar=[
        {
            day:'mon',
            steps: 1,
            sleep: 6,
            workout: 2.5

        },
        {
            day:'tues',
            steps: 1,
            sleep: 6,
            workout: 3
        },
        {
            day:'wed',
            steps: 1,
            sleep: 5,
            workout: 2.5
        },
        {
            day:'thurs',
            steps: 1,
            sleep: 6,
            workout: 3.2
        },
        {
            day:'fri',
            steps: 1.5,
            sleep: 6,
            workout: 4
        },
        {
            day:'saturday',
            steps: 0.8,
            sleep: 5,
            workout: 3
        },
        {
            day:'sunday',
            steps: 1.5,
            sleep: 8,
            workout: 2
        }]

        const colors = {
            workout: "#5D5FEF",
            steps: "#7879F1",
            sleep: "#A5A6F6"
          };

          const keys= ['workout', 'steps',' sleep']
    return (

        <div className={classes.mainContainer}>
            <div className={classes.headerContainer}>
                <Header date={date} title={title} search={<Search/>} selector={<Selector/>}></Header>
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
            <Infographic data={dataBar} graph={<Barchart data={dataBar} keys={keys} colors={colors}/>} icon={<Summary/>} subtext={'You reached your steps target once this week.'} maintext={'weekly summary (12 Sep - 19 sep 2021)'}  selector={selector} ></Infographic>
            <Infographic icon={<Power/>} subtext={'19 Sep, 2021'} maintext={'today’s acivity'}  selector={null}></Infographic>
          

            </div>
            <div className={classes.dataContainer}>
            <div className={classes.info}>
                <div><Heartpink/></div>
                <div  className={classes.info_txt} >YOUR HEALTH STATUS</div>
                <div className={classes.info_sub}>Awesome!You are in great shape!</div>
            </div>
            <div className={classes.dataBox}>
                <Data color={color} variable={'weight'}  value={62.5}   unit={'kg'} ></Data>
                <Data color={color} variable={'Blood Pressure'}  value={'123/85'}   unit={'mmHg'} ></Data>
                <Data  color={color} variable={'Blood Gluscose'}  value={'123/85'}   unit={'mgdL'} ></Data>
                <Data color={color} variable={'Body Mass Index'}  value={'123/85'}   unit={'kg/m' }></Data>
          
            </div>
            </div>
          
        </div>
    )
}

export default Main
