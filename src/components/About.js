import React from "react";
import Links from "./Links"
function About(props) {
  const isBio = props.bio
  if (isBio){
    return (
      <div id="about">
        <p>{props.bio}</p>
        <h2>About Me</h2>
        
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
       <Links linkedin ="https://github.com/liza" github="https://www.linkedin.com/in/liza/" /> 
      </div>
    );
  }
  else return null;

  

}

export default About;
