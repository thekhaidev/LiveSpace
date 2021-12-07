import React, { useState } from 'react'
import "wired-elements";
import Spotify from './components/Spotify.jsx';
import Twitter from './components/Twitter.jsx';
import WiredTwitter from './components/wired/WiredTwitter.jsx';

import NESTwitter from './components/nes/NESTwitter.jsx';
import Medium from './components/Medium.jsx';
import WiredMedium from './components/wired/WiredMedium.jsx';


import Profile from './components/Profile.jsx';
import NESProfile from './components/nes/NESProfile.jsx';
import WiredProfile from './components/wired/WiredProfile.jsx';


import Contacts from './components/Contacts.jsx';
import NESContacts from './components/nes/NESContacts.jsx';
import WiredContacts from './components/wired/WiredContacts.jsx';

import Interests from './components/Interests.jsx';
import NESInterests from './components/nes/NESInterests.jsx';
import WiredInterests from './components/wired/WiredInterests.jsx';

import About from './components/About.jsx';
import NESAbout from './components/nes/NESAbout.jsx';
import WiredAbout from './components/wired/WiredAbout.jsx';

import Nav from './components/Nav.jsx';

import Base from './styled-components/Base.js'
import Wired from './styled-components/Wired.js'



const App = () => {
  const [style, setStyle] = useState('none')

  if (style === 'none') {
    return (
      <Base>
        <h1>
          Hello World
        </h1>
        <p>
          Welcome to my mvp.
        </p>
        <button onClick={() => setStyle('base')}>Click Me</button>
      </Base>
    )
  }

  if (style === 'wired') {
    return (
      <Wired>
        <Nav click={setStyle} />
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
                <h2>
                  <WiredProfile />
                </h2>
            </div>
            <div className='col-md-8'>
              <WiredTwitter />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div>
                <WiredContacts />
              </div>
            </div>
            <div className='col-md-8'>
              <div>
                <WiredMedium />
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>

            <div className='col'>
              <div>
                <WiredInterests />
              </div>
            </div>
            <div className='col'>
              <div>

                  <WiredAbout />

              </div>
            </div>
          </div>
        </div>
      </Wired>
    )
  }

  if (style === 'nes') {
    return (
      <div style={{ background: 'grey', fontFamily: 'Press Start 2P'}}>
        <Nav click={setStyle} />
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div style={{ border: "1px solid black", height: "300px" }}>
                <h2>
                  <NESProfile />
                </h2>
              </div>
            </div>
            <div className='col-md-8'>
              <NESTwitter />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div>
                <NESContacts />
              </div>

            </div>
            <div className="row">
            <div className="col">
            </div>
            </div>
            <div className='col-md-8'>
              <div className="nes-container is-dark">
                <Medium />
              </div>
              <Spotify />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>

            <div className='col'>
              <div>
                <NESInterests />
              </div>
            </div>
            <div className='col'>
              <div>

                  <NESAbout />

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (style === 'base') {
    return (
      <Base>
        <Nav click={setStyle} />
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div style={{ border: "1px solid black", height: "300px" }}>
                <h2>
                  <Profile />
                </h2>
              </div>
            </div>
            <div className='col-md-8'>
              <Twitter />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>

            <div className='col-md-4'>
              <div>
                <Contacts />
              </div>
              <Spotify />
            </div>
            <div className='col-md-8'>
              <div >
                <Medium />
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>

            <div className='col'>
              <div>
                <Interests />
              </div>
            </div>
            <div className='col'>
              <div>

                  <About />

              </div>
            </div>
          </div>
        </div>
      </Base>
    )
  }
}

export default App