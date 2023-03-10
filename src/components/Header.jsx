import React, { useContext, useState } from "react";
import '@styles/Header.scss';
import MenuIconSVG from '@icons/icon_menu.svg';
import Logo from '@logos/logo_yard_sale.svg';
import ShoppingCart from "@containers/ShoppingCart";
import ShoppingCartIcon from '@icons/icon_shopping_cart.svg'
import AppContext from "@context/AppContext.js";
import DesktopMenu from "./DesktopMenu";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  //incase  the hook cart is grows 
  const { state: {cart} } = useContext(AppContext);
  // console.log(state, 'state')

  const toggleMenu = () => {
    return setToggle(prevstate => !prevstate);
  }
    return (
      <>
        <nav> 
          <img
            src={MenuIconSVG}
            alt="menu"
            className="navbar-menu"
          />

          <div className="navbar-left">
            <img
              src={Logo}
              alt="logo"
              className="logo-navbar"
            />

            <ul>
              <li>
                <a href="/">All</a>
              </li>

              <li>
                <a href="/">Electronics</a>
              </li>

              <li>
                <a href="/">Furniture</a>
              </li>

              <li>
                <a href="/">Toys</a>
              </li>

              <li>
                <a href="/">Others</a>
              </li>

              <li>
                <a href="/">All</a>
              </li>
            </ul>
          </div>

          <div className="navbar-right">
            <ul>
              <li className="navbar-email" onClick={toggleMenu}>
                email@example.com
              </li>
              <li className="navbar-shopping-cart"
                onClick={() => setToggleOrders(prevState => !prevState)}>
                <img
                  src={ShoppingCartIcon}
                  alt="shopping-cart-icon"
                />
                {/* item in the shopping cart */}
                {cart.length > 0 && <div>{cart.length > 9 ? '+9': cart.length}</div>}
              </li>
            </ul>
          </div>
          {toggle && <DesktopMenu />}
          {toggleOrders && <ShoppingCart toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
        </nav>
      </>
    );
}

export default Header;