import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../store/actions/projectActionsComm'
import { Redirect } from 'react-router-dom'


class CreateComment extends Component {
  
  state = {
    
    comment: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    var parts = window.location.pathname.split('/');
    var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    this.props.createComment(this.state);
    this.props.history.push('/');
  }

  showAlert = () => {
    alert('Booking Request Sent')
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signup'/>
    
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Fill in the form please</h5>
          <div className="input-field">
            <input type="text" id='comment' onChange={this.handleChange} />
            <label htmlFor="comment">Purpose of Booking</label>
          </div>
        
                     
          <div className="input-field">
            <button onClick={ this.showAlert } className="btn blue darken-2">Post</button>

          </div>
        </form>
      </div>

    )
    }
    
  }


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    comments : state.firestore.data.comments
  }
}


const mapDispatchToProps = dispatch => {
  return {
    createComment: (comment) => dispatch(createComment(comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment)
