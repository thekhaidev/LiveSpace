import React from 'react';
import Pic from '../../../dist/assets/AG76-IG.png'

const NESProfile = () => (

  <div className="nes-container is-dark">
      <div style={{ height: "300px" }}>
    <div className="row">
    <h5 style={{position: "relative", left: "35px"}}>
          Asianguy76
        </h5>
    </div>
    <div className="row">

      <div className="col-xs-4 col-md-4">

        <br />
        <img src={Pic} style={{ height: "300%", width: "200%", position: "absolute", right: "-45%", top: "15%" }} alt="Profile Pic" />
      </div>
      <div className="col-xs-4 col-md-8">
        <p style={{ fontSize: "12px", position: "absolute", right: "30%", top: "100%" }}>
          Male
          <br />
          32 Years Old
          <br />
          Santa Monica,
          <br />
          CALIFORNIA
          <br />
          United States
        </p>
       <div className="row">
         <div className="col" style={{ fontSize: "12px", position: "absolute", right: "-25%", top: "550%"}}>
         <p >
          <br />
          Last Login: 6/25/2006
        </p>
         </div>
        <p style={{ fontSize: "12px", position: "absolute", right: "110%", top: "590%"}}>
          <span>Mood: Tired</span>
        </p>
       </div>
      </div>
    </div>
  </div>
  </div>
  )


export default NESProfile;