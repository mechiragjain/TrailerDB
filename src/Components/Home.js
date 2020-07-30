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
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Popular" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action TV" fetchUrl={requests.fetchActionMovies} />
      <Row title="Dramas" fetchUrl={requests.fetchDramaMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Thriller Movies" fetchUrl={requests.fetchThriller} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Science Fiction" fetchUrl={requests.fetchScienceFiction} />
      <Row title="TV Movie" fetchUrl={requests.fetchTVMovie} />
    </div>
  );
}

export default Home;
