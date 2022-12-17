import React, { useState } from "react";
import '@styles/Header.scss';
import MenuIconSVG from '@icons/icon_menu.svg';
import Logo from '@logos/logo_yard_sale.svg';
import ShoppingCartIcon from '@icons/icon_shopping_cart.svg'
import DesktopMenu from "./DesktopMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    return setToggle(revstate => !revstate);
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
              <li className="navbar-shopping-cart">
                <img
                  src={ShoppingCartIcon}
                  alt="shopping-cart-icon"
                />
                <div>2</div>
              </li>
            </ul>
          </div>
          {toggle && <DesktopMenu />}
        </nav>
      </>
    );
}

export default Header;