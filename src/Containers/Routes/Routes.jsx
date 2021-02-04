import React from "react";
import {Router} from '@reach/router';
import JoinedQueue from '../../Components/JoinedQueue';
import Home from '../../Components/Home';
import styles from "./Routes.module.scss";

const Routes = () => {
  return (
    <>
    <Router>
      <Home path = '/'/>
      <JoinedQueue path = 'queue'/>
    </Router>
    </>
  );
};

export default Routes;
