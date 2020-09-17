import React from 'react';
import { useHistory } from 'react-router-dom';
import './LocationShow.css'

const LocationShow = (props) => {
   
    const history = useHistory();

    const handleHistory = (name)=> {
        history.push(`/location/${name}`);
    }

    return (
        <div onClick={()=>handleHistory(props.information.name)} className="card mb-3 ml-2" >
        <div className="row no-gutters">
           <div className="col-md-12">
             <div className="card-body">
                <h4>{props.information.name}</h4>
               </div>
                </div>
                 </div>
                   </div>
    );
};

export default LocationShow;