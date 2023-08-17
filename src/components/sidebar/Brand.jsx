import React from 'react';
import styles from './Sidebar.module.css';
import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

export const Brand = () => {
  const { selectedCompany, handleCompanyChange } = useContext(FilterContext);
  return (
    <>
      {/* Brand category */}
      <div className={styles.brand}>
        <h4>Brand</h4>

        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='brand'
            onChange={handleCompanyChange}
            checked={selectedCompany === 'All'}
            value='All'
          />
          <span className={styles.lbtext}> All</span>
        </label>

        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='brand'
            onChange={handleCompanyChange}
            checked={selectedCompany === 'Arizona'}
            value='Arizona'
          />
          <span className={styles.lbtext}> Arizona</span>
        </label>

        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='brand'
            onChange={handleCompanyChange}
            checked={selectedCompany === 'Bolero'}
            value='Bolero'
          />
          <span className={styles.lbtext}> Bolero</span>
        </label>

        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='brand'
            onChange={handleCompanyChange}
            checked={selectedCompany === 'Lipton'}
            value='Lipton'
          />
          <span className={styles.lbtext}> Lipton</span>
        </label>

        <label className={styles.options}>
          <input
            type='radio'
            className={styles.radio_options}
            name='brand'
            onChange={handleCompanyChange}
            checked={selectedCompany === 'Ultra Ice Tea'}
            value='Ultra Ice Tea'
          />
          <span className={styles.lbtext}> Ultra Ice Tea</span>
        </label>
      </div>
    </>
  );
};
