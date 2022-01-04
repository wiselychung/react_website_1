import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
        <PageWrapper>
          <Route path = "/" component = {Home} />
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
