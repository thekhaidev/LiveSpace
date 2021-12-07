import React from 'react'
import twitterScript from '../../utils/twitterScript.js'
import "wired-elements";

const WiredTwitter = () => {


  twitterScript('https://platform.twitter.com/widgets.js');
  return (
  <wired-card elevation="20">
     <h1>
       Status:
     </h1>
     <h2>
       I feel like writing a book.
     </h2>
  </wired-card>
)}

export default WiredTwitter;
