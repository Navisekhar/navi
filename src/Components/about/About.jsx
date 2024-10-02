import React from 'react';
import './about.css';

function About() {
  return (
    <div className='about' id="about">
        <div className='wrapper'>
            <h2><b>Who's this guy?</b></h2>
            <p className="separator" />
        </div>
        <h3 className='title_desc'>Hello, My name is Navi Sekhar.</h3>
        <p className='about_text'>
            I am a Python web developer with a passion for creating amazing websites. 
            I have had the opportunity to work on various exciting projects that have 
            helped me grow as a developer. Over the years, I have developed a strong expertise 
            in various web development frameworks and technologies such as HTML, CSS, Python and Flask.
        </p>
        
        <h3 className='title_desc'>I am a Programmer.</h3>
        <p className='about_text'>
            For the front-end, I usually work with JavaScript, either standalone or including popular frameworks like ReactJS. 
            I also enhance the web's appearance by using Tailwind CSS, CSS, and when needed, frameworks like Bootstrap.
        </p>
        <p className='about_text'>
            For the back-end, I primarily use python and MongoDB. 
            I also have experience in Machine Learning, NLP and Data Science, exploring how these fields can enhance web applications and create intelligent solutions.
        </p>
    </div>
  );
}

export default About;
