import React from 'react';
import { Element, animateScroll as scroll } from 'react-scroll';

const Home = () => {
  return (
    <section className='container'>

        <section className='col-12'>
          {/* Title */}
            <div className='title'>
              <div>
                <Element name='home' className='element'>
                  <h1>Eudys <span>Collado<br />Espinal</span></h1>
                </Element>
                <h2>FrontEnd developer <br/> and UI Designer</h2>
            </div>
            <div className='col-12 networking' >
              <a href='https://www.linkedin.com/in/eudys-collado-espinal-796a36180/' target='_blank'>
                <img src='/Slice1.svg' />
              </a>
              {/* <img src='/Slice2.svg' /> */}
              <a href='https://github.com/Eudyx' target='_blank'>
                <img src='/github-mark-white.svg' />
              </a>
            </div>
          </div>
        </section>
      {/* About me section */}
      <section className='col-12'>
        <div className='col-12 subtitle' >
          <Element name='about-me' className='element'>
          <h2>
            ABOUT ME
            <div className='underline'></div>
          </h2>
          </Element>
        </div>
        <p className='col-9 section-text'>
          I’m Eudys Collado, frontend developer and term student in the computer science career.
          <br />
          <br />
          My greatest strengths are the frontend development and UI design, that’s ‘cause I love making friendly what the user sees.
          <br />
          <br />
          I really enjoy playing the guitar, singing and playing videogames.   
        </p>
      </section>
          
      {/* Skills section */}
      <section className='col-12'>
        <div className='col-12 subtitle' >
          <Element name='skills' className='element'>
            <h2>
              SKILLS
              <div className='underline'></div>
            </h2>
          </Element>
        </div>
        <div className='col-9 skills-container'>
          <div className='icons-container'>
            <h2>Javascript</h2>
            <img src='/brand-javascript.svg' className='skill-icon' />
          </div>
          <div className='icons-container'>
            <h2>React</h2>
            <img src='/brand-react.svg' className='skill-icon' />
          </div>
          <div className='icons-container'>
            <h2>Html</h2>
            <img src='/brand-html5.svg' className='skill-icon' />
          </div>
          <div className='icons-container'>
            <h2>Bootstrap</h2>
            <img src='/brand-bootstrap.svg' className='skill-icon' />
          </div>
          <div className='icons-container'>
            <h2>Css</h2>
            <img src='/brand-css3.svg' className='skill-icon' />
          </div>
          <div className='icons-container'>
            <h2>Figma</h2>
            <img src='/brand-figma.svg' className='skill-icon' />
          </div>
          <div className='icons-container'>
            <h2>Node</h2>
            <img src='/node-js.svg' className='skill-icon' />
          </div>
          <div className='icons-container'>
            <h2>Mongodb</h2>
            <img src='/brand-mongodb.svg' className='skill-icon' />
          </div>
        </div>
      </section>

      {/*Project section */}
      <section className='col-12'>
        <div className='col-12 subtitle' >
          <Element name='portfolio' className='element'>
            <h2>
              PORTFOLIO
              <div className='underline'></div>
            </h2>
          </Element>
        </div>
        <div className='col-12 project'>
            <a href='https://thunderous-sorbet-02b882.netlify.app/' target='_blank' className='project-in' id='pokedex-img' >
              <div className='background-opacity'>
                <h1>Pokedex</h1>
              </div>
            </a>
            <a href='https://jocular-centaur-51945f.netlify.app/' target='_blank' className='project-in' id='weather-img' >
              <div className='background-opacity'>
                <h1>Weather App</h1>
              </div>
            </a>
        </div>
      </section>

      {/*Project section */}
      <section className='col-12'>
        <div className='col-12 subtitle' >
          <Element name='contact' className='element'>
            <h2>
              CONTACTO
              <div className='underline'></div>
            </h2>
          </Element>
        </div>
        <div className='col-12 contact-container' >
        <div className='contact-info-container' >
          <h1 className='contact-subtitle'>Email</h1>
          <h1>eudys1.42@gmail.com</h1>
          <br />  
          <h1 className='contact-subtitle'>Cell phone</h1>
          <h1>+1 849 655 2802</h1>  
        </div>
        <div className='col-12 contact-icons-container' >
          <a href='https://www.linkedin.com/in/eudys-collado-espinal-796a36180/' target='_blank'>
            <img src='/Slice1.svg' />
          </a>
          {/* <img src='/Slice2.svg' /> */}
          <a href='https://github.com/Eudyx' target='_blank'>
            <img src='/github-mark-white.svg' />
          </a>
        </div>
        </div>
      </section>
    </section>
  )
}

export default Home