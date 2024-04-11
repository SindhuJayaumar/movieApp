import Header from '../Header'
import './index.css'

const FailureView = props => {
  const {RetryButton} = props

  const onRetryButton = () => {
    RetryButton()
  }

  return (
    <>
      <Header />
      <div className="failure-container">
        <img
          src="https://res.cloudinary.com/dyx9u0bif/image/upload/v1657426934/homepage-failure_egb8fl.png"
          alt="failure view"
          className="failure-img"
        />
        <h1 className="failure-heading">
          Something went wrong. Please try again
        </h1>
        <button
          type="button"
          className="failure-button"
          onClick={onRetryButton}
        >
          Try Again
        </button>
      </div>
    </>
  )
}
export default FailureView
