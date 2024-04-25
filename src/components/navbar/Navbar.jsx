import './Navbar.css';
import myPic from '../../assets/image.jpeg';
import { FaMoon } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={myPic}
              alt=""
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="justify-content-end iconMode">
            <FaMoon fontSize={25} />
          </div>
        </div>
      </nav>
    </>
  );
}
