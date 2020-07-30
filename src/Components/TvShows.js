import React from 'react';
import requests from './../requests';

import Row from './Row';
import Navbar from './Navbar';
import Banner from './Banner';

function TvShows() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrendingTV}/>
      <Row title="Discover" fetchUrl={requests.fetchDiscoverShows}/>
      <Row title="New Releases" fetchUrl={requests.fetchNewRealeasesShows}/>
      <Row title="Action TV Shows" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Reality TV Shows" fetchUrl={requests.fetchRealityShows}/>
      <Row title="Crime TV Shows" fetchUrl={requests.fetchCrimeShows}/>
      <Row title="Dark TV Dramas" fetchUrl={requests.fetchDramaShows}/>
      <Row title="Western Shows" fetchUrl={requests.fetchWesternShows}/>
      <Row title="War & Politics TV Shows" fetchUrl={requests.fetchWarShows}/>
      <Row title="Kids Shows" fetchUrl={requests.fetchKidsShows}/>
    </div>
  );
}

export default TvShows;
