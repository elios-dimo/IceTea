import styles from './Sidebar.module.css';
import React, { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

export const Price = () => {
  const { selectedPrice, handlePriceChange } = useContext(FilterContext);
  return (
    <>
      {/* Price category */}
      <div className={styles.price}>
        <h4>Price</h4>
        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='price'
            onChange={handlePriceChange}
            checked={selectedPrice === 'All'}
            value='All'
          />
          <span className={styles.lbtext}> All</span>
        </label>

        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='price'
            onChange={handlePriceChange}
            checked={selectedPrice === 'Up to 2 €'}
            value='Up to 2 €'
          />
          <span className={styles.lbtext}> Up to 2 €</span>
        </label>

        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='price'
            onChange={handlePriceChange}
            checked={selectedPrice === '2 - 5 €'}
            value='2 - 5 €'
          />
          <span className={styles.lbtext}> 2 - 5 €</span>
        </label>

        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='price'
            onChange={handlePriceChange}
            checked={selectedPrice === '5 - 10 €'}
            value='5 - 10 €'
          />
          <span className={styles.lbtext}> 5 - 10 €</span>
        </label>
        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='price'
            onChange={handlePriceChange}
            checked={selectedPrice === '10 € and above'}
            value='10 € and above'
          />
          <span className={styles.lbtext}> 10 € and above</span>
        </label>
      </div>
    </>
  );
};
