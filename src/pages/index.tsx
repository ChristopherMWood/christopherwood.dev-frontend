import React from 'react';
import '../styles/pages/index.scss'
import githubLogo from '../images/github-logo.png';
import linkedinLogo from '../images/linkedin-light-logo.png';
import exercismLogo from '../images/exercism-purple-logo.png';
import stackoverflowLogo from '../images/stackoverflow-logo.png';
import GlobalNav from '../components/nav';

function Home() {
  return (
    <div>
      <GlobalNav />
      <div id="page-content">
        {/* <span style={{ whiteSpace: 'pre' }} ref={el} />
        <span style={{ whiteSpace: 'pre' }} ref={el2} /> */}
        <div id="front-page-banner-one">back-end developer at heart</div>
        <div id="front-page-banner-two">full-stack developer by trade</div>
        <div id="social-icons-container">
        <a
          className="App-link"
          href="https://github.com/christopherMWood"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className='social-logo' src={githubLogo} alt="My GitHub profile"/>
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/christopherwood/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className='social-logo' src={linkedinLogo} alt="My Linkedin profile"/>
        </a>
        <a
          className="App-link"
          href="https://exercism.org/profiles/ChristopherMWood"
          target="_blank"
          rel="noopenerm noreferrer"
        >
          <img id="exercism-logo" className='social-logo' src={exercismLogo} alt="My Exercism profile"/>
        </a>
        <a
          className="App-link"
          href="https://stackoverflow.com/users/1833177/cmw2379"
          target="_blank"
          rel="noopenerm noreferrer"
        >
          <img id="stackoverflow-logo" className='social-logo' src={stackoverflowLogo} alt="My StackOverflow profile"/>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
