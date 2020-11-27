import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Homepage from './Home';
import Posts from './Posts';
import FormExample from './FormExample';

import './App.css';

function App() {
  return (
    <span>
      <Header />
      <div className="page-container container">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/posts" component={Posts} />
          <Route path="/form" component={FormExample} />
        </Switch>
      </div>
      <Footer />
    </span>
  );
}

export default App;
