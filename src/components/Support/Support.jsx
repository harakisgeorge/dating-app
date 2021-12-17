import React from 'react'
import {GoFlame } from 'react-icons/go';
import {BiSearch} from "react-icons/bi"
import "./Support.css"
const Support = () => {
   return (
      <div className='support-container'>
         <ul className="support-container_navbar">
            <li className="navbar-leftside"><a href=""> <GoFlame /> <span>Tinderzz </span></a></li>
            <li className="navbar-rightsize" ><a href="">Back to Tinderzz</a></li>
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

         <div className="button-group">
            <ul>
               <li><a href="#">A Guide To Tinder</a></li>
               <li><a href="#">Troubleshooting</a></li>
               <li><a href="#">Security  Privacy</a></li>
               <li><a href="#">Safety  Reporting</a></li>

            </ul>
         </div>
      </div>
   )
}

export default Support
