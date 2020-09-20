import React from 'react';
import './DescriptionInDetails.css'

const DescriptionInDetails = (props) => {
    return (
     <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props.description.urlImg})`, backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat' , borderRadius: '20px' }} className="card mb-3 ml-2" style={{maxWidth: "350px"}}>
        <div className="row ">
       <div className="col-md-12">
         <div className="card-body">
         <h5>{props.description.name}</h5>
          <p>{props.description.description}</p>
         </div> </div>
         </div>
    </div>
    );
};

export default DescriptionInDetails;