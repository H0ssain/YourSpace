import React from 'react'
import moment from 'moment'
import "../Css/RSummary.css"


const ReqSummary = ({req}) => {
  
  
  return (
    <div className="card z-depth-0 req-summary">
      <div className="card-content grey-text text-darken-3 writings">
        <span className="card-title ">Space @ <span className="blue-text">{req.location}</span></span>
        <p>Name: {req.subs}</p>
        <p>Expected Rent: {req.salary}</p>
       
        <p>Phone Number : {req.phone}</p>
        
        <p>Description : {req.description}</p>
        <p>Address : {req.address}</p>
        
      </div>
    </div>
  
  )
}

export default ReqSummary