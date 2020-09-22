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
    const destination = (loginUser.destination).trim();
    if(destination ==='Cox’s Bazar'){
        latitude = 21.433920;
        longitude = 91.987030;
    }
    else if(destination ==='Sreemangal'){
        latitude = 24.310577;
        longitude = 91.725136;
    }
    else{
        latitude = 21.949726;
        longitude = 89.183327;
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

