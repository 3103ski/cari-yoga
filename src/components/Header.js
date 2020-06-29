import PropTypes from 'prop-types'
import React from 'react'
import icon from '../images/yantra.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon">
        <img src={icon} alt="" />
      </span>
      {/* <span className="icon fa-diamond"></span> */}
    </div>
    <div className="content">
      <div className="hdr-top-line"></div>
      <div className="inner">
        <h1>Yoga With Cari Woodfield</h1>
        <p>
          Cari is the best at yoga, get right and get bent with the master.{' '}
          <br />
          Some say these classes are worth millions. But find out for yourself.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('services')
            }}
          >
            Services
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('pricing')
            }}
          >
            Pricing
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('videos')
            }}
          >
            Videos
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('philosophy')
            }}
          >
            Philosophy
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Bio
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
