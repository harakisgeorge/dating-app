import React, {useState} from 'react'
import {GoFlame } from 'react-icons/go';
import LowerPage from '../LowerPage/LowerPage'

import "./Download.css"
const Download = () => {
   return (
      <div>
         <div className='download-container'>
            <div className='download-uppercontainer'>
               <ul className="download-container_navbar">
                  <li className="download-tinder-logo"><a href=""> <GoFlame /> tinderzz </a></li>
                  <li className="download-text" >Meet New People <br></br> Today</li>
                  <li className="download-container-button" ><a href="">Download Tinderzz</a></li>

               </ul>
               <img loading="auto" alt="" class="download-image" draggable="true" 
               src="https://tinder.com/static/build/build-ssg/static/phone-frame-4b7178071dd47f185c13d14c95f05b24.png" />
            </div>
         </div>
         <div className='download-container-lower'>
            <LowerPage Download={true} />
         </div>
      </div>
   )
}

export default Download
