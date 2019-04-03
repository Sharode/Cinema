import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Content from "./components/content";
import Movie from "./components/movie";
import axios from "axios";
import Pagination from "./components/common/pagination";
import { paginate } from "./utils/paginate";

class App extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 12,
    currentPage: 1
  };

  async componentDidMount() {
    let movies = [];
    for (let i = 1; i <= 5; i++) {
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=68f7e49d39fd0c0a1dd9bd094d9a8c75&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}`;

      const { data: items } = await axios.get(url);

      movies = [...movies, ...items.results];
    }

    const { data: category } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=68f7e49d39fd0c0a1dd9bd094d9a8c75&language=en-US"
    );

    // console.log(movies);
    // console.log(category.genres[0]);

    this.setState({ movies, genres: category.genres });
  }
  render() {
    const { pageSize, currentPage, movies, genres } = this.state;

    const movie = paginate(movies, currentPage, pageSize);
    return (
      <div>
        <NavBar />
        <div className="container">
          <Content />
          <Movie
            movies={movie}
            genres={genres}
            pageSize={pageSize}
            currentPage={currentPage}
          />
          <Pagination
            itemsCount={movies.length}
            pageSize={pageSize}
            onPageChange={page => {
              this.setState({ currentPage: page });
            }}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
