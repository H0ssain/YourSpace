import React, { Component } from 'react'
import ProjecttttList from '../projects/ProjecttttList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import '../Css/Dashboard.css'




class Lists extends Component {
  render() {
    const { projectttts, auth, notifications } = this.props;
    //if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="dashboard container">
        
         
          <div className="col s12 m6">
            <ProjecttttList projectttts={projectttts} />
          </div>
    
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projectttts: state.firestore.ordered.projectttts,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projectttts', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 5, orderBy: ['time', 'desc']}
  ])
)(Lists)