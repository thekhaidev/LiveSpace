import React from 'react';

const Contacts = () => (
  <div className="container" style={{ height: '300px', border: '1px solid black' }}>
    <h5>
      Top 8 Social Media
    </h5>
      <div className="row h-25">
        <div className="col">
        <a href="https://www.instagram.com/shanghaiiren/"><i className="fab fa-instagram size=7x"></i> Instagram</a>
        </div>
        <div className="col">
       <a href="https://twitter.com/ShanghaiiRen"> <i className ="fab fa-twitter-square"></i> Twitter</a>
        </div>
      </div>
      <div className="row h-25">
        <div className="col">
       <a href="https://www.tiktok.com/@shanghaiiren?lang=en"> <i className="fab fa-tiktok"></i> Tik Tok</a>
        </div>
        <div className="col">
       <a href="https://www.youtube.com/channel/UCspKjIJkUz04FygOo7S1eFQ"> <i className="fab fa-youtube-square"></i> Youtube</a>
        </div>
      </div>
      <div className="row h-25">
        <div className="col">
        <a href="https://github.com/asianguy76?tab=repositories"><i className="fab fa-github"></i> Github </a>
        </div>
        <div className="col">
        <a href="https://discordapp.com/users/asianguy#0076/"><i className="fab fa-discord"></i> Discord</a>
        </div>
      </div>
      <div className="row h-25">
        <div className="col">
       <a href="mailto:takecareofknives@gmail.com"> <i className="fas fa-envelope-square"></i> Email</a>
        </div>
        <div className="col">
     <a href="http://m.me/asianguy76">   <i className="fab fa-facebook-messenger"></i> Messenger</a>
        </div>
      </div>
  </div>
)

export default Contacts;
