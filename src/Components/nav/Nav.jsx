import React from 'react'
import styled from 'styled-components';
import nav from './nav.css'

function Nav() {
  return (
    <>
     <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      NAVI SEKHAR 
    </div>
  </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  
  <div class="nav-links">
    <a href="/">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#footer">Contact</a>
  </div>
</div>
    </>
  )
}

export default Nav;
