import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import logo from '../assets/images/logo.png';

import ImageZoom from 'react-medium-image-zoom'



function importAll(r) {
  //gets an array of images from webpackContext and uses the same Context to find generated paths
  return r.keys().map(r);
}

const images = importAll(require.context('../assets/images/gallery', false, /\.(png|jpe?g|svg)$/));
const thumbs = importAll(require.context('../assets/images/gallery/thumbs', false, /\.(png|jpe?g|svg)$/));

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
  state = {
    loadedImages: 0,
    totalImages: 0,
    allImagesLoaded: false
  }
  getThumbnailContent = (item) => {
    return (
      <img src={item.thumbnail} width={120} height={90} alt="" />
    );
  }

  componentDidMount() {
    let imagesToLoad = document.querySelectorAll('img');
    if (!document.querySelector('.sideBar').classList.contains('lite')) {
      document.querySelector('.sideBar').classList.add('lite');
    }

    if (this.state.totalImages === 0) {
      this.setState({ totalImages: imagesToLoad.length });
    }

    imagesToLoad.forEach(el => {
      el.addEventListener('load', ev => {
        this.setState({ loadedImages: this.state.loadedImages + 1 });
        //add the class for smooth load
        ev.target.classList.add('loaded');
        if (this.state.loadedImages === this.state.totalImages) {
          this.setState({ allImagesLoaded: true });
        }
      })
    })
  }
  componentWillUnmount() {
    document.querySelector('.sideBar').classList.remove('lite');
  }

  render() {
    const { getThumbnailContent } = this;
    const { loadedImages, allImagesLoaded, totalImages } = this.state;

    return (
      <Layout>
        <div>
          <div className={allImagesLoaded ? "loadscreen loaded" : "loadscreen"} style={{ position: 'fixed', width: '100%', height: '100%', left: '0', top: '0', backgroundColor: 'var(--darkGrey)' }}>
            <span>Loading Gallery...</span>
            <span>{loadedImages} / {totalImages}</span>
          </div>


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
          <div className={allImagesLoaded ? "gallery loaded" : "gallery"}>
            {images.map((imageUrl, i) => {

              console.log(imageUrl);
              return (
                // <div className="gallery__item" key={i}>
                <ImageZoom
                  image={{
                    src: thumbs[i],
                    alt: 'Golden Gate Bridge',
                    className: 'gallery__img'
                  }}
                  // style={{ imageOrientation: 'from-image' }}
                  style="image-orientation: from-image"
                  key={i}
                  zoomImage={{
                    src: imageUrl,
                    alt: 'Golden Gate Bridge',
                    className: 'gallery__img-zoomed'
                  }}
                />
                // </div>
              )
            })}
          </div>
          <div className="gallery__link">
            <a href="">Check out Zoe's Instagram for more &rarr;</a>
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
