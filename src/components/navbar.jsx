import React from "react";

const navStyle = {
  float: "left",
  textAlign: "center",
  width: "100%",
  fontSize: 32
};
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand" style={navStyle}>
        Flix & Chill
      </span>
    </nav>
  );
};

export default NavBar;
