import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Faq from './components/layout/Faq'
import Dashboard from './components/dashboard/Dashboard'
import Lists from './components/dashboard/Lists'
import ProjectDetails from './components/projects/ProjectDetails'
import ProjecttDetails from './components/projects/ProjecttDetails'
import ProjectttDetails from './components/projects/ProjectttDetails'
import ProjecttttDetails from './components/projects/ProjecttttDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateReq from './components/projects/CreateReq'
import CreateComment from './components/projects/CreateComment'
import Profile from './components/dashboard/Profile'
import Home from './components/Looks/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footers from './components/layout/Footers'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
         <Navbar /> 
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/projectt/:id' component={ProjecttDetails} />
            <Route path='/projecttt/:id' component={ProjectttDetails} />
            <Route path='/projectttt/:id' component={ProjecttttDetails} />
            <Route path='/Faq' component={Faq} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/createRequest' component={CreateReq} />
            <Route path='/comment/:id'component={CreateComment} />
            <Route path='/profile'component={Profile} />
            <Route path='/lists'component={Lists} />
            <Route path='/home'component={Home} />
          </Switch>
        </div>
        <Footers />
      </BrowserRouter>
    );
  }
}

export default App;