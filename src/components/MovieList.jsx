import React from 'react';


var MovieList = (props) => {
  console.log('movielist props', props);

  return(
    <div>
      <li>{props.movies[0].title}</li>
      <br></br>
      <li>{props.movies[1].title}</li>
      <br></br>
      {/* <li>{props.movies[2].title}</li>
      <br></br>
      <li>{props.movies[3].title}</li>
      <br></br>
      <li>{props.movies[4].title}</li> */}
    </div>
  );
  };



export default MovieList;

