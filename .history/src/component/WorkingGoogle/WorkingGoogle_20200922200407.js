import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import React, { useContext } from 'react';
import { userContext } from '../../App';
import mapStyle from './mapStyle';

require('dotenv').config();


const WorkingGoogle = () => {
 
    const [loginUser, setLoginUser] = useContext(userContext);
     

    const mapContainerStyle ={
        width: '514px',
        height: '673px',
        borderRadius: '13px',
        border:'none'
    }
    const options = {
        styles : mapStyle,
        disableDefaultUI: true,
        zoomControl:true
    }
    


    let latitude;
    let longitude;
   
    if(loginUser.destination ==='Sreemangal'){
        latitude = 24.310577;
        longitude = 91.725136;
    }
    else if(loginUser.destination ==='Sundarbans'){
        latitude = 21.949726;
        longitude = 89.183327;
    }
    else if(loginUser.destination ===`Cox’s Bazar`){
        latitude = 21.433920;
        longitude = 91.987030;
    }
    const center ={
        lat :latitude,
        lng:longitude,
    }

    const {isLoaded , loadError} = useLoadScript({
        googleMapsApiKey:process.env.GOOGLE_MAP_API_KEY,
        libraries:['places']
    })
   
    if(loadError) return 'Error'
    if(!isLoaded) return 'Loading'

    return (
        <GoogleMap
         mapContainerStyle ={mapContainerStyle} 
         zoom={8} 
         center={center}
         options={options}
         >
            
        </GoogleMap>
    );
};

export default WorkingGoogle;

