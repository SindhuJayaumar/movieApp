import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import FooterPage from '../FooterPage'
import FailureView from '../FailureView'
import LoadingView from '../LoadingView'

import './index.css'

const ApiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    bannerMovie: {},
    ApiStatus: ApiConstants.initial,
  }

  componentDidMount = () => {
    this.getRandomVideos()
  }

  getRandomVideos = async () => {
    this.setState({ApiStatus: ApiConstants.inprogress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/movies-app/originals`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedData = data.results.length
      const onMove = data.results[Math.floor(Math.random() * fetchedData)]
      const updatedData = {
        backdropPath: onMove.backdrop_path,
        id: onMove.id,
        overview: onMove.overview,
        posterPath: onMove.poster_path,
        title: onMove.title,
      }

      this.setState({
        bannerMovie: {...updatedData},
        ApiStatus: ApiConstants.success,
      })
    } else {
      this.setState({
        ApiStatus: ApiConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {bannerMovie} = this.state
    const {backdropPath, overview, title} = bannerMovie
    return (
      <>
        <div
          className="banner-larger-container"
          alt={title}
          style={{
            backgroundImage: `url(${backdropPath})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            height: '100%',
          }}
        >
          <div className="banner-lg">
            <h1 className="banner-heading">{title}</h1>
            <h1 className="banner-content">{overview}</h1>

            <button type="button" className="play-button">
              Play
            </button>
          </div>
        </div>
      </>
    )
  }

  RetryButton = () => {
    this.getRandomVideos()
  }

  renderFailureView = () => <FailureView RetryButton={this.RetryButton} />

  renderLoaderView = () => <LoadingView />

  renderRandomVideos = () => {
    const {ApiStatus} = this.state

    switch (ApiStatus) {
      case ApiConstants.success:
        return this.renderSuccessView()
      case ApiConstants.inprogress:
        return this.renderLoaderView()
      case ApiConstants.failure:
        return this.renderFailureView()
      default:
        return 'null'
    }
  }

  render() {
    return (
      <>
        <div className="home-container">
          <Header />
          <div>{this.renderRandomVideos()}</div>
          <h1>Trending Now</h1>
          <FooterPage />
        </div>
      </>
    )
  }
}
export default Home
