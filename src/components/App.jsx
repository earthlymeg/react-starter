import React from 'react';
import MovieList from './MovieList.jsx'; 
import Movies from '../data/MovieData.js';
import SearchBar from './SearchBar.jsx'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      movieList: Movies
    }
  
    this.handleSearchEvent = this.handleSearchEvent.bind(this);
  
  }


  handleSearchEvent(e) {
    //when user submits search
    //only display movies that contain those letters
    //movieList state will change to only show movie with letters
    //console.log('movie arr in map fxn', Movies);
    var filtered = Movies.filter((movie) => {
      //console.log(movie.title, e.target.value, movie.title.indexOf(e.target.value) > -1);
      if (movie.title.indexOf(e.target.value) > -1) {
        
        return movie;
        
      }
    })
    
    this.setState({
      movieList: filtered
    })
   
  //   return(
  //    console.log(e.target.value) 
  //  )
  }
  
    
  
  render(){
    return(
    <div>
      <div className='movieHeader'>
      Movies
      </div>
      <div className='searchBar'>
        Search Movies
        <SearchBar handleSearchEvent={this.handleSearchEvent}/>
      </div>
      <div className="movieList">
      <MovieList movies={this.state.movieList} />
    </div>
      
    </div>

  )}

}

export default App;
