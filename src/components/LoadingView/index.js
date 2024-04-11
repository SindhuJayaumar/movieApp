import Loader from 'react-loader-spinner'
import './index.css'

const LoadingView = () => (
  <>
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" className="loader-icons" />
    </div>
  </>
)

export default LoadingView
