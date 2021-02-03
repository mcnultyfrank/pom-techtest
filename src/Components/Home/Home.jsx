import React, {useEffect, useRef, useState} from "react";
import styles from "./Home.module.scss";
import firebase, {provider}  from "../../firebase.js"

const Home = () => {
  const [sent, setSent] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  var actionCodeSettings = {
    url: 'http://pomclone-techtest.web.app/',
    handleCodeInApp: true,
  };
  const signUp = (userEmail, actionCodeSettings) => {
    firebase.auth().sendSignInLinkToEmail(userEmail, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem('emailForSignIn', userEmail);
      sendCustomVerificationEmail(userEmail, displayName, 'hello there')
      setSent(true)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  useEffect(() => {
    return () => setSent();
  }, [setSent])

  return (
    <div className = {styles.homeContainer}>
      <div className = {styles.heroContainer}>
      <div className={styles.anim} data-src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f8336d152384d8d8ffe354f_right%20Line%20test%20.json"></div> 
        <h1>THE DATING APP FOR <span className= {styles.headerSpan}>MUSIC LOVERS</span></h1>
        <p>POM harnesses the Power of Music, channelling it into an exciting, new inclusive dating app.</p>
        <input onChange={ e => (setUserEmail(e.target.value))} type="email" name="" id="" placeholder="enter your email here..." className= {styles.inputEmail}/>
        <input onClick={() => signUp(userEmail, actionCodeSettings)} type="submit"  value={sent === false ? "Join The Queue" : "Check inbox!" } className= {styles.inputSubmit}/></div>
    </div>
  );
};

export default Home;
