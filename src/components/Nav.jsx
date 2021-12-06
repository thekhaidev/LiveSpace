import React, { useState } from 'react';

const Nav = ({ click }) =>{

  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" onClick={() => click('base')}>Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" onClick={() => click('nes')} >NES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">PSOne</a>
      </li>
    </ul>
  </div>
</nav>
)}

export default Nav;