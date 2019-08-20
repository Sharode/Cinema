import React from "react";

const searchForm = ({ genres }) => {
  const onSubmit = e => {
    e.preventDefault();
  };

  // value={status} onChange={e => onChange(e)}
  return (
    <form action="">
      <div className="form-group">
        <select name="genre">
          {genres.map(genre => (
            <option value={genre.name}>{genre.name}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default searchForm;
