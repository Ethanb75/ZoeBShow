import React, { Component } from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.png';

export default class Header extends Component {
  state = {
    isNavOpen: false
  }
  toggleNav() {
    const { isNavOpen } = this.state;

    this.setState({ isNavOpen: !isNavOpen });
  }
  closeNav() {
    this.setState({ isNavOpen: false });
  }
  componentDidMount() {

  }
  render() {

    const { isNavOpen } = this.state;

    return (
      <nav className="nav">
        <div className="sideBar">
          <div className="sideBar__menuBtn">
            <button onClick={() => this.toggleNav()}>
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
          <div className="sideBar__social">
            <span>
              <a href="https://www.youtube.com/user/thezoebshow">Youtube</a>
            </span>
            <span>
              <a href="https://www.instagram.com/thezoebshow/">Instagram</a>
            </span>
            <span>
              <a href="">Twitter</a>
            </span>
          </div>
        </div>
        <div className="topBar">
          <ul>
            <li>
              <Link to="/" onClick={() => this.closeNav()}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => this.closeNav()}>About</Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => this.closeNav()}>Media</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => this.closeNav()}>Contact</Link>
            </li>
          </ul>
          <div className="topBar__logo">
            <img src={logo} />
          </div>
        </div>

        <div className={isNavOpen ? "menu active" : "menu"}>
          <div className="menu__links">
            <Link to="/" onClick={() => this.closeNav()}>
              <span>Home</span>
              <span>Return to the homepage</span>
            </Link>
            <Link to="/about" onClick={() => this.closeNav()}>
              <span>About</span>
              <span>Learn about Zoe'B</span>
            </Link>
            <Link to="/gallery" onClick={() => this.closeNav()}>
              <span>Media</span>
              <span>Browse photo's and video</span>
            </Link>
            <Link to="/contact" onClick={() => this.closeNav()}>
              <span>Contact</span>
              <span>Contact Zoe'B today</span>
            </Link>
          </div>
          {/* <div className="menu__social">
            <span>
              <a href="https://www.youtube.com/user/thezoebshow">Youtube</a>
            </span>
            <span>
              <a href="https://www.instagram.com/thezoebshow/">Instagram</a>
            </span>
            <span>
              <a href="">Twitter</a>
            </span>
          </div> */}
          <div className="menu__yt"></div>
        </div>
      </nav>
    )
  }
}
