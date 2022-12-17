import React from "react";
import '@styles/FeedProducts.scss';
import AddToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
    return(
        <div className="product-card">
        <img src={product.images[0]} alt={product.title}/>
        <div className="product-info">
            <div>
                <p>${product.price}</p>
                <p>{product.title}</p>
            </div>
            <figure>
                <img src={AddToCart} alt="" />
            </figure>
        </div>
    </div>
    )
}
export default ProductItem;