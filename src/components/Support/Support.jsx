import React from 'react'
import {GoFlame } from 'react-icons/go';
import {BiSearch} from "react-icons/bi"
import "./Support.css"
import {   Link } from "react-router-dom";

const Support = () => {
   return (
      <div className='support-container'>
         <ul className="support-container_navbar">
            <li className="navbar-leftside"><a href=""> <GoFlame /> <span>Tinderzz </span></a></li>
            <li className="navbar-rightsize" ><a ><Link to="/"><span >Back to Tinderzz</span></Link></a></li>
         </ul>

         <div className="main-section">
            <h1> Hi. How can we help? </h1>
            <div>
               <BiSearch />
               <input
                  placeholder={"Search"}
                  type="search"
                  name="search"
                  className="search-box" />
            </div>
         </div>

            <ul className="button-group">
               <li><a id="button1" className="button" href="#">A Guide To Tinder</a></li>
               <li><a id="button2" className="button" href="#">Troubleshooting</a></li>
               <li><a id="button3" className="button" href="#">Security & Privacy</a></li>
               <li><a id="button4" className="button" href="#">Safety & Reporting</a></li>

            </ul>

            <ul className="button-group-bottom">
               <li><a id="button-bottom1" className="button-bottom" href="#">Privacy</a></li>
               <li><a id="button-bottom2" className="button-bottom" href="#">English (US) </a></li>
            </ul>

      </div>
   )
}

export default Support
