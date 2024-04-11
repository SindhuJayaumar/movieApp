import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showMessageError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showMessageError: true,
      errorMsg,
    })
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitButton = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const loginApiUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'post',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    console.log(data)
    console.log(response)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {username, password, showMessageError, errorMsg} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://res.cloudinary.com/dlxctwhhi/image/upload/v1705993974/Netflix-Brand-Logo_bvsafa.png"
          alt="login website logo"
          className="login-img"
        />
        <form className="form-container" onSubmit={this.submitButton}>
          <h1 className="heading">Login</h1>
          <label className="form-label" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            className="input"
            value={username}
            id="username"
            placeholder="Enter Username"
            onChange={this.onChangeUserName}
          />
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            value={password}
            className="input"
            id="password"
            placeholder="Enter Password"
            onChange={this.onChangePassword}
          />
          {showMessageError && <p className="error-msg">* {errorMsg} </p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
