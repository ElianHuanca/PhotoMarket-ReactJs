import React from 'react';

export const SelectOption = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="form-select">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};


