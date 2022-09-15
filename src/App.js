import React from 'react';
import MovieList from './components/movie-list';
import { MOVIES } from './components/movies';

export default class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      movies: MOVIES,
    };

   
  }
  render() {
    return (
      <MovieList movies={this.state.movies} />
    );
  }
}