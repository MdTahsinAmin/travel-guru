import React from 'react';
import './ShowAllHotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const ShowAllHotel = (props) => {
    return (
        <div className='row full-information'>
            <div className="col-md-6 img-section">
                <img className='hotelImg' src={props.description.url} alt=""/>
            </div>
            <div className="col-md-6 hotelInformation-section">
             <h6 className='hotel-description'>{props.description.roomDescription}</h6>
              <div className="d-flex justify-content-between">
                <p>{props.description.guests} guests</p>
                  <p>{props.description.bedrooms} bedrooms</p>
                  <p>{props.description.beds} beds</p>
                  <p>{props.description.baths} baths</p>
              </div>
             <p>{props.description.airCondition}</p>
             <p>{props.description.extra}</p>
             <div className="d-flex justify-content-between">
                <p><FontAwesomeIcon className='star-icons' icon={faStar}></FontAwesomeIcon>{props.description.rating}(25)</p>
                <p><span className='price-value'>${props.description.price}</span>/night</p>
               <p><span className='price-value'>${props.description.total}</span>/total</p>
             </div>
            </div>
            
        </div>
    );
};

/*
<p><span>{props.description.guests}</span>
              <span>{props.description.bedrooms}</span>
              <span>{props.description.beds}</span> 
               <span>{props.description.baths}</span>
               </p>
*/
export default ShowAllHotel;