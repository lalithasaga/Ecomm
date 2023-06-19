import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { CartContext } from './CartContext';
import { AuthContext } from './auth-context';


const Header = () => {
  const { getCartCount } = useContext(CartContext);
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="header__links">
        <NavLink exact to="/" className="header__link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/store" className="header__link" activeClassName="active">
          Store
        </NavLink>
        <NavLink to="/about" className="header__link" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/contact" className="header__link" activeClassName="active">
          Contact Us
        </NavLink>
        <NavLink to="/product" className="header__link" activeClassName="active">
          ProductPage
        </NavLink>
      </div>
      <div className="header__actions">
        {isLoggedIn ? (
          <>
            <button className="header__profile-button">
              <Link to="/profile" className="profile-button">
                Profile
              </Link>
            </button>
            <button className="header__logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <button className="header__login-button">
            <Link to="/login" className="login-button">
              Login/Signup
            </Link>
          </button>
        )}
        <button className="header__cart-button">
          <Link to="/cart" className="cart-button">
            Cart <span className="cart-count">{getCartCount()}</span>
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;