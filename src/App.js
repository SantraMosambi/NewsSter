import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";



import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  page=6
  country="in"
  render() {
    return (
      <div>
      <Router>
        <NavBar/>
        
        <Switch>
          <Route exact path="/"><News key="general" page={this.page} country={this.country} category="general"/> </Route>
          <Route exact path="/business"><News key="business" page={this.page} country={this.country} category="business"/> </Route>
          <Route exact path="/entertainment"><News key="business" page={this.page} country={this.country} category="entertainment"/> </Route>
          <Route exact path="/health"><News key="health" page={this.page} country={this.country} category="health"/> </Route>
          <Route exact path="/science"><News key="science" page={this.page} country={this.country} category="science"/> </Route>
          <Route exact path="/sports"><News key="sports" page={this.page} country={this.country} category="sports"/> </Route>
          <Route exact path="/technology"><News key="technology" page={this.page} country={this.country} category="technology"/> </Route>
        
        </Switch>
        </Router>
      </div>
    )
  }
}
