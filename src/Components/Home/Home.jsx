import React, {useEffect, useRef, useState} from "react";
import styles from "./Home.module.scss";
import firebase, {provider}  from "../../firebase.js"

const Home = () => {
  const [sent, setSent] = useState(false);
  const [userEmail, setUserEmail] = useState('');
 
  // const display = {
  //   display: 'contents'
  // }
  // const noDisplay = {
  //   display: 'none'
  // }
  const signUp = (userEmail, actionCodeSettings) => {
    firebase.auth().sendSignInLinkToEmail(userEmail, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem('emailForSignIn', userEmail);
      setSent(true)
      console.log(userEmail);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem('emailForSignIn');      
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      firebase.auth().signInWithEmailLink(email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem('emailForSignIn');
        })
        .catch((error) => {
        });
    }
  }

  useEffect(() => {
    return () => setSent();
  }, [setSent])
  useEffect(() => {
    return   window.scrollTo(0, 0);
  },[])


  return (
    <div className = {styles.homeContainer}>
      <div className = {styles.heroContainer}>
      <div className={styles.anim} data-src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f8336d152384d8d8ffe354f_right%20Line%20test%20.json"></div> 
        <h1>THE DATING APP FOR <span className= {styles.headerSpan}>MUSIC LOVERS</span></h1>
        <p>POM harnesses the Power of Music, channelling it into an exciting, new inclusive dating app.</p>
        <input onChange={ e => (setUserEmail(e.target.value))} type="email" name="" id="" placeholder="enter your email here..." className= {styles.inputEmail}/>
        <input onClick={() => signUp(userEmail, {url: 'https://pomclone-techtest.web.app/queue',handleCodeInApp: true,})} type="submit"  value={sent === false ? "Join The Queue" : "Check your inbox and follow instructions to continue!" } className= {styles.inputSubmit}/></div>
    </div>
  );
};

export default Home;
