import React from 'react'
import twitterScript from '../../utils/twitterScript.js'

const NESTwitter = () => {

  twitterScript('https://platform.twitter.com/widgets.js');
  return (
  <div className="nes-container is-dark">
    <a className="twitter-timeline" data-width="800" data-height="500" data-theme="dark" data-tweet-limit="1" href="https://twitter.com/ShanghaiiRen?ref_src=twsrc%5Etfw">Tweets by ShanghaiiRen</a>
  </div>
)}

export default NESTwitter;
