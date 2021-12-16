import React from 'react';

export default function Footer() {
  return (
    <footer>
      <img className='footerLogo' src={window.destinyLogoURL} />
      <section className='footer-info'>
        <ul className='technologies'>
          <li>React</li>
          <li>Redux</li>
          <li>Ruby on Rails</li>
          <li>Postgres</li>
          <li>Node.js</li>
          <li>jQuery</li>
          <li>jbuilder</li>
          <li>HTML</li>
          <li>SCSS</li>
          <li>JavaScript</li>
        </ul>
        <ul className='footer-contact'>
          <li>
            <a
              href='https://victorhedev.github.io/portfolio/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Personal Website
            </a>
          </li>
          <li>
            <a
              href='https://github.com/VictorHeDev'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/victor-he/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href='https://angel.co/u/victor-he'
              target='_blank'
              rel='noopener noreferrer'
            >
              AngelList
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
