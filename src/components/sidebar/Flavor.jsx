import React from 'react';
import styles from './Sidebar.module.css';
import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

export const Flavor = () => {
  const { selectedFlavor, handleFlavorChange } = useContext(FilterContext);

  return (
    <>
      {/* Flavor category */}
      <div className={styles.flavor}>
        <h4>Flavor</h4>

        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='flavor'
            onChange={handleFlavorChange}
            checked={selectedFlavor === 'All'}
            value='All'
          />
          <span className={styles.lbtext}> All</span>
        </label>

        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='flavor'
            onChange={handleFlavorChange}
            defaultChecked={selectedFlavor === 'Lemon'}
            value='Lemon'
          />
          <span className={styles.lbtext}> Lemon</span>
        </label>

        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='flavor'
            onChange={handleFlavorChange}
            checked={selectedFlavor === 'Peach'}
            value='Peach'
          />
          <span className={styles.lbtext}> Peach</span>
        </label>

        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='flavor'
            onChange={handleFlavorChange}
            checked={selectedFlavor === 'Melon'}
            value='Melon'
          />
          <span className={styles.lbtext}> Melon</span>
        </label>
        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='flavor'
            onChange={handleFlavorChange}
            checked={selectedFlavor === 'Other'}
            value='Other'
          />
          <span className={styles.lbtext}> Other </span>
        </label>
      </div>
    </>
  );
};
