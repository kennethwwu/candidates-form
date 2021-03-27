import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from '../pages/Home'
import UserDetails from '../pages/UserDetails'
import Layout from '../Layout'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout><Home /></Layout>
        </Route>
        <Route exact path="/user/:id">
          <Layout><UserDetails /></Layout>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}
