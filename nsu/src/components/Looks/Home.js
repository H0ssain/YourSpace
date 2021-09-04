import React, { Component } from "react";
import "../Css/Home.css";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        <div className="hero">
          <div className="row">
           
          </div>
        </div>
        <div className="intro">
          <h1 className="introText">What We Do At YourSpace</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 5, orderBy: ["time", "desc"] },
  ])
)(Home);
