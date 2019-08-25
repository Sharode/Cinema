import React from "react";

const queryGenre = ({ genres, onSubmit, onChange }) => {
  return (
    <form onSubmit={e => onSubmit(e)}>
      <div className="form-group">
        <select name="genre" className="form-control" onChange={e => onChange(e)}>
          {genres.map(genre => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      {/* <input type="submit" className="btn btn-primary my-1" /> */}
    </form>
  );
};

export default queryGenre;
