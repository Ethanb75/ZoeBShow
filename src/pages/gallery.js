import React, { Component } from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import logo from '../assets/images/logo.png';

import ImageZoom from 'react-medium-image-zoom'



function importAll(r) {
  //gets an array of images from webpackContext and uses the same Context to find generated paths
  return r.keys().map(r);
}

const images = importAll(require.context('../assets/images/gallery', false, /\.(png|jpe?g|svg)$/));
// const thumbs = importAll(require.context('../assets/images/thumbs', false, /\.(png|jpe?g|svg)$/));

let items = images.map((image, i) => {
  return {
    src: image,
    thumbnail: image,
    w: 1200,
    h: 900,
    title: 'Image 1'
  }
});



let options = {
  //http://photoswipe.com/documentation/options.html
};


export default class Gallery extends Component {
  getThumbnailContent = (item) => {
    return (
      <img src={item.thumbnail} width={120} height={90} alt="" />
    );
  }

  componentDidMount() {
    if (!document.querySelector('.sideBar').classList.contains('lite')) {
      document.querySelector('.sideBar').classList.add('lite');
    }
  }
  componentWillUnmount() {
    document.querySelector('.sideBar').classList.remove('lite');
  }

  render() {
    const { getThumbnailContent } = this;

    return (
      <Layout>
        <div>
          <header className="galleryHeader">
            <div className="galleryBack"></div>
            <div className="galleryHeader__title">
              <h1>
                Gallery
              </h1>
              <p>
                Discover every side of Zoe'B
              </p>
            </div>
          </header>
          {/* <PhotoSwipeGallery items={items} options={options} thumbnailContent={getThumbnailContent} /> */}
          <div className="gallery">
            {images.map((imageUrl, i) => {
              // return (
              //   <img index={i} src={imageUrl} />
              // )
              return (
                // <div className="gallery__item" key={i}>
                <ImageZoom
                  image={{
                    src: imageUrl,
                    alt: 'Golden Gate Bridge',
                    className: 'gallery__img'
                  }}
                  key={i}
                  zoomImage={{
                    src: imageUrl,
                    alt: 'Golden Gate Bridge'
                  }}
                />
                // </div>
              )
            })}
          </div>
        </div>
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
            <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top</span>
            <span>© 2017 ZOE'B. ALL RIGHTS RESERVED</span>
          </div>
        </footer>
      </Layout>
    )
  }
}
