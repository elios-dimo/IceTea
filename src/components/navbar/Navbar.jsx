import styles from './Navbar.module.css';
import { FiShoppingBag } from 'react-icons/fi';
import React, { useState } from 'react';
import { Cart } from '../cart/Cart';
import { selectTotalQuantity } from '../cart/storage/cartSlice';
import { useSelector } from 'react-redux';

export const Navbar = ({ handleInputChange, query, onLogoClick }) => {
  const [cartState, setCartState] = useState(false);
  const totalQuantity = useSelector(selectTotalQuantity);
  const handleCart = () => {
    setCartState(!cartState);
  };

  const handleCartClose = () => {
    setCartState(false);
  };

  return (
    // Logo
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={onLogoClick}>
        Ice<span>Tea</span>
      </div>
      {/* Search  */}
      <input
        type='text'
        placeholder='Please enter your ice tea choice'
        className={styles.search}
        value={query}
        onChange={handleInputChange}
      />
      {/* Shopping bag icon */}
      <div className={styles.bag} onClick={handleCart}>
        <FiShoppingBag />
        {totalQuantity > 0 && (
          <div className={styles.cart_number}>{totalQuantity}</div>
        )}
      </div>
      <Cart isOpen={cartState} handleCartClose={handleCartClose} />
    </nav>
  );
};

export default Navbar;
