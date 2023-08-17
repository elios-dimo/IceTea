import React from 'react';
import styles from './Quantity.module.css';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './storage/cartSlice';

export const Quantity = ({ item }) => {
  const dispatch = useDispatch();

  // Function to handle incrementing the quantity of an item in the cart
  const handleIncrement = (item) => {
    dispatch(increment({ id: item.id }));
  };

  // Function to handle decrementing the quantity of an item in the cart
  const handleDecrement = (item) => {
    // Check if the item quantity is greater than 1 to prevent negative values
    if (item.quantity > 1) {
      dispatch(decrement({ id: item.id }));
    }
  };

  return (
    <div>
      <div className={styles.counter_container}>
        <div className={styles.item_counter}>
          {/* Button to decrement the quantity */}
          <button
            id='decrease'
            onClick={() => handleDecrement(item)}
            value='Decrease Value'
          >
            -
          </button>
          <div>
            {/* Input field to display the quantity */}
            <input type='number' id='number' min='0' value={item.quantity} />
          </div>
          {/* Button to increment the quantity */}
          <button
            id='increase'
            onClick={() => handleIncrement(item)}
            value='Increase Value'
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
