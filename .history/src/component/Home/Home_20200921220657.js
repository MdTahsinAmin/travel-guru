import React from 'react';
import './Home.css'
import { Icon, InlineIcon } from '@iconify/react';
import arrowForwardOutline from '@iconify/icons-ion/arrow-forward-outline';
import LocationShow from './LocationShow';
import coxsBazar from '../../Image/Sajek.png'
import sundorbon  from '../../Image/sundorbon.png'
import sreemongol from '../../Image/Sreemongol.png'
import { Button } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const Home = () => {
    
    const locationInformations =[
        {id : 1,url:coxsBazar,name:'Cox’s Bazar'},
        {id : 2,url:sreemongol, name:'Sreemangal'},
        {id : 3,url:sundorbon, name:'Sundarbans '}
    ];

    return (
        <div className='container home'>
             <div className="row location-information">
                 <div className="col-md-4">
                     <h1 className='location-title'>Cox's Bazar</h1>
                     <p className='location-description'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it </p>
                     <button className='login-btn'>Booking <Icon icon={arrowForwardOutline} /></button>
                 </div>
                 <div className="col-md-8">
                 <div className="py-1">
                   <div className="row">
                       {
                        locationInformations.map(information => <LocationShow information={information} key={information.key}></LocationShow>)
                       }
                   </div>
                   </div>
                   </div>
                   <div className='d-flex justify-content-between extra-body'>
                    <> <ChevronLeftIcon></ChevronLeftIcon></>
                    <> <ChevronRightIcon></ChevronRightIcon></>
                   </div>
             </div> 
        </div>
    );
};
         
export default Home;