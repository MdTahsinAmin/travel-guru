import React, { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import Header from '../Header/Header';

import './TravelingLocation.css'
const TravelingLocation = () => {
    
    const [loginUser, setLoginUser] = useContext(userContext);
    const {locationName} = useParams();
    const { register, handleSubmit, watch, errors } = useForm();


    let description ='';
    

    if(locationName === 'Sreemangal'){
        description =`Srimangal/Sreemangal is a city in Sylhet Division in Bangladesh. Sreemangal is situated in Moulvibazar district in sylhet division. 
        Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. 
        Its natural scenery is very charming.It soothes one’s eyes. Birds are twittering always here. 
        The first tea garden in Bangladesh which names “Malni chho ra tea garden” is here.`
    }
    else if(locationName ==='Sundarbans'){
        description =`The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges,Brahmaputra and Meghna Rivers in the Bay of Bengal. 
        It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels.
        Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites.`
    }
    else {
        description =`Cox’s Bazar is a town on the southeast coast of Bangladesh.
         It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.
          Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds.
         North, sea turtles breed on nearby Sonadia Island.`
    }
    const history = useHistory();

    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/hotelInformation" } };
    const onSubmit = (data) =>{
          const newUser ={...loginUser ,...data};
          setLoginUser(newUser);
          history.replace(from);
    }

   


    return (
       <div className='bar'>
           <Header></Header>
            <div className='container'>
            <div className="row location-informations">
                <div className="col-md-6">
                    <h1 className='location-title'>{locationName}</h1>
                    { locationName && <p className='location-description'>{description}</p>}
                </div>
                <div className="col-md-6">
                      <div className='formField'>
                                    
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='originToDestination'>
                <p>Origin</p>  
                <input name="origin" placeholder='Origin' ref={register} />
                <p>Destination</p>
                <input name="destination" placeholder='Destination'  defaultValue={locationName} ref={register} />
                </div>
                
                <div className='d-flex calenderForm'>
                
                 <div className='toFrom'>
                 <p>Form</p>
                 <input type="date" id="date" name="fromDate" placeholder="Enter date"
                           ref={register({ required: true })}  />
                 {errors.exampleRequired && <span>This field is required</span>}
                 </div>
                  <div>
                <p>To</p>  
                <input type="date" id="date" name="ToDate" placeholder="Enter date"
                           ref={register({ required: true })}  />
                {errors.exampleRequired && <span>This field is required</span>}
                  </div>
                </div>
                
              <input  className='start-booking' type="submit" value='Start-Booking'/>  
                </form>
                      </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default TravelingLocation;