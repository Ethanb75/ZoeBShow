import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import back from '../assets/images/back1.mp4';
import thumb from '../assets/images/thumb.jpg';
import logo from '../assets/images/logo.png';


export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <header className="homePageHero">
          <div className="title">
            <em>The</em>
            <h1>Zoe B.</h1>
            <p>Vixen - Entrepreneur - Fashionista</p>
          </div>
          <div className="hInfo">
            <div className="hInfo__events">
              <div className="blur"></div>
              <em>Events</em>
              <div className="events">
                <div className="events__feed">
                  <div>
                    <h3>Feed the Hungry</h3>
                    <p>Sat, October 12th - 9:00 PM</p>
                  </div>
                  <div>
                    <h3>Amber Rose's Walk</h3>
                    <p>Sat, October 12th - 9:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="eventControls">
                <button></button>
                <button></button>
                <button></button>
              </div>
            </div>
            <div className="hInfo__media">
              <img src={thumb} />
              <div>
                <div className="mediaWrap">
                  <em>media</em>
                  <p>Check out the latest video from Zoe'B</p>
                  <a href="https://www.youtube.com/watch?v=gMk0HACJ6Aw">Watch the Video &rarr;</a>
                </div>
              </div>
            </div>
          </div>
          <div className="videoBackground">
            <video src={back} autoPlay muted loop />
          </div>
        </header>
        <main>
          <section className="intro">
            <div className="intro__item">
              <div className="intro__img"></div>
              <div className="intro__desc">
                <h3>Entrepreneur</h3>
                <p>
                  The Zoe’B.Show “After Dark” along with Red Emojis and ZBserects have all been the
                  core creation of Zoe’B. free expression of how we all should love, taste,
                  and feel as sexual beings.
                </p>
              </div>
            </div>
            <div className="intro__item">
              <div className="intro__img"></div>
              <div className="intro__desc">
                <h3>Fashionista</h3>
                <p>
                  Freedom of expression and astistry are very important when it comes to connecting
                  with today’s society. With Zoe’ B’s personal celebrity stylist ,D.Styles by her side,
                  they are able to channel the next level of high fashion.
                </p>
              </div>
            </div>
            <div className="intro__item">
              <div className="intro__img"></div>
              <div className="intro__desc">
                <h3>Vixen</h3>
                <p>
                  Everyone has a naughty side. For Zoe’B., her naughty side comes out to play everyday.
                  Discovering the sexual  anatomy of a man and woman is what turns her on even more.
                  <br /><br />
                  <em>“ The human body has hidden treasures we all may never get to open.”</em >~ Zoe’B
                </p>
              </div>
            </div>
          </section>
          <section className="hAbout">
            <div>
              <em>"</em>
              <p>The human body has hidden treasures we all may never get to open.</p>
              {/* <button>About Zoe'B</button> */}
              <div>
                <Link to="/about">Learn About Zoe’B &rarr;</Link>
              </div>
            </div>
          </section>
          <section className="hGallery">
            <div>
              <div className="hGallery__item"></div>
              <div className="hGallery__item"></div>
              <div className="hGallery__item"></div>
            </div>
            <div className="hGallery__info">
              <h3>Humans are sexual creatures</h3>
              <p>Everyone has a naughty side. For Zoe’B., her naughty side comes out to play everyday.
                  Discovering the sexual  anatomy of a man and woman is what turns her on even more.
              </p>
              <div>
                <Link to="/gallery">See the Gallery &rarr;</Link>
              </div>
            </div>
          </section>
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
                {/* <li>Contact</li> */}
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
