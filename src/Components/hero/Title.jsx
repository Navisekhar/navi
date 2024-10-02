import React from 'react'
import title from './title.css'
import devv from './dev.svg'

function Title() {
  return (
    <div id="home">
    <div className='main'>
    <div className='title_main'>
    <h1 className='title_1'><span className='tt_1'>A</span></h1>
    <h1 className='title_2'>Web</h1>
    <div class="typing-demo">Developer</div>
    <p className='desc'>UI UX | Python </p>
    <div class="button-container text-center">
              {/*<a href='#'><button class="botn botn-fill">Hire Me</button></a>*/}
            </div>
    </div>
    <img className='title_img' src = {devv} alt="Developer"/>
    </div>
    </div>
  )
}

export default Title