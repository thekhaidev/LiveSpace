import React from 'react'
import twitterScript from '../../utils/twitterScript.js'
import "wired-elements";

const WiredTwitter = () => {


  twitterScript('https://platform.twitter.com/widgets.js');
  return (
  <wired-card elevation="20">
    <a className="twitter-timeline" data-width="800" data-height="500" data-theme="light" data-tweet-limit="1" href="https://twitter.com/ShanghaiiRen?ref_src=twsrc%5Etfw">Tweets by ShanghaiiRen</a>
  </wired-card>
)}

export default WiredTwitter;
