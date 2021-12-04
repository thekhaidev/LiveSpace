import React from 'react'
import twitterScript from '../utils/twitterScript.js'

const Twitter = () => {

  twitterScript('https://platform.twitter.com/widgets.js');
  return (
  <div>
    <a className="twitter-timeline" data-width="800" data-height="500" data-theme="light" data-tweet-limit="1" href="https://twitter.com/ShanghaiiRen?ref_src=twsrc%5Etfw">Tweets by ShanghaiiRen</a>
  </div>
)}

export default Twitter;
