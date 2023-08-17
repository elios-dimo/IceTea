import React, { createContext, useState } from 'react';

// Create a new context for filters
export const FilterContext = createContext();

// Create a provider component to wrap the app and manage the filter state
export const FilterProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedFlavor, setSelectedFlavor] = useState('All');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleFlavorChange = (event) => {
    setSelectedFlavor(event.target.value);
  };
  // function for reseting user options uppon clicking navbar 'IceTea' logo
  const resetFilters = () => {
    setQuery('');
    setSelectedCompany('All');
    setSelectedPrice('All');
    setSelectedFlavor('All');
  };

  return (
    <FilterContext.Provider
      value={{
        query,
        setQuery,
        selectedCompany,
        setSelectedCompany,
        selectedPrice,
        setSelectedPrice,
        selectedFlavor,
        setSelectedFlavor,
        handleInputChange,
        handleCompanyChange,
        handlePriceChange,
        handleFlavorChange,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
