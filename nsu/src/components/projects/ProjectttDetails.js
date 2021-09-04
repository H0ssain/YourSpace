import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";
import moment from "moment";
import "../Css/Details.css";

const ProjectttDetails = (props) => {
  const { comments, projecttt, auth } = props;
  var parts = window.location.pathname.split("/");
  var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash
  //var url = window.location.href;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (projecttt) {
    return (
      <div className="container section project-details">
        <div className="row">
          <div className="col s12">
            <div className="card z-depth-0 details">
              <div className="card-content">
                <span className="card-title">
                  <span className="blue-text">{projecttt.subs}</span>
                </span>
                <p>
                  <b style={{ fontWeight: "bold" }}>From : </b>
                  <span className="green-text">{projecttt.salary}</span>
                </p>
                <p>
                  <b style={{ fontWeight: "bold" }}>House Rules : </b>
                  {projecttt.week}
                </p>
                <p>
                  <b style={{ fontWeight: "bold" }}>Add-On(s) : </b>
                  {projecttt.trial}
                </p>
                <div className="container center">
                  <p>
                    <b style={{ fontWeight: "bold", fontSize: 20 }}>
                      Place Description
                    </b>
                  </p>
                </div>
                <p className="center">{projecttt.description}</p>
              </div>
              <div className="card-action">
                <div className="overflows">
                  <img className="detailImage" src={projecttt.image} height="700" width="350" alt=" " />
                </div>
              </div>
              <br></br>
              
             
              
              <div className="center">
                <Link to={"/comment/" + lastSegment}>
                  <button className="btn blue darken-3 z-depth-1">BOOK</button>
                </Link>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <span className="black-text">Loding Space Details</span>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projecttts = state.firestore.data.projectts;
  const projecttt = projecttts ? projecttts[id] : null;
  return {
    projecttt: projecttt,
    auth: state.firebase.auth,
    comments: state.firestore.ordered.comments,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "comments", orderBy: ["createdAt", "desc"] }])
)(ProjectttDetails);
