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
      <div id="contact">
      </div>
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
            <h1 className='mb-5'>Contact Me @</h1>
            <FaTwitter
              href="https://twitter.com/Adesina20638088"
              style={{ fontSize: '50px', color: 'navy' }}
            />
            <FaWhatsapp
              href="https://wa.me/qr/5RQYQVLSRBVGL1"
              style={{ fontSize: '50px', color: 'green' }}
            />
            <FaLinkedin
              href="https://www.linkedin.com/in/mariam-adesina-temitope/"
              style={{ fontSize: '50px', color: 'navy' }}
            />
            <FaSlack
              href="realmintech.slack.com"
              style={{ fontSize: '50px', color: 'purple' }}
            />
            <FaTelegram
              href="https://www.telegram.com/in/adesina-temitope"
              style={{ fontSize: '50px', color: 'orange' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
