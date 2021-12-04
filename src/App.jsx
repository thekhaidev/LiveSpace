import React from 'react'
import Spotify from './components/Spotify.jsx';
import Twitter from './components/Twitter.jsx';
import Medium from './components/Medium.jsx';
import Profile from './components/Profile.jsx';

const App = () => {
  return (
   <div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <div style={{border: "1px solid black", height: "300px"}}>
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
          <div style={{height:'300px', border: '1px solid black'}}>
            Contact Holder
          </div>
          <Spotify />
        </div>
        <div className='col-md-8'>
        <div style={{height:'600px', border: '1px solid black'}}>
        <Medium />
        </div>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row'>

        <div className='col'>
          <div style={{height:'300px', border: '1px solid black'}}>
            Interests Holder
          </div>
        </div>
        <div className='col'>
        <div style={{height:'300px', border: '1px solid black'}}>
        About Holder
        </div>
        </div>
      </div>
      </div>
   </div>
  )
}

export default App