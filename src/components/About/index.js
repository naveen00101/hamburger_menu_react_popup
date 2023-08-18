// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-image-container">
      <img
        className="about-img-m"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />

      <img
        className="about-img-d"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </div>
  </div>
)

export default About
