import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import back from '../assets/images/back1.mp4';
import thumb from '../assets/images/thumb.jpg';
import logo from '../assets/images/logo.png';

import '../assets/main.css'

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
                    <h3>Amber Rose's Slut Walk</h3>
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
                  <a href="youtube.com">Watch the Video &rarr;</a>
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
                  they are able channel the next level of high fashion.
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
                  <em>“ The human body has hidden treasures we all maybe never get to open.”</em >~ Zoe’B
                </p>
              </div>
            </div>
          </section>
          <section className="hAbout">
            <div>
              <em>"</em>
              <p>The human body has hidden treasures we may never get to open.</p>
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
              <h3>A great headline</h3>
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
                Here we have contact information. Bacon ipsum dolor amet alcatra leberkas pork jowl, corned beef swine biltong ham boudin tri-tip capicola meatball burgdoggen.
              </p>
            </div>
            <div>
              <ul>
                <label>Links</label>
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Contact</li>
              </ul>
              <ul>
                <label>social</label>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <div className="footer__copy">
            <span>Top</span>
            <span>Copy Zoe B.</span>
          </div>
        </footer>
      </Layout>
    )
  }
}
