import React from 'react';

var SearchBar = (props) => {
console.log('props from search bar', props)
  return(
    <div className='field'>
      <input type='text'  onChange={props.handleSearchEvent}/>  
    </div>
  )


}

export default SearchBar;

//onChange={props.handleSearchEvent}