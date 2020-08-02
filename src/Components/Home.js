import React from 'react';
import requests from './../requests';

import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="container">
      <Navbar />
      <Banner type={"fetchNetflixOriginals"} />
      <Row title="Popular on Netflix" fetchUrl={requests.fetchTrending} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Bollywood Movies" fetchUrl={requests.fetchBollywoodMovies} />
      <Row title="Exciting TV Shows" fetchUrl={requests.fetchDiscoverShows} />
      <Row title="Dramas" fetchUrl={requests.fetchDramaMovies} />
      <Row title="Police Detective TV" fetchUrl={requests.fetchCrimeShows} />
      <Row title="Action TV Shows" fetchUrl={requests.fetchActionShows} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Thriller Movies" fetchUrl={requests.fetchThriller} />
      <Row title="Hollywood Movies" fetchUrl={requests.fetchHollywoodMovies} />
      <Row title="Irreverent Comedies" fetchUrl={requests.fetchBollywoodComedyMovies} />
      <Row title="Science Fiction" fetchUrl={requests.fetchScienceFiction} />
      <Row title="TV Movie" fetchUrl={requests.fetchTVMovie} />
    </div>
  );
}

export default Home;
