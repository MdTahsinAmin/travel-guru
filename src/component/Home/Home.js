import React from 'react';
import './Home.css'
import { Icon, InlineIcon } from '@iconify/react';
import arrowForwardOutline from '@iconify/icons-ion/arrow-forward-outline';
import LocationShow from './LocationShow';
const Home = () => {
    
    const locationInformations =[
        {id : 1,url:'../../Image/Sajek.png',name:'Cox’s Bazar'},
        {id : 2,url:'../../Image/Sreemongol.png', name:'Sreemangal'},
        {id : 3,url:'../../Image/sundorbon.png', name:'Sundarbans '}
    ];

    return (
        <div className='container'>
             <div className="row location-information">
                 <div className="col-md-4">
                     <h1 className='location-title'>Cox's Bazar</h1>
                     <p className='location-description'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it </p>
                     <button className='login-btn'>Booking <Icon icon={arrowForwardOutline} /></button>
                 </div>
                 <div className="col-md-8 ">
                 <div className="py-3">
                   <div className="row">
                       {
                        locationInformations.map(information => <LocationShow information={information} key={information.key}></LocationShow>)
                       }
                   </div>
                   </div>
                   </div>
             </div>
        </div>
    );
};


export default Home;