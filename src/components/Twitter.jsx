import React from 'react'
import twitterScript from '../utils/twitterScript.js'

const Twitter = () => {

  twitterScript('https://platform.twitter.com/widgets.js');
  return (
  <div>
    <a className="twitter-timeline" data-width="400" data-height="500" data-theme="light" href="https://twitter.com/ShanghaiiRen?ref_src=twsrc%5Etfw">Tweets by ShanghaiiRen</a>
  </div>
)}

export default Twitter;
