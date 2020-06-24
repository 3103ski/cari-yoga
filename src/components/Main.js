import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/floor-split.jpg'
import pic02 from '../images/grace.jpg'
import pic03 from '../images/about-red.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="services"
          className={`${this.props.article === 'services' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h2 className="major">Header below image?</h2>
          <p>
            WRITE SOME TEXT CONTENT HERE THAT DOESN'T TALK ABOUT PRICING BUT
            RATHER DETAILS ABOUT YOUR TEACHINGS AND WHAT YOU'RE OFFERING. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          <h2 className="major">Another Header?</h2>
          <p>
            YOU CAN HAVE A COUPLE SECTIONS IF YOU THINK IT HELPS THE CONTENT YOU
            PUT HERE Lorem ipsum dolor sit amet, consectetur et adipiscing elit.
            Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac.
            Aliquam erat volutpat. Praesent urna nisi, fringila lorem et
            vehicula lacinia quam.
          </p>
          {close}
        </article>

        <article
          id="pricing"
          className={`${this.props.article === 'pricing' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Pricing</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            WRITE SOME GENERAL CONTENT ABOUT YOUR PRICING OR PACKAGESAdipiscing
            magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend
            sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi,
            fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris
            nec lorem luctus ultrices.
          </p>
          <h3>Package 1</h3>
          <ul>
            <li>$200</li>
            <li>something something</li>
            <li>another detail</li>
            <li>Maybe another</li>
          </ul>
          <h3>Package 2</h3>
          <ul>
            <li>$100</li>
            <li>some deets</li>
            <li>all the value</li>
            <li>Just more value</li>
          </ul>
          <h3>Package 3</h3>
          <ul>
            <li>$200</li>
            <li>Dang I'm getting 4 lessons?</li>
            <li>ya get bent</li>
            <li>value deets</li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Cari Woodfield</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            TALK ABOUT YOURSELF SOME :) Lorem ipsum dolor sit amet, consectetur
            et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend
            sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi,
            fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris
            nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante
            ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis
            mattis lorem ipsum dolor sit amet.
          </p>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>

          <form name="contact-cari" method="POST" data-netlify="true">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input
                  name="form-submit-btn"
                  type="submit"
                  value="Send Message"
                  className="special"
                />
              </li>
              <li>
                <input name="reset-form" type="reset" value="Reset" />
              </li>
            </ul>
          </form>

          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
