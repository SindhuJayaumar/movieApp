import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="notfound-container">
      <h1 className="notfound-head">Lost Your Way</h1>
      <p className="notfound-content">
        we are sorry, the page you requested could not be found Please go back
        to the homepage.
      </p>

      <Link to="/" className="link">
        <button type="button" className="notfound-button">
          Go to Home
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
