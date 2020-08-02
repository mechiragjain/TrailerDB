import React from 'react';
import requests from './../requests';

import Row from './Row';
import Navbar from './Navbar';

function Upcoming() {
  return (
    <div style={{"padding-top":"100px"}} className="container">
      <Navbar />
      <Row title="Movies Coming this Month" fetchUrl={requests.fetchUpcomingMoviesMonth}/>
      <Row title="TV Shows Coming this Month" fetchUrl={requests.fetchUpcomingShowsMonth} />
      <Row title="Upcoming Indian Movies" fetchUrl={requests.fetchBollywoodUpcoming} />
    </div>
  );
}

export default Upcoming;
