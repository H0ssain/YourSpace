import React from 'react'
import { NavLink } from 'react-router-dom'
import ResponsiveMenu from 'react-responsive-navbar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

const Menu = styled.div`
 
ul {
  padding: 0;
}
li {
  display: inline;
  font-size: 13px;
  list-style-type: none;
  margin-left: 10px;
  
}
a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  color: white;
  &:hover {
    color: white;
  }
}
@media (max-width: 500px) {
  padding: 10px 0;
  li {
    padding: 10px 0;
    display: block;
    margin-left: 0;
  }
}
`;


const SignedOutLinks = (props) => {
  const stylus ={
    paddingRight:'95px',
    marginRight:'5px',
   }

   


  return (
    <ResponsiveMenu
    menuOpenButton={<MenuIcon size={50} color="white" />}
    menuCloseButton={<CloseIcon size={50} color="white" />}
    changeMenuOn="500px"
    largeMenuClassName="large-menu-classname"
    smallMenuClassName="small-menu-classname"
    menu={
      <Menu>
    <li style={stylus}><NavLink to='/'><b style={{fontWeight: "bold",fontSize: 21, letterSpacing:2}}>Your</b><b style={{fontWeight: "bold",fontSize: 21, letterSpacing:2, color:'#48C9B0'}}>Space</b></NavLink></li>
      <ul className="right">
        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
      </Menu>
   }
 />
);
}

export default SignedOutLinks