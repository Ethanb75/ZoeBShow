import React, { Component } from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.png';

import Layout from '../components/layout';

import abt1 from '../assets/images/abt.jpg';


export default class About extends Component {
  componentDidMount() {
    if (!document.querySelector('.sideBar').classList.contains('lite')) {
      document.querySelector('.sideBar').classList.add('lite');
    }
  }
  componentWillUnmount() {
    document.querySelector('.sideBar').classList.remove('lite');
  }
  render() {
    return (
      <Layout>
        <header className="galleryHeader">
          <div className="abtBack"></div>
          <div className="galleryHeader__title">
            <h1>
              About
            </h1>
            <p>
              See a more intimate side of Zoe'B.
            </p>
          </div>
        </header>
        <main className="abt">
          <div className="abtRow">
            <div>
              {/* When outsiders think your dream is crazy, then dream harder */}
              {/* <h3>Ribeye buffalo turducken, sausage brisket.</h3> */}
              <h3>When outsiders think your dream is crazy, then dream harder</h3>
              {/* <h4>
                Andouille chicken cow pork belly beef, meatball venison capicola boudin ball
                tip bresaola short loin.
              </h4> */}
              <h4>Zoe’B. is a self- created, motivated , hard working entrepreneur from Tuskegee, Al.</h4>
              <p>
                Zoe’B. has her bachelor’s degree in Mass Communications( Performance) with a minor in Business Management. Zoe'B. Is also a member of Delta Sigma Theta Sorority Inc.
                Zoe’B. re-invented The Zoe’B. Show into the Zoe’B.Show “After Dark” shortly after moving to Atlanta Georgia in 2015.
                Since airing the show through World Star Hit Radio, Zoe’B. has increased her buzz around Georgia and beyond from interviewing various celebirties and fans to appearing on other web blogs and podcast shows herself.
                Recently , Zoe’B. has teamed up with Hosea Feed The Homeless twice a month to provide food, water , hygiene packages , care bags,and more to help make a difference and to also let the surrounding communities know that it’s never too late to make a change .
                With 2019 around the corner, Zoe’B. have upcoming releases such as ZBsecrets and Red Emojis.
              </p>
            </div>
            <div>
              <img src={abt1} />
            </div>
          </div>
          <div className="abtRow">
            <img src={abt1} />
            <img src={abt1} />
            <img src={abt1} />
            <img src={abt1} />
          </div>
          <div className="abtRow">
            <Link to="/gallery">Check out the full Gallery &rarr;</Link>
          </div>
        </main>
        <footer>
          <div className="footer__flair"></div>
          <div className="footer__logo">
            <img src={logo} />
            <a href="">(678) 111-1111</a>
            <a href="mailto:contact@email.com">contact@zoebtvshow.com</a>
          </div>
          <div className="footer__links">
            <div>
              <h3>Contact me</h3>
              <p>
                For inquiries, booking information, or to learn more about Zoe'B. Contact Zoe via email or phone. For more content, visit Zoe'B's social media pages.
              </p>
            </div>
            <div>
              <ul>
                <label>Links</label>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
              <ul>
                <label>social</label>
                <li>
                  <a href="https://www.instagram.com/thezoebshow/">Instagram</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/thezoebshow">Youtube</a>
                </li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <div className="footer__copy">
            <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top</span>
            <span>© 2017 ZOE'B. ALL RIGHTS RESERVED</span>
          </div>
        </footer>
      </Layout>
    )
  }
}
