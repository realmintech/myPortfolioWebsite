import image from '../../assets/Capture8.jpeg';
import Accordion from './Accordion';

export default function Experience() {
  return (
    <>
      <div className="container message-area my-5" id="experience">
        <h1 className="text-center">Experience</h1>
        <div className="row mt-3">
          <div className="col-lg-6">
            <img
              src={image}
              alt=""
              style={{ width: '100%', height: '100%', borderRadius: '12px' }}
            />
          </div>
          <div className="col-lg-6">
            <h4>Work, Internship and Volunteership</h4>
            <h6>
              I am working as a full time software developer with an experience
              of about 2 year and have done internships after graduating from
              the university. I've done projects both as a solo developer and in
              a team. I like contributing to opensource projects in my free
              time. I have extensive experience working with a variety of
              technologies as a developer. I've developed and maintained
              multiple projects using these technologies, and I'm always eager
              to learn more.
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <Accordion />
      </div>
    </>
  );
}
