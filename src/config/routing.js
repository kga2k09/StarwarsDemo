import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Details from '../screens/Details'
class Routing extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/details/:id" component={Details} />
      </div>
    )
  }
}

export default Routing;