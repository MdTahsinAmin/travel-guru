import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './LocationShow.css'

const LocationShow = (props) => {
   
    const {url} = props.information;

    const style ={
        backgroundImage:`url(${url})`,
        borderRadius: '20px',
        border: '4px solid #FBBC04',
        boxSizing: 'border-box',
        backgroundRepeat:'no-repeat',
        width: '270px',
        height: '416px'
    }
   
    const history = useHistory();

    const handleHistory = (name)=> {
        history.push(`/location/${name}`);
    }
    
    return (
        <div style={style} onClick={()=>handleHistory(props.information.name)} className="card mb-3 ml-2" max >
        <div className="row">
           <div className="col-md-6">
             <div className="card-body">
                <h4>{props.information.name}</h4>
               </div>
                </div>
                 </div>
                   </div>
    );
};

export default LocationShow;