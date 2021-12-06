import React, { useState } from 'react'
import Spotify from './components/Spotify.jsx';
import Twitter from './components/Twitter.jsx';
import Medium from './components/Medium.jsx';
import Profile from './components/Profile.jsx';
import Contacts from './components/Contacts.jsx';
import Interests from './components/Interests.jsx';
import About from './components/About.jsx';
import Nav from './components/Nav.jsx';


const App = () => {
  const [style, setStyle] = useState('none')

  if (style === 'none') {
    return (
     <div>
        <h1>
        Hello World
      </h1>
      <button onClick={() => setStyle('something')}>Click Me</button>
     </div>
    )
  }

  if (style !== 'none') {
    return (
      <div>
        <Nav />
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
      </div>
     )
  }
}

export default App