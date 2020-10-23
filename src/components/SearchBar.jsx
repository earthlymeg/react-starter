import React from 'react';

var SearchBar = (props) => {
  return(
    <div className='field'>
      <input type='text' 
      value={props.valueOfSearchBox} onChange={props.handleSearchEvent} 
  
      /> 
    </div>
  )


}

export default SearchBar;

