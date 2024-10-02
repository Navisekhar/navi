import React from 'react'
import './Project.css'
import redirect from './link.svg'

function Project() {
  return (
    <div className='prj' id="projects">
    <h2><b>Previous Work</b></h2>
    <p className="separator" />
        <div className='cards'>
            <div className='card'>
                <h5>Weather - Dashboard</h5>
                <p className='card-text'>A simple Weather Dashboard that provides real-time weather updates and forecasts. This user-friendly tool lets users check current conditions and forecasts for their location or any city, with accurate data from integrated APIs for convenient weather tracking.</p>
                <p>React.js,JavaScript,Tailwind-CSS</p>
                <a href='https://weatherapp-ashen-psi.vercel.app/'>Explore <img className='link_img' src={redirect} alt='link'/></a>
            </div>
            <div className='card'>
                <h5>Water Quality Analysis </h5>
                <p className='card-text'>This ML model analyzes water quality using pH, turbidity, and dissolved oxygen levels to assess safety. Built with HTML, CSS, JavaScript for the frontend, and Python (Flask) for the backend, it utilizes basic machine learning models to predict water quality.</p>
                <p>HTML,CSS,Python,Flask</p>
                <a href='https://water-quality-analysis-and-prediction.onrender.com/'>Explore <img className='link_img' src={redirect} alt='link'/></a>
            </div>
        </div>
        {/*<button className='prj_btn'>More Project <img className='link_img' src={redirect} alt='link'/></button>*/}
    </div>
  ) 
}

export default Project
