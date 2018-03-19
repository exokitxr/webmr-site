import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import PageNotFound from './PageNotFound';

export default class Body extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}
