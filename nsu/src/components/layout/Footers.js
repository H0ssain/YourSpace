import React, { Component } from "react";
import SimpleReactFooter from "simple-react-footer";


class Footers extends Component {
 render() {
  const description = "Your Space is a space sharing platform. People who own space that goes unused can list up on our website. People who want to use these spaces for different purposes can request to book them on Your Space";
  const title = "YourSpace";
  const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                link: "/#"
            },
            {
                name: "Careers",
                link: "/#"
            },
            {
                name: "Contact",
                link: "/#"
            },
          
        ]
    },
    {
        title: "Legal",
        resources: [
            {
                name: "Privacy",
                link: "/#"
            },
            {
                name: "Terms",
                link: "/#"
            }
        ]
    },
   
 ];
 return <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin="#"
    facebook="#"
    twitter="#"
    instagram="#"
    youtube="#"
    pinterest="#"
    copyright="white"
    iconColor="white"
    backgroundColor="#1C2833"
    fontColor="white"
    copyrightColor="#1C2833"
    />;
 }
}

export default Footers;