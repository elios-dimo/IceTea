import { Navbar } from './components/navbar/Navbar';
import { Sidebar } from './components/sidebar/Sidebar';
import { Item } from './components/products/Item';
import { Data } from './components/db/Data';
import React, { useContext } from 'react';
import { FilterContext } from './components/context/FilterContext';

import './App.css';

function App() {
  // get my context values
  const {
    query,
    selectedCompany,
    selectedFlavor,
    selectedPrice,
    handleInputChange,
    resetFilters,
  } = useContext(FilterContext);

  // filter products depending on user input and option selection
  const filteredData = Data.filter((item) => {
    // titleMatch matches user input with items from our products lists
    const titleMatch = item.title.toLowerCase().includes(query.toLowerCase());

    //companyMatch by default has All option selected or it returns items based on company
    const companyMatch =
      selectedCompany === 'All' || item.company === selectedCompany;

    //priceMatch by default has All option selected or it returns items based on price
    const priceMatch =
      selectedPrice === 'All' ||
      (selectedPrice === 'Up to 2 €' && parseFloat(item.price) < 2) ||
      (selectedPrice === '2 - 5 €' &&
        parseFloat(item.price) >= 2 &&
        parseFloat(item.price) <= 5) ||
      (selectedPrice === '5 - 10 €' &&
        parseFloat(item.price) > 5 &&
        parseFloat(item.price) < 10) ||
      (selectedPrice === '10 € and above' && parseFloat(item.price) >= 10);

    //flavorMatch by default has All option selected or it returns items based on flavor,
    // if 'Other' option is selected it returns all flavors except Lemon, Peach, Melon because they have their own options
    const flavorMatch =
      selectedFlavor === 'All' ||
      (selectedFlavor === 'Other' &&
        !['Lemon', 'Peach', 'Melon'].includes(item.flavor)) ||
      item.flavor === selectedFlavor;

    // returns everytime the final compination of user selections (all of the above)
    return titleMatch && companyMatch && priceMatch && flavorMatch;
  });

  return (
    <>
      {/* Navbar final component handles user input and filter reset */}
      <Navbar
        query={query}
        handleInputChange={handleInputChange}
        onLogoClick={resetFilters}
      />
      {/* Item final component handles each product info and all the products 
      that are returned based on filteredData */}
      <Item data={filteredData} />
      {/*  Item final component handles company, price and flavor filters */}
      <Sidebar />
    </>
  );
}

export default App;
