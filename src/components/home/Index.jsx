import About from '../about/About';
import Contact from './Contact';
import Experience from './Experience';
import './Home.css';
import Project from './Project';

export default function index() {
  return (
    <>
      <div id='home'>
        <About />
        <Project />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
