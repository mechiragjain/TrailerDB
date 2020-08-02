import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './Components/Home';
import TvShows from './Components/TvShows';
import Movies from './Components/Movies';
import Upcoming from './Components/Latest';

import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movies' component={Movies} />
          <Route exact path='/tvshows' component={TvShows}/>
          <Route exact path='/upcoming' component={Upcoming}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
