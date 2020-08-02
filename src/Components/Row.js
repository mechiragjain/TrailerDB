import React,{useState, useEffect} from 'react';
import axios from './../axios';
import "./Row.css";
import YouTube from 'react-youtube';

const movieTrailer = require( 'movie-trailer' );

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLarger=true}){
  const [movies, setMovies]=useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height:"390",
    width:"100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie)=>{
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.name || movie?.title || "")
      .then(url =>{
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch((err)=> console.log(err));
    }
  }

  return(
    <div className="row">
      <p className="row-title">{title}</p>
      <div className="row_posters">
        {movies.map(movie => {
          return(
            movie.poster_path?
            <img onClick={()=> handleClick(movie)}
            className={`row_poster ${isLarger && "poster_larger"}`}
            src={`${imageBaseUrl}${isLarger ? movie.poster_path:movie.backdrop_path}`} key={movie.id} alt={movie.name}
            />
            :
            ""
          )
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row;
