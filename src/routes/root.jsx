import Links from '../components/links.jsx';
import Projects from '../components/projects.jsx';
import Resume from '../components/resume.jsx';
import AboutMe from '../components/about-me.jsx';
import './root.css';

export default function Root() {
  return (
    <>
      <div id='header' >
        <div id='info-container'>
            <div id='info'>
                <h1>Keith Maxon</h1>
                <h2>Frontend Web Developer</h2>
                <h3>React | JavaScript | HTML | CSS</h3>
            </div>
        </div>
        <div id='links-container'>
            <Links />
        </div>
      </div>
      <div id='body'>
        <Projects />
        <Resume />
        <AboutMe />
      </div>
    </>
  );
}