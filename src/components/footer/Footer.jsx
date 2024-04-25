import { FaCode, FaHeart } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const emailAddress = 'Adesinamariam7@gmail.com';
  return (
    <>
      <div className="container-fluid footer " style={{ height: '100%' }}>
        <div>
          <h1 className="text-center"> Get In Touch </h1>
          <p className="text-center">
            I am currently looking for full-time or remote frontend Software
            development opportunities! If you know of any positions available,
            if you have any questions, or if you just want to say hi, please
            feel free to email me at,
            <a
              href={`mailto:${emailAddress}?subject=Inquiry&body=Hello, I have a question regarding...`}
              className='btn text-light'
            >
              Adesinamariam7@gmail.com
            </a>
          </p>
        </div>
        <div className="text-center">
          <FaCode /> with <FaHeart /> from RealMinTech
        </div>
      </div>
    </>
  );
}
