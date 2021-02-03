import React from "react";
import styles from "./Mission.module.scss";

const Mission = () => {
  return (
    
      <div className= {styles.missionContainer}> 
        <div className = {styles.imageContainer}>
          <img src="https://images.unsplash.com/photo-1605381942640-0a262ce59788?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80" alt="" srcset=""/>
        </div>
        <div className = {styles.textContainer}>
          <img src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f8321cad320e45d9bae1642_Group%20743.svg" alt="" srcset=""/>
          <h1>OUR MISSION</h1>
          <p>In a dating scene dominated by swipe-lefts and swipe-rights, we like to do things differently. POM delivers genuine connections based on a shared love of the same music.
            <br/><br/>
              Launching in London soon, there’s a limited number of spots available for our upcoming beta so sign up now for early-access benefits.
          </p>
          <button>Dating Tips</button>
        </div>
      </div>
  );
};

export default Mission;
