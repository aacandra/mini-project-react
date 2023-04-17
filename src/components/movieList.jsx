import React, { useState, useEffect } from "react";
import Axios from "axios";

function TrendingMoviesList() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    Axios({
      method: "get",
      url: "https://api.themoviedb.org/3/trending/movie/week?api_key=1e05d6c6fe757614cf08f4083d927aaf",
    }).then(function (response) {
      console.log(response);
      setTrendingMovies(response.data.results);
    });
  }, []);

  return (
    <div className="trending">
      <h3>Trending</h3>
      <div className="trending-cards">
        {trendingMovies.map((movie, i) => (
          <div key={i} className="trending-card">
            <div className="movie-wrapper" key={i}>
              <div className="card"></div>
              <div className="poster">
                <img
                  className="movie-image"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="info">
                <div className="movie-tittle ">{movie.title}</div>
                <div className="vote-average">{movie.vote_average}</div>
              </div>
              <div className="overview">
                <div>
                  <p className="movie-id">Movie ID:{movie.id}</p>
                </div>
                <div>
                  <h4 className="overviews">Overview:</h4>
                </div>
                <div>
                  <p className="overview-info">{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingMoviesList;
