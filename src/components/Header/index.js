import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {HiOutlineSearch} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import './index.css'

class Header extends Component {
  render() {
    const {match} = this.props
    const {path} = match
    let homeNameClassStyling
    let ProfileClassStyling
    let PopularNameClassStyling

    switch (path) {
      case '/popular':
        homeNameClassStyling = 'passive'
        PopularNameClassStyling = 'active'
        ProfileClassStyling = 'passive'
        break

      case '/account':
        homeNameClassStyling = 'passive'
        PopularNameClassStyling = 'passive'
        ProfileClassStyling = 'active'
        break

      default:
        homeNameClassStyling = 'active'
        PopularNameClassStyling = 'passive'
        ProfileClassStyling = 'passive'
        break
    }

    return (
      <nav className="nav-bg-color">
        <div className="nav-container">
          <div className="nav-element-container">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dyx9u0bif/image/upload/v1657426908/lg-devices-logo_rpfa68.png"
                className="logo-img"
                alt="website logo"
              />
            </Link>

            <ul className="nav-list-item">
              <Link className="link " to="/">
                <li className={`nav-link ${homeNameClassStyling}`}>Home</li>
              </Link>

              <Link className="link" to="/popular">
                <li className={`nav-link ${PopularNameClassStyling}`}>
                  Popular
                </li>
              </Link>
            </ul>

            <div className="search-container">
              <input
                type="search"
                className="search-button"
                placeholder="search"
                testid="searchButton"
              />
              <Link to="/search">
                <button
                  type="button"
                  className="searchingButton"
                  testid="searchButton"
                >
                  <HiOutlineSearch
                    className="search-bar"
                    testid="searchButton"
                  />
                </button>
              </Link>

              <Link to="/account">
                <img
                  src="https://res.cloudinary.com/dlxctwhhi/image/upload/v1705995284/Group_q1imbf.png"
                  className={`profile-img ${ProfileClassStyling}`}
                  alt="profile"
                />
              </Link>

              <div className="mini-list">
                <Popup
                  model
                  trigger={
                    <button
                      type="button"
                      data-testid="hamburgerIconButton"
                      className="btn"
                    >
                      <GiHamburgerMenu className="hamburgerImage" />
                    </button>
                  }
                >
                  {close => (
                    <>
                      <div className="popup-logo">
                        <button
                          type="button"
                          className="close-btn"
                          data-testid="closeButton"
                          onClick={() => close()}
                        >
                          <IoMdClose className="close-image" />
                        </button>

                        <ul className="nav-list-mini-items">
                          <Link className="link " to="/">
                            <li
                              className={`mini-nav-link ${homeNameClassStyling}`}
                            >
                              Home
                            </li>
                          </Link>

                          <Link className="link" to="/popular">
                            <li
                              className={`mini-nav-link ${PopularNameClassStyling}`}
                            >
                              Popular
                            </li>
                          </Link>

                          <li className="list-items">
                            <Link className="nav-link" to="/account">
                              account
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </Popup>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
