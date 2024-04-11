import {Component} from 'react'
import Header from '../Header'
import FooterPage from '../FooterPage'

import './index.css'

class Popular extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="popular-container">
          Popular Route
          <FooterPage />
        </div>
      </>
    )
  }
}

export default Popular
