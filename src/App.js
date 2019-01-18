import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Content from "./components/content";
import Api from "./components/api";
import axios from "axios";

class App extends Component {
  state = {
    genres: []
  };
  async componentDidMount() {
    let url =
      "https://api.themoviedb.org/3/discover/movie?api_key=0ed0947f19031ae2c4b500da3a5904a2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2019";

    const { data: items } = await axios.get(url);

    console.log(items.results);
    this.setState({ genres: items.results });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <Content />
          <Api items={this.state.genres} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
