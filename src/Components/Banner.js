import React,{useState, useEffect} from 'react';
import axios from './../axios';
import requests from './../requests';
import YouTube from 'react-youtube';

import './Banner.css'

const movieTrailer = require( 'movie-trailer' );

function Banner({type}){
  const [movie, setMovie]=useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const bannerCollection=type?requests.fetchNetflixOriginals:requests.fetchTrendingTV;

  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get(bannerCollection);
      setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length -1)]);
      return request;
    }
    fetchData();
  },[bannerCollection])

  function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"...":str;
  }

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
      movieTrailer(movie?.name || "")
      .then(url =>{
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch((err)=> console.log(err));
    }
  }

  return(
    <header className="banner" style={{
      backgroundSize:"cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition:"center center",
    }}>
      <div className="banner-container">
        <h1 className="banner-title">{movie?.title||movie?.name||movie?.original_name}</h1>
        <h2 className="banner-description">{truncate(movie?.overview,150)}</h2>
        <div className="banner-buttons">
          <button onClick={()=> handleClick(movie)} className="banner-button">Play</button>
        </div>
        <div className="banner-video">
        </div>
      </div>
      <div className="fade-banner" />
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </header>
  )
}

export default Banner;
