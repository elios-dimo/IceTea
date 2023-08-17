import React from 'react';
import styles from './Item.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/storage/cartSlice';

// returns all items based on our filters also displays infos for each item
export const Item = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <>
      <div className={styles.items_container}>
        {data.map((item) => (
          <div className={styles.item_card} key={item.id}>
            <img className={styles.img} src={item.img} alt={item.title} />
            <span className={styles.title}>{item.title}</span>
            <div className={styles.buy}>
              <span className={styles.price}>{item.price}€</span>
              <button
                className={styles.add_button}
                onClick={() => handleAddToCart(item)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
