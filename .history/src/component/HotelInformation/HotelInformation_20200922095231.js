import React, { useContext } from 'react';
import { userContext } from '../../App';
import ShowAllHotel from '../ShowAllHotel/ShowAllHotel';
import './HotelInformation.css'
import firstHotel from '../../Image/Rectangle 26.png'
import secondHotel from '../../Image/Rectangle 27.png'
import thirdHotel from '../../Image/Rectangle 28.png'
import WorkingGoogle from '../WorkingGoogle/WorkingGoogle';

const HotelInformation = () => {
   
  const [loginUser, setLoginUser] = useContext(userContext);

    const hotelDescription = 
    [
     
    {
        
    id : 1 , rating:4.9,price:34,total:167,airCondition:'Wif Air conditioning Kitchen',
    extra:'Cancellation fexibility availiable',roomDescription:'Light bright airy stylish apt & safe peaceful stay',
    guests:4, bedrooms: 2 ,beds: 2 ,baths: 2,url:firstHotel
    },
      {
        
        id : 2 , rating:4.8,price:57,total:267,airCondition:'Wif Air conditioning Kitchen',
        extra:'Cancellation fexibility availiable',roomDescription:'Apartment in Lost Panorama',
        guests:4, bedrooms: 2 ,beds: 2 ,baths: 2,url:secondHotel
        },

        {
            id : 3 , rating:4.9,price:44,total:241,airCondition:'Wif Air conditioning Kitchen',
            extra:'Cancellation fexibility availiable',roomDescription:'AR Lounge & Pool (r&r + b&b)',
            guests:4, bedrooms: 2 ,beds: 2 ,baths: 2,url:thirdHotel
            },
    ];
    

    return (
        <div className='container d-flex hotel-container'>
            <div className='hotelInformation'>
            <p>252 stays {loginUser.fromDate} 3 guests</p>
             <h4> Stay in {loginUser.destination}</h4>
                {
                    hotelDescription.map(description =><ShowAllHotel description={description} key={description.id}></ShowAllHotel>)
                }
            </div>
            <div className='google'>
                 <div className='google-map'>
                     <h4>Google Map : </h4>
                    <WorkingGoogle></WorkingGoogle>
                 </div>
            </div>
        </div>
    );
};

export default HotelInformation;