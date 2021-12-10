import React from 'react';
// import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Deneme from '../pages/Deneme';

const Routes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/Deneme" exact component={Deneme} />
  </>
  // )
);

export default withRouter(Routes);
