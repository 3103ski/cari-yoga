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
          <h2 className="major">Services</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>

          <p>
            Rooted in Traditional Hatha Yoga, Cari offers a range of classes
            specifically designed to meet the urgent need for balance within her
            students. Her focus is on building a strong foundation and sense of
            self-confidence, so that participants are able to cultivate that
            state of physical and mental well being uniquely derived from yoga
            practice. She teaches her students to become aware of each breath,
            and each movement, so that the mechanisms of aligned breathing and
            movement, along with the resultant hormonal balancing of the
            endocrine system, can work their magic upon the experience of being
            human. She invites you to join her in rejoicing being alive in this
            body, in this moment!
          </p>
          <p>
            Her online courses range from 3 to 6 week programs, so you can go at
            your own pace and willingness. Whether you are looking to recover
            from an injury or illness, gain strength and flexibility, lose
            weight and become balanced, find relief from short or long term
            stress, are pregnant or nursing, want to relieve chronic back pain,
            are an athlete looking to enhance your performance, want to begin a
            regular meditation practice, or are just looking to begin a health
            and wellness routine through yoga - this course is for you!
          </p>
          <p>
            Cari also offers yoga and guided meditation group and private
            lessons in the Western North Carolina Region. For current group
            classes in the greater Asheville area, please contact directly, as
            schedule is subject to change. Instruction for individual or
            family/friends at your residence, public or outdoor space available
            within 100 miles of Asheville.
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
            Courses are one-time purchase, with everything you need to achieve
            success with the classes included in the package. Cari is available
            to answer any questions or concerns you have before you get started,
            and she offers a 30-minute free Zoom consultation to make sure you
            are getting exactly what you need. Within 100 miles of Asheville,
            NC: Individual, family, or friends group 60 minute instruction is
            available for $50/class. Classes are designed based on individuals’
            needs, and consultation is provided before booking. Packages of 6
            classes or more include 10% off.
          </p>
          <h2 className="major">Balanced Body + Mind + Soul</h2>
          <h3>(Beginner / Intermediate / Advanced)</h3>
          <ul>
            <li>3 week course: $150 / 6 week course $250</li>
            <li>1+ hour one-on-one Yoga instruction 2 x’s per week</li>
            <li>Diet & Lifestyle Guidance</li>
            <li>30-minute virtual follow up 2 weeks post-completion </li>
          </ul>

          <h2 className="major">Strength & Stamina/Athletic training</h2>
          <h3>(Beginner / Intermediate / Advanced)</h3>
          <ul>
            <li>3 week course $200 / 6 week course $300</li>
            <li>1+ hour one-on-one Yoga instruction 2 x’s per week</li>
            <li>Routines designed to push your body’s limitations</li>
            <li>30-minute virtual follow up 2 weeks post-completion</li>
          </ul>

          <h2 className="major">Healthy Back & Body Recovery</h2>
          <h3>(Beginner / Intermediate / Advanced)</h3>

          <ul>
            <li>4 week course $200</li>
            <li>1+ hour one-on-one Yoga instruction 2 x’s per week</li>
            <li>Focus on building & repairing foundations</li>
            <li>30-minute virtual follow up 2 weeks post-completion</li>
          </ul>

          {close}
        </article>

        <article
          id="videos"
          className={`${this.props.article === 'videos' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Videos Coming Soon!</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          {/* <p>
            WRITE SOME GENERAL CONTENT ABOUT YOUR PRICING OR PACKAGESAdipiscing
            magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend
            sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi,
            fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris
            nec lorem luctus ultrices.
          </p> */}

          {close}
        </article>

        <article
          id="philosophy"
          className={`${this.props.article === 'philosophy' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Philosophy</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Yoga is for everybody! There is not one person in the world who
            couldn’t stand to benefit from gaining more awareness of their
            breath, their body and its function, and the quality of their mind.
          </p>
          <p>
            The biggest misconception people have about yoga is that it’s “not
            for them”. Who doesn’t want to be more present in their everyday
            life? Who doesn’t want to have a greater lung capacity? A greater
            range of motion in their joints? Better health? Less pain? Less
            stress and frustration? And peace of mind! Yoga is not a difficult
            practice, it only seems that way if it hasn’t been experienced yet.
            It’s like learning how to cook - when you don’t know how, you’re
            dependent on others to nourish you. But once you begin learning a
            few recipes, you become independent and more confident in your
            ability to provide for yourself. And maybe later you discover what
            each of the ingredients and spices can do for a dish, achieving a
            sense of mastery over your palate and nourishment.
          </p>
          <p>
            Yoga is all about how much effort you want to put in, and luckily -
            a little bit goes a long, long way. A little 15-minute routine
            practiced a few times per week can have a massive impact on your
            health and life. It really gives you an opportunity to fully
            experience your “inner world”, which in turn brings more clarity to
            the “outer world”. With this, harmony becomes accessible, and
            everyday life becomes easier to enjoy.
          </p>

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
            Cari Rae Woodfield is a YA certified RYT 500 yoga instructor. She
            completed her training at The Yoga Bridge in Black Mountain, NC
            under internationally renowned master Ishanath Marcel
            Andres-Hoepgen. She studied Hatha Yoga disciplines and philosophies,
            and focused on the Nath tradition and series' during her advanced
            training hours. She received comprehensive training on both the
            Hatha Yoga Pradipika and the Yoga Sutras of Patanjali, as well as
            many meditation techniques.
          </p>
          <p>
            In her career as a yoga teacher, she has worked extensively with a
            vast population of aspiring yogis, all with varying degrees of
            experience and focus. Her style focuses heavily on strength and body
            conditioning, using the breath to guide isometric poses and increase
            balance and flexibility, while also training the muscles to relax
            and build trust with the mind. She is highly adept at building
            perfectly paced flows for every level of practice, and has an
            intuitive understanding of how trust, pacing, breath, and belief in
            oneself all play a collective role in preventing injury and
            preparing the body for newfound health and strength. She has trained
            athletes, including basketball players, professional dancers,
            martial arts practitioners, wrestlers, track & field athletes, and
            boxers. She has also worked with Alzheimers and dementia patients
            using chair yoga classes and breathing techniques, which are
            designed to strengthen focus and attention while stimulating
            regeneration for the sedentary body.
          </p>
          <p>
            In addition to teaching yoga, Cari is a Bachata dance instructor.
            Her understanding of movement and rhythm in Latin dancing helped her
            growth as a yoga teacher immensely, and visa versa. Many of the same
            principles of energy, body awareness, breath control, trust and
            flexibility are incorporated on the dance floor as well as the yoga
            mat. Earlier in her life she worked as a C.M.A., X-ray tech, E.K.G.
            tech, and phlebotomist, with six years of practice in professional
            health care settings. She believes her background in Western
            medicine, with focus on anatomy and physiology, helped prepare her
            to comprehensively grasp and easily apply the Eastern philosophies
            and disciplines found in Hatha Yoga.
          </p>
          <p>
            Cari currently resides in Waynesville, North Carolina, where she
            teaches group classes and private lessons.
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
          <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>

          <form name="contact-carirae" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="contact-carirae" />
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
                <button
                  // name="form-submit-btn"
                  type="submit"
                  // value="Send Message"
                  className="special"
                >
                  SUBMIT
                </button>
              </li>
              <li>
                <input name="reset-form" type="reset" value="Reset" />
              </li>
            </ul>
          </form>

          <ul className="icons">
            <li>
              <a href="https://twitter.com/" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            {/* <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li> */}
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
