import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createReq } from '../../store/actions/projectActionsReq'
import { Redirect } from 'react-router-dom'
import "../Css/Screen.css";


class CreateReq extends Component {
  state = {
    location: '',
    salary: '',
    week:'',
    subs:'',
    address:'',
    phone:'',
    trial:'off',
    description:'',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createReq(this.state);
    this.props.history.push('/');
  }

  showAlert = () => {
    alert('Thank you for Sending us the details, We will contact soon')
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <div className="row">
         <div className="col s12">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Let us know about Your Space</h5>
          <div className="input-field">
            <input type="text" id='location' onChange={this.handleChange} />
            <label htmlFor="location">Location</label>
          </div>
          <div className="input-field">
            <input type="text" id='salary' onChange={this.handleChange} />
            <label htmlFor="salary">Expected Rent</label>
          </div>
          <div className="input-field">
            <input type="text" id='subs' onChange={this.handleChange} />
            <label htmlFor="subs">Space Size</label>
          </div>
          <div className="input-field">
            <input type="number" id='phone' onChange={this.handleChange} />
            <label htmlFor="phone">Contact Number</label>
          </div>
          <div className="input-field">
            <input type="checkbox" id='trial' onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'Is Pets allowed'}<br></br>
          </div>
          <div className="input-field">
            <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="description">Space Description</label>
          </div>
          <div className="input-field">
            <button onClick={ this.showAlert }  className="btn blue darken-3">Create</button>
          </div>
        </form>
      </div>
    </div>
  </div> 

    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createReq: (req) => dispatch(createReq(req))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReq)