import React from "react";

const image = {
  width: "100%",
  borderRadius: 12
};

const Movie = ({ movies, genres, pageSize, currentPage }) => {
  return (
    <div className="container">
      <div className="row">
        {movies.map(g => {
          let ui_genre = genres.filter(genre => g.genre_ids[0] === genre.id);

          if (g.poster_path) {
            return (
              <div key={g.id} className="col-md-3 col-sm-12">
                <img
                  style={image}
                  key={g.id}
                  src={`https://image.tmdb.org/t/p/w300/${g.poster_path}`}
                  alt={g.title}
                />
                <div>
                  <i className="card__icon fa fa-star" />
                </div>
                <h5>
                  {g.title} <br />
                  <span className="badge badge-warning">
                    {ui_genre[0].name}
                  </span>
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
