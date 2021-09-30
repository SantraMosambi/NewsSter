import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";

const App=()=> {

  
  const pageSize=9
  const country="in"
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <div>
      <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height="5"
        progress={progress}/>
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" page={pageSize} country={country} category="general"/> </Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" page={pageSize} country={country} category="business"/> </Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="business" page={pageSize} country={country} category="entertainment"/> </Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" page={pageSize} country={country} category="health"/> </Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" page={pageSize} country={country} category="science"/> </Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" page={pageSize} country={country} category="sports"/> </Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" page={pageSize} country={country} category="technology"/> </Route>
        
        </Switch>
        </Router>
      </div>
    )
  
}

export default App