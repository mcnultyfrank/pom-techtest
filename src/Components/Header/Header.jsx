import React, {useState} from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons' 

const Header = () => {
  const [open, setOpen] = useState(false);
  const noDisplayContents = {
    transform: 'translateY(-160%)',
    display: '0'
  }
  const displayContents = {
    transform: 'translateY(0%)',
  }

  return (
    <>
    <div>
      <header className = {styles.header}>
        <div>
          <img src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f847e77ef0f35843704c5b8_pom%20logo.svg" loading="lazy" alt="" />
        </div>
        <div  className =  {styles.menuIconContainer}>
          <FontAwesomeIcon size='2x' onClick={() => setOpen(!open)} icon={open === true ?  faTimes : faBars}  className={styles.menuIcon} /> 
        </div>
      </header>
        <div  style={open === true ? displayContents : noDisplayContents}  className = {styles.burgerMenuList}>
          <ul>
            <h2>HOME</h2>
            <h2>HOW IT WORKS</h2>
            <h2>DATING TIPS</h2>
            <h2>CONTACT</h2>
            <button onClick = {() => setOpen(false)}>Join The Queue</button>
          </ul>
          <div className = {styles.navFooter}>
            <div className={styles.soonContainer}>
              <p>Coming soon</p>
              <div>
              <img src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f763c892974051a94f1d887_Android%20Download.svg" alt="" srcset=""/>
              <img src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f763c893ac4118bf4da8006_iOs%20Download.svg" alt="" srcset=""/>
              </div>
            </div>
            <div className = {styles.navInfo}>
            <p>hello@thepom.co</p>
            <p>T & C's</p>
            <p>Privacy Policy</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faFacebook} className = {styles.icons} href="https://www.facebook.com/discoverpom/" />
              <FontAwesomeIcon icon={faInstagram} className = {styles.icons} />
              <FontAwesomeIcon icon={faTwitter} className = {styles.icons} />
            </div>
          </div>

        </div>

    </div>
    </>
  );
};

export default Header;
