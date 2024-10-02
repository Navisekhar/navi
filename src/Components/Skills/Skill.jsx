import React from 'react'
import './skill.css'
import react from './img/react.png'
import flask from './img/flask.png'
import python from './img/python.png'
import node from './img/node.png'
import js from './img/js.png'
import htmls from './img/html.png';
import css from './img/css.png';
import mongo from './img/mongo.png'



function Skill() {
  return (
    <div>
        <div className='skill'>
        <h3>Languages, That i know</h3>
        <p className="separator" />
        <div className='img_cnt'>
        <img className='skill_img' src = {htmls} alt="Developer"/>
        <img className='skill_img' src = {css} alt="Developer"/>
        <img className='skill_img' src = {python} alt="Developer"/>
        <img className='skill_img' src = {js} alt="javaceript"/>
        <img className='skill_img' src = {flask} alt="Developer"/>
        <img className='skill_img' src = {mongo} alt="Developer"/>
        <img className='skill_img' src = {node} alt="node"/>
        <img className='skill_img' src = {react} alt="react"/>
        </div>
        </div>
    </div>
  )
}

export default Skill