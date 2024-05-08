import {
  FaLinkedin,
  FaSlack,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <div id="contact"></div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <h1>Hire me</h1>
            <p>Please let me know how I could help you! ✍️ </p>
            <p>
              Are you looking to add a highly motivated Junior Developer to your
              team ?
            </p>
            <p>Do you just need a cool website? 🙋‍♂️</p>
            <p>I am looking forward to hearing from you!</p>
          </div>
          <div className="col-lg-6 message-area my-3 p-3">
            <h1 className="mb-5">Contact Me @</h1>
            <a href="https://twitter.com/Adesina20638088">
              <FaTwitter style={{ fontSize: '50px', color: 'navy' }} />
            </a>
            <a href="https://wa.me/qr/5RQYQVLSRBVGL1">
              <FaWhatsapp style={{ fontSize: '50px', color: 'green' }} />
            </a>
            <a href="https://www.linkedin.com/in/mariam-adesina-temitope/">
              <FaLinkedin style={{ fontSize: '50px', color: 'navy' }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
