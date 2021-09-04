import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import ProjecttList from "../projects/ProjecttList";
import ProjectttList from "../projects/ProjectttList";
import InfoList from "../projects/InfoList";
import InfoTwoList from "../projects/InfoTwoList";
import InfoThreeList from "../projects/InfoThreeList";
import MoreList from "../projects/MoreList";
import MoreTwoList from "../projects/MoreTwoList";
import MoreThreeList from "../projects/MoreThreeList";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import "../Css/Dashboard.css";

class Dashboard extends Component {
  render() {
    const {
      projects,
      auth,
      notifications,
      projectts,
      projecttts,
      infos,
      infotwos,
      infothrees,
      mores,
    } = this.props;
    {
      /* if (!auth.uid) return <Redirect to="/signin" />; */
    }

    return (
      <div>
        <div className="hero">
          <div className="row"></div>
        </div>
        <div className="space">
          <div className="center">
            <b style={{ fontSize: "30px" }}>
              What We Do At Your<b style={{ color: "#48C9B0" }}>Space</b>
            </b>
          </div>
        </div>

        <div className="dashboard container">
          <div className="row row-cols-3">
            <div className="col s10 m4">
              <InfoList infos={infos} />
            </div>
            <div className="col s10 m4">
              <InfoTwoList infotwos={infotwos} />
            </div>
            <div className="col s10 m4">
              <InfoThreeList infothrees={infothrees} />
            </div>
          </div>
        </div>

        <div className="space">
          <div className="center">
            <b style={{ fontSize: "30px" }}>
              Checkout Available<b style={{ color: "#48C9B0" }}> Space</b>
            </b>
          </div>
        </div>

        <div className="dashboard container">
          <div className="row row-cols-3">
            <div className="col s12 m4">
              <ProjectList projects={projects} />
            </div>
            <div className="col s12 m4">
              <ProjecttList projectts={projectts} />
            </div>
            <div className="col s12 m4">
              <ProjectttList projecttts={projecttts} />
            </div>
          </div>
        </div>

        <div className="beforeLast">
          <div className="center">
            <h1 style={{ color:'white', paddingTop:'10%' }}>BECOME A SPACER</h1>
            <h3 style={{ color:'white', paddingBottom:'10px' }}>SHARE YOUR SPACE AND JOIN THE CHAYA COMMUNITY</h3>
            <p>
              <Link to="/lists" style={{ textDecoration:"none", backgroundColor: "#48C9B0", color:'white', padding:'10px' }}>Listed Spaces</Link>
            </p>
          </div>
        </div>

        <div className="dashboard container">
          <div className="row row-cols-3">
            <div className="col s10 m4">
              <MoreList mores={mores} />
            </div>
            <div className="col s10 m4">
              <MoreTwoList mores={mores} />
            </div>
            <div className="col s10 m4">
              <MoreThreeList mores={mores} />
            </div>
          </div>
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
    projectts: state.firestore.ordered.projectts,
    projecttts: state.firestore.ordered.projecttts,
    infos: state.firestore.ordered.projectts,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projectts", orderBy: ["createdAt", "desc"] },
    { collection: "projecttts", orderBy: ["createdAt", "desc"] },
    { collection: "infos", orderBy: ["desc"] },
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 5, orderBy: ["time", "desc"] },
  ])
)(Dashboard);
