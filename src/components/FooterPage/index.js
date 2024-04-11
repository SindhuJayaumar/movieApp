import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import './index.css'

const FooterPage = () => (
  <div className="footerContainer">
    <div className="IconsContainer">
      <button type="button" className="btn-icons">
        <FaGoogle className="icons" />
      </button>

      <button type="button" className="btn-icons">
        <FaTwitter className="icons" />
      </button>

      <button type="button" className="btn-icons">
        <FaInstagram className="icons" />
      </button>

      <button type="button" className="btn-icons">
        <FaYoutube className="icons" />
      </button>
    </div>
    <p className="contact-us">Contact us</p>
  </div>
)

export default FooterPage
