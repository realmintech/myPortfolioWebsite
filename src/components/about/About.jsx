import './About.css'
import myPic from '../../assets/image.jpeg';
import PdfButton from './PdfBtn';
export default function About() {
  return (
    <>
      <div className="container mt-3" id="about">
        <div className="row aboutMe animate__fadeInLeft">
          <div className="col-lg-6 col-md-6 col-sm-6 cirle">
            <img
              className="image"
              src={myPic}
              style={{ width: '240px', height: '240px', borderRadius: '50%' }}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 aboutMe">
            <h1>About me</h1>
            <p>
              My name is Adesina Mariam Temitope. I’m a graduate of Animal
              science from Federal university of technology Minna, Niger state.
              I am most passionate about giving back to the community, and my
              goal is to pursue this passion within the field of software
              engineering. In my free time I like coding, working on open source
              projects and surfing the net.
            </p>
            <div className="resumeBtn">
            <PdfButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
