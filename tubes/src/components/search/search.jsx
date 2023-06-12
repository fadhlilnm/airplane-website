import React from "react";
import {useNavigate} from "react-router-dom"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {BiCurrentLocation} from "react-icons/bi"
import {RxCalendar} from "react-icons/rx"

const Search = () => {
  const navigate = useNavigate()

  return (
    <div className="search container section">

      <div className="sectionContainer grid">

        <div className="btns flex">

          <div className="singleBtn">
            <span>Economy</span>
          </div>

          <div className="singleBtn">
            <span>Business Class</span>
          </div>

          <div className="singleBtn">
            <span>First Class</span>
          </div>

        </div>

        <div className="searchInputs flex">
          {/*single input*/}
          <div className="singleInput flex">

            <div className="iconDiv">
              <BiCurrentLocation className="icon"/>
            </div>

            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder="Dari Mana?" className="input"/>
            </div>

          </div>

          {/*single input*/}
          <div className="singleInput flex">

            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon"/>
            </div>

            <div className="texts">
              <h4>Destination</h4>
              <input type="text" placeholder="Mau Kemana?" className="input"/>
            </div>

          </div>

          {/*single input*/}
          <div className="singleInput flex">

            <div className="iconDiv">
              <RxCalendar className="icon"/>
            </div>

            <div className="dates">
              <h4>Departure Date</h4>
              <input type="date"className="input"/>
            </div>

          </div>

          <button className="button button-bg btnBlock flex" onClick={() => navigate('/Result')}>Get Started</button>
        </div>
      </div>
    </div>
  )

}

export default Search