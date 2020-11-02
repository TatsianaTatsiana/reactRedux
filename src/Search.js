import React from 'react';

export const Search = ({ saveSearch }) => {
  return (
    <div className="search-wrapper">
      <label className='search-label'>Search:</label>
      <input type='text' placeholder="What you search ..."
        onChange={(e) => { saveSearch(e.target.value) }} />
    </div>
  )
}