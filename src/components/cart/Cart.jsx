import React from 'react';
import styles from './Cart.module.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Quantity } from './Quantity';
import { useDispatch } from 'react-redux';
import { clearCart } from './storage/cartSlice';

export const Cart = ({ isOpen, handleCartClose }) => {
  // Get the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total price of all items in the cart
  //We use the reduce function to iterate through our items array
  //The reduce function  is used to reduce an array to
  // a single value based on the result of a specified callback function.
  // It iterates over each element of the array and applies the callback
  // function to accumulate a single value. The callback function takes two
  // arguments: an accumulator total in our case and the current element of 
  // the array being processed item in our items array in our case.
  // the reduce function takes as argument the callback function and an initial
  //value which is 0 in our case
  const totalPrice = useSelector(
    (state) =>
      state.cart.items
        .reduce((total, item) => {
          // Multiply the item quantity with its price and accumulate the total
          return (
            total + item.quantity * parseFloat(item.price.replace(',', '.'))
          );
        }, 0)
        .toFixed(2) // Fix the total price to 2 decimal places
  );

  const dispatch = useDispatch(); // Add the useDispatch hook

  // Function to handle clearing the cart
  const handleClearCart = () => {
    // Dispatch the clearCart action when the button is clicked
    dispatch(clearCart());
  };

  return (
    <>
      {isOpen && (
        <div className={styles.cart_module}>
          <AiFillCloseCircle
            className={styles.close_icon}
            onClick={handleCartClose}
          />
          <div className={styles.cart_items}>
            <h2>Shopping Cart</h2>
            {/* Check if the cart is empty */}
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {/* Loop through each item in the cart and display its details */}
                {cartItems.map((item) => (
                  <li key={item.id} className={styles.cart_item}>
                    <div className={styles.cart_item_content}>
                      <img
                        className={styles.item_img}
                        src={item.img}
                        alt={item.title}
                      />
                      <p className={styles.item_title}>{item.title}</p>
                      <p className={styles.item_price}>{item.price}€</p>
                      {/* Render the Quantity component for each item */}
                      <Quantity item={item} />
                    </div>
                  </li>
                ))}
                <h2>Summary</h2>
                {/* Input field to display the total price */}
                <input
                  className={styles.summary}
                  type='number'
                  id='number'
                  value={totalPrice} // Set the value to the totalPrice
                  readOnly
                />
                {/* Display the euro sign */}
                <p className={styles.euro}>€</p>

                {/* Button to clear the cart */}
                <button onClick={handleClearCart} className={styles.clear}>
                  CLEAR
                </button>
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};
