import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './LocationShow.css'

const LocationShow = (props) => {
   
    const {url} = props.information;

    const style ={
        backgroundImage:`linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 60.96%),url(${url})`,
        borderRadius: '20px',
        boxSizing: 'border-box',
        border:'none',
        backgroundRepeat:'no-repeat',
        width: '240px',
        height: '389px'
    }
   const linkStyle = {
       textDecoration: 'none',
       border: '4px solid #FBBC04'
   }

    return (
       <Link to ={`/location/${props.information.name}`} style={linkStyle}> <div style={style} className="card mb-2 ml-2"> 
        <div className="row">
          <div>
          <div className="col-md-12">
             <div className="card-body">
                <h4 style={{color:'white',
                   fontFamily: 'Bebas Neue',
                   fontStyle: 'normal',
                   fontWeight: 'normal',
                   fontSize: '36px',
                   lineHeight: '43px'
                   ,marginTop:'295px'}}>{props.information.name}</h4>
               </div>
             </div>  
          </div>
        </div>
    </div>
    </Link> 
    );
};

export default LocationShow;