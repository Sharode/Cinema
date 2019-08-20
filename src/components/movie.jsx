import React from "react";
import searchForm from "./searchForm";

const image = {
  width: "100%",
  borderRadius: 12
};

const Movie = ({ movies, genres, pageSize, currentPage, selectedGenre }) => {
  return (
    <div className="container">
      <div className="row">
        {movies.map(movie => {
          let ui_genre = genres.filter(
            genre => movie.genre_ids[0] === genre.id
          );
          if (movie.poster_path && selectedGenre === "") {
            return (
              <div key={movie.id} className="col-md-3 col-sm-12">
                <img
                  style={image}
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div>
                  <i className="card__icon fa fa-star" />
                </div>
                <h5>
                  {movie.title} <br />
                  <span className="badge badge-warning">
                    {ui_genre[0].name}
                  </span>
                </h5>
              </div>
            );
          } else if (true) {
            console.log(selectedGenre);
            return (
              <div key={movie.id} className="col-md-3 col-sm-12">
                <img
                  style={image}
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div>
                  <i className="card__icon fa fa-star" />
                </div>
                <h5>
                  {movie.title} <br />
                  <span className="badge badge-warning">{selectedGenre}</span>
                </h5>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Movie;
