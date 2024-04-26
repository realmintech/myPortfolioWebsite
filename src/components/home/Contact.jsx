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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1807587462927!2d4.5428976101956495!3d7.770648192216418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037895c78efeac5%3A0xac5ed308fc48ad34!2sOIC%20Hub!5e0!3m2!1sen!2sng!4v1714062184812!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
