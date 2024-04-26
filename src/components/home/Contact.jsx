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
          <div className="col-lg-6 message-area my-3 py-3">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Input your email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button className="contact btn-outline-none">
              <a href="https://wa.me/qr/5RQYQVLSRBVGL1" className="btn btn-outline-none">Lets connect on whatApp</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
