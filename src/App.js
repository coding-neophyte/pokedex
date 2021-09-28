import './App.css';
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import React, { Component } from 'react'
import Details from './Details';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/"
            exact
            render={(routerProps) => <Home {...routerProps} />}
          />

          <Route path="/pokemon/"
            exact
            render={(routerProps) => <SearchPage {...routerProps} />}
          />

          <Route path="/pokemon/:_id"
            exact
            render={(routerProps) => <Details {...routerProps} />}
          />

        </Switch>
      </Router>
    )
  }
}
