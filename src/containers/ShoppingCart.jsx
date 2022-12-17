import React from "react";
import '@styles/ShoppingCart.scss';
import CloseIcon from '@icons/icon_close.png';
import ArrowIcon from '@icons/flechita.svg';

const ShoppingCart = () => {
    return (
      <>
        <aside class="product-detail-shopping-cart">
          <div class="title-shop-container">
            <img src={ArrowIcon} alt="arrow" />
            <p class="shopping-cart-title">My order</p>
          </div>

          <div class="shopping-cart-my-order-content">
            <div class="my-shopping-cart">
              <figure>
                <img
                  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="bike"
                />
              </figure>
              <p>bike</p>
              <p>$90,00</p>
              <img src={CloseIcon} alt="close" />
            </div>

            <div class="my-shopping-cart">
              <figure>
                <img
                  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="bike"
                />
              </figure>
              <p>bike</p>
              <p>$90,00</p>
              <img src={CloseIcon} alt="close" />
            </div>

            <div class="my-shopping-cart">
              <figure>
                <img
                  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="bike"
                />
              </figure>
              <p>bike</p>
              <p>$90,00</p>
              <img src={CloseIcon} alt="close" />
            </div>

            <div class="my-shopping-cart">
              <figure>
                <img
                  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="bike"
                />
              </figure>
              <p>bike</p>
              <p>$90,00</p>
              <img src={CloseIcon} alt="close" />
            </div>

            <div class="my-shopping-cart-total-order">
              <p>
                <span>Total</span>
              </p>
              <p>$300.00</p>
            </div>
            <button class="checkout-button">Checkout</button>
          </div>
        </aside>
      </>
    );
}

export default ShoppingCart;