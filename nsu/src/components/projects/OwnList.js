import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'


const OwnList = ({users, auth }) => {
  var go = auth.uid;
  return (
    <div className="user-list section">
      { users && users.map(user => {
        var match = user.id;
        var nameF = user.firstName;
        var nameL = user.lastName;
        var email = auth.email;
        var department = user.department;
        var locations = user.locations;
        var study = user.study;
        
        if( go == match){
        return (
          <div className="row">
           <div className="col s12">
            <div className="infos">
         <p><b style={{fontWeight: "bold"}}>Name  : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{nameF} {nameL}</b></span></p>
         <p><b style={{fontWeight: "bold"}}>Email : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{email}</b></span></p>
         <p><b style={{fontWeight: "bold"}}>Phone Number : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{department}</b></span></p>
         <p><b style={{fontWeight: "bold"}}>Permanent Address : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{locations}</b></span></p> 
         <p><b style={{fontWeight: "bold"}}>NID : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{study}</b></span></p>         
          </div>
        </div>
      </div>  
        
          )
         }
      })}  
    </div>
  )
}
 

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    
    auth: state.firebase.auth

  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users' 
      }
  ])
)(OwnList)