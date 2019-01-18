import React from "react";

const API = ({ items }) => {
  let urlBase = "https://image.tmdb.org/t/p/w300/";
  return (
    <div className="container row">
      {items.map(g => (
        <div key={g.id} className="col-4">
          <img
            key={g.id}
            src={`${urlBase}${g.poster_path}`}
            alt={g.title}
            style={{ width: 200, height: 200 }}
          />

          <h3>{g.title}</h3>
          <p className="text-truncate">{g.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default API;
