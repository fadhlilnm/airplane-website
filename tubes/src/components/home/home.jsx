import React from "react";
import skyvideo from '../../assets/skyvideo.mp4'
import aeroplane from '../../assets/aeroplane.png'

const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Life is Short and The World is Wide</h1>
        <p>To get the best of your adventure you just need to leave and go anywhere you like. We are waiting you!</p>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={skyvideo} autoPlay muted loop className="video"></video>
        </div>

        <img src={aeroplane} alt="pesawat" className="plane" />
      </div>
    </div>
  )

}

export default Home