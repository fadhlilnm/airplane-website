import React from "react";

import {FaPlane} from 'react-icons/fa'
import {BiSupport} from 'react-icons/bi'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'

import garuda from '../../assets/garuda.png'
import bandara from '../../assets/bandara.jpeg'

const Navbar = () => {
  return (
    <div className= "navBar flex">
        <div className="navBarOne flex">

            <div>
                <FaPlane className="icon"/>
            </div>

            <div className="none flex">
                <li className="flex"> <BiSupport className="icon"/> Support</li>
                <li className="flex"> <AiOutlineGlobal className="icon"/> Languages</li>
            </div>

            <div className="atb flex">
                <span className="atbOne"><b>Home</b></span>
                <span className="atbTwo"><b>Your Order's</b></span>
            </div>

            <div className="atb flex">
                <span className="atbThree"><b>Sign In</b></span>
                <span className="atbFour"><b>Sign Out</b></span>
            </div>
        </div>
  
    </div>
  )

}

export default Navbar