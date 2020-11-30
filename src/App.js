import React from 'react';
import axios from 'axios';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies() {
    // go grab (aka get) all the data from some url
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    axios.get(url)
      .then(response =>
      {
        // then put just the movies (not everything) into the state
        this.setState({movies: response.data.results});
      });

  }

  render() {
    // let movies = [];
    // for(let i = 0; i < this.state.movies.length; i++)
    // {
    //   movies.push(<h2>{this.state.movies[i].title}</h2>)
    // }

    const imageLink = "https://image.tmdb.org/t/p/w500";

    return (
      <div className="App">
        <marquee class="GeneratedMarquee" direction="left" scrollamount="50" behavior="scroll">CHECK OUT THESE MOVIES!!</marquee>
        {this.state.movies.map(movie =>
          {
            return (
          <div className="movieContainer"> 
            <img src = {imageLink + movie.poster_path} className="poster">
               </img>
            <div>
            <h2>{movie.title} ({movie.release_date})</h2>
            </div>
          </div>
        )})}
      </div>
    );
  }
}

export default App;
