import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const itemCount = cartItems[id] || 0; // Получаем количество товаров в корзине

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img src={image} alt={name} className="food-item-image" />
        {itemCount === 0 ? (
          <img onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" className='add' />
        ) : (
          <div className="food-item-counter">
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{itemCount}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-prices">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
