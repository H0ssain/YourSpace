import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import CommentList from './CommentList'
import { Link } from 'react-router-dom'
import moment from 'moment'
import "../Css/Details.css"

const ProjectDetails = (props) => {
  const { comments,project, auth } = props;
  var parts = window.location.pathname.split('/');
  var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
  
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (project) {
    return (
      <div className="container section project-details">
        <div className="row">
         <div className="col s12">
        <div className="card z-depth-0 details">
          <div className="card-content">
            <span className="card-title">Booking for <span className="blue-text">{project.subs}</span></span>
            
            <p><b style={{fontWeight: "bold"}}>Price :  </b>{project.salary}</p>
            
            <p><b style={{fontWeight: "bold"}}>Add-On : </b>{project.trial}</p>
               <div className="container center">
            <p><b style={{fontWeight: "bold",fontSize: 20}}>Description</b></p> 
            </div>
            <p className="desc">{project.description}</p>
           
            
          </div>
         


          <br></br>
          <div className="card-action grey lighten-2 grey text"></div>
          <div className="container center" >
          <b style={{fontWeight: "bold",fontSize: 25}}>Bookings From</b>
          </div>
          <div className="card-action grey lighten-4 grey-text" >        
          <CommentList comments={comments} />  
          </div>
           
           <br></br>
           </div>
        </div>
      </div>
    </div>  
    )
  } else {
    return (
      <div className="container center">
       <span className="white-text">Loding YourSpace</span>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth,
    comments: state.firestore.ordered.comments,
    
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'comments', orderBy: ['createdAt', 'desc']},
  ])
)(ProjectDetails)