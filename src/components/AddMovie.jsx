import React from 'react';

var AddMovie = (props) => {
    return(
        <div>
          <form onSubmit={props.handleSubmit}>
            <button className="add-Movie-button" >Add Movie Title</button>
            <input className="add-Movie-box" id="movie-name"/>
          </form>
        </div>
    )

    
}

export default AddMovie;