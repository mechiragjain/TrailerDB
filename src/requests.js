const API_KEY = "bfa985c269b4982f57c6fbc41f28eac6";

const requests = {
  fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchDramaMovies:`/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchThriller:`/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchTVMovie:`/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  fetchScienceFiction:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchBollywoodMovies:`/discover/movie?api_key=${API_KEY}&region=IN&language=hi-IN&with_original_language=hi`,
  fetchHollywoodMovies:`/discover/movie?api_key=${API_KEY}&region=US&language=en-US&with_original_language=en`,
  fetchBollywoodComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35&region=IN&language=hi-IN&with_original_language=hi`,

  fetchTrendingTV:`/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  fetchDiscoverShows:`discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
  fetchNewRealeasesShows:`/discover/tv?api_key=${API_KEY}&language=en-US&first_air_date_year=2020&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
  fetchActionShows:`/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetchComedyShows:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchRealityShows:`/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  fetchCrimeShows:`/discover/tv?api_key=${API_KEY}&with_genres=80`,
  fetchDramaShows:`/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchWesternShows:`/discover/tv?api_key=${API_KEY}&with_genres=37`,
  fetchWarShows:`/discover/tv?api_key=${API_KEY}&with_genres=10768`,
  fetchKidsShows:`/discover/tv?api_key=${API_KEY}&with_genres=10762`,
}

export default requests;
