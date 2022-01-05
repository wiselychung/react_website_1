import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';

// Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';

class App extends Component {
  render(){
    return (
      <Router>
        <PageWrapper>
          <Route
            exact = {true}
            path = "/" 
            component = {Home} 
          />
          
          <Route
            path="/about"
            component={About}
          />
          
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
