import React from 'react';


var MovieList = (props) => {
  //console.log('movielist props, check for change watched text', props);

  return (
  props.movies.map( (movie) => 
  <div className="movieTitle">
    {movie.title}
  <button className='watched-button' onClick={props.handleWatchedClick(movie)}>{/* if movie.isWatched = false, make this text = 'Not Watched'*/ }</button>
    </div>)
  );

}
export default MovieList;

