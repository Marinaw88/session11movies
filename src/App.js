import React from 'react';
import axios from 'axios';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './MovieContainer.js';

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

  voteAverage(movieIndex) {
    console.log(this.state.movies[movieIndex].vote_average);
  }


  render() {
    const imageLink = "https://image.tmdb.org/t/p/w500";

    return (
      <div className="App">
        <marquee class="GeneratedMarquee" direction="left" scrollamount="50" behavior="scroll">CHECK OUT THESE MOVIES!!</marquee>
        <div className="bigContainer"> 
          {this.state.movies.map(movie =>
            {
              <MovieContainer contents={movie}/>
          
             })}
        </div>
      </div>
    );
  }
}

export default App;
