import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Content from "./components/content";
import Movie from "./components/movie";
import axios from "axios";
import Pagination from "./components/common/pagination";
import { paginate } from "./utils/paginate";
import QueryGenre from "./components/queryGenre";

class App extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: "",
    pageSize: 12,
    currentPage: 1
  };

  async componentDidMount() {
    let movies = [];
    for (let i = 1; i <= 7; i++) {
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=68f7e49d39fd0c0a1dd9bd094d9a8c75&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}`;

      const { data: items } = await axios.get(url);

      movies = [...movies, ...items.results];
    }

    const { data: category } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=68f7e49d39fd0c0a1dd9bd094d9a8c75&language=en-US"
    );

    this.setState({ movies, genres: category.genres });
  }

  onChange = async e => {
    let genres = this.state.genres;

    const genre = genres.filter(g => g.name === e.target.value);

    let movies = [];

    console.log(genre);

    for (let i = 1; i <= 7; i++) {
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=68f7e49d39fd0c0a1dd9bd094d9a8c75&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&with_genres=${
        genre[0].id
      }`;

      const { data: items } = await axios.get(url);

      movies = [...items.results];
    }
    this.setState({ movies, selectedGenre: genre[0].name });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };

  render() {
    const { pageSize, currentPage, movies, genres, selectedGenre } = this.state;
    // console.log(genres);
    const movie = paginate(movies, currentPage, pageSize);
    return (
      <div>
        <NavBar />
        <div className="container">
          <Content />
          <QueryGenre
            genres={genres}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
          />
          <Movie
            movies={movie}
            genres={genres}
            selectedGenre={selectedGenre}
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
