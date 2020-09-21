import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './LocationShow.css'

const LocationShow = (props) => {
   
    const {url} = props.information;

    const style ={
        backgroundImage:`linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0.7) 69.96%),url(${url})`,
        borderRadius: '20px',
        boxSizing: 'border-box',
        border:'none',
        backgroundRepeat:'no-repeat',
        width: '240px',
        height: '389px'
    }
   
    const history = useHistory();

    const handleHistory = (name)=> {
        history.push(`/location/${name}`);
    }
    
    return (
        <div style={style} onClick={()=>handleHistory(props.information.name)} className="card mb-2 ml-2" max >
        <div className="row">
          <div>
          <div className="col-md-12">
             <div className="card-body">
                <h4 style={{color:'white',
                   fontFamily: 'Bebas Neue',
                   fontStyle: 'normal',
                   fontWeight: 'normal',
                   fontSize: '36px',
                   lineHeight: '43px'}}>{props.information.name}</h4>
               </div>
             </div>  
          </div>
        </div>
    </div>
    );
};

export default LocationShow;