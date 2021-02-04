import React, {useState, useEffect} from "react";
import {Link} from "@reach/router";
import styles from "./JoinedQueue.module.scss";

const JoinedQueue = () => {
  const [queueInfo, setQueueInfo] = useState({});

  const getQueueInfo = () => {
    fetch("./queue.json")
    .then(res => res.json())
    .then(data => setQueueInfo(data))
    console.log(queueInfo);
  }
  useEffect(() => {
    getQueueInfo();

  }, [])
  console.log(window.localStorage.getItem('emailForSignIn'));
  

  return (
    <>
    <div className={styles.queueContainer}>
    <h1>THANKS FOR SIGNING UP AND JOINING THE<span className= {styles.headerSpan}> QUEUE!</span></h1>
      <p>You are in position <span className= {styles.headerSpan}> {queueInfo.queueNumber}</span> of the queue</p>
      <p>Signed up with <span className= {styles.headerSpan}>{window.localStorage.getItem('emailForSignIn')}</span></p>
      <Link to ='/'>
        <input className= {styles.inputSubmit} value = "Back To Home"/>
      </Link>
    </div>
    </>
  );
};

export default JoinedQueue;
