import React from "react";
import './header.scss'
import logo from '../../asset/images/logo-news.svg'
const Header = () => {
    return (
      <>
        <header className="site-header">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <div className="site-header__start">
                <a className="site-header__link" href="/">
                  <img
                    className="site-header__link--img"
                    src={logo}
                    alt="Newsletter-logo"
                  />
                </a>
              </div>
              <div className="site-header__end">
                <form>
                  <input
                    className="site-header__form--input"
                    type="text"
                    placeholder="Search for headlines"
                  />
                  <button className="site-header__form--btn" type="submit">
                    SEARCH
                  </button>
                </form>
              </div>
            </div>
          </div>
        </header>
      </>
    );
}

export default Header;