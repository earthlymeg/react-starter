import React from 'react';
import MovieList from './MovieList.jsx'; 
import Movies from '../data/MovieData.js';
import SearchBar from './SearchBar.jsx'
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      movieList: Movies,
      value: 'Search for Movies',

    }
  
    this.handleSearchEvent = this.handleSearchEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWatchedClick = this.handleWatchedClick.bind(this);
  }

  handleWatchedClick(movie) {
   
    
    //when button is clicked 
    //curentmovie.isWatched = true

    movie['watchedState'] = true;
    //the movie has changed 

    this.setstate({
      movieList: Movies
    }, function(){})
    
  }

  handleSearchEvent(e) {
  
    var filtered = Movies.filter((movie) => {
      //console.log(movie.title, e.target.value, movie.title.indexOf(e.target.value) > -1);
      if (movie.title.indexOf(e.target.value) > -1) {
        return movie;
      }
    })
    
    this.setState({
      movieList: filtered
    })

    this.setState({
      value: e.target.value
    })


  }
  
  handleSubmit(e) {
    e.preventDefault()
    //console.log(e.target[1].value);
    var tempTitle = e.target[1].value;
    var tempMovie = {title: tempTitle};
    tempMovie['watchedState'] = false;
    
    Movies.push(tempMovie);

  this.setState({
      movieList: Movies
    })
    
    //console.log(Movies);

  }
    
  
  render(){
    return(
    <div>
      <div className='movieHeader'>
      MOVIES
      </div>
      <div className='searchBar'>
        <SearchBar handleSearchEvent={this.handleSearchEvent} 
        valueOfSearchBox={this.state.value} 
        />
      </div>
      <div className="addMovie">
        <AddMovie handleSubmit={this.handleSubmit}/>
      </div>
      <div className="movieList">
      <MovieList movies={this.state.movieList} 
      handleWatchedClick={this.handleWatchedClick}
      />
    </div>
      
    </div>

  )}

}

export default App;
