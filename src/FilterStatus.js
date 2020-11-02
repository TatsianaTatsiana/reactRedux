import React from 'react';

export const FilterStatus = ({ filterStatusSave }) => {
  return (
    <div className="filterStatus-wrapper">
      <select onChange={(e) => { filterStatusSave(e.target.value) }}>
        <option value=''>All</option>
        <option value='done'>Done</option>
        <option value='not done'>Not done</option>
      </select>
    </div>
  )
}