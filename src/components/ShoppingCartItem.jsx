import React, { useContext } from "react";
import AppContext from '@context/AppContext';
import CloseIcon from '@icons/icon_close.png';
import '@styles/ShoppingCart.scss';

const ShoppingCartItem = (props ) => {
  const  { product, indexValue } = props;
const { removeFromCart } = useContext(AppContext);

const handleRemove = index => {
  removeFromCart(index);
}
    return(
        <div className="my-shopping-cart">
              <figure>
                <img
                  src={product.images[0]}
                  alt={product.title}
                />
              </figure>
              <p>{product.title}</p>
              <p>${product.price}</p>
              <img className="close-icon"
              src={CloseIcon} alt="close" 
              onClick={() => handleRemove(indexValue)}/>
            </div>
    )
}
export default ShoppingCartItem;