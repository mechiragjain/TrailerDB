import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './Components/Home';
import TvShows from './Components/TvShows';

import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/tvshows' component={TvShows}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
