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
  render() {
    return (
      <div>
      <Router>
        <NavBar/>
        
        <Switch>
          <Route path="/"><News page={6} country="in" category="general"/> </Route>
          <Route path="/business"><News page={6} country="in" category="business"/> </Route>
          <Route path="/entertainment"><News page={6} country="in" category="entertainment"/> </Route>
          <Route path="/health"><News page={6} country="in" category="health"/> </Route>
          <Route path="/science"><News page={6} country="in" category="science"/> </Route>
          <Route path="/about"><News page={6} country="in" category="sports"/> </Route>
          <Route path="/technology"><News page={6} country="in" category="technology"/> </Route>
        
        </Switch>
        </Router>
      </div>
    )
  }
}
