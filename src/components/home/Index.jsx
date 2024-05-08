import About from '../about/About';
import Contact from './Contact';
import Experience from './Experience';
import './Home.css';
import Project from './Project';
import Service from './Service';
import TechnicalSkill from './TechnicalSkill';

export default function index() {
  return (
    <>
      <div id='home'>
        <About />
        <Project />
        <Service />
        <Experience />
        <TechnicalSkill />
        <Contact />
      </div>
    </>
  );
}
