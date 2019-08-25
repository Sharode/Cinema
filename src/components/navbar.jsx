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
      <a href="/"><span className="navbar-brand" style={navStyle}>
        Flix-N-Chill
      </span></a>

    </nav>
  );
};

export default NavBar;
