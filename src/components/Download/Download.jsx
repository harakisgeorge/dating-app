import React from 'react'
import {GoFlame } from 'react-icons/go';
import LowerPage from '../LowerPage/LowerPage'

import "./Download.css"
const Download = () => {
   return (
      <div>
         <div className='download-container'>
            <div className='download-uppercontainer'>
               <ul className="download-container_navbar">
                  <li className="download-leftside"><a href=""> <GoFlame /> <span>Tinderzz </span></a></li>
                  <li className="download-rightsize" ><a href="">Back to Tinderzz</a></li>
               </ul>
               <img loading="auto" alt="" class="download-image" draggable="true" 
               src="https://tinder.com/static/build/build-ssg/static/phone-frame-4b7178071dd47f185c13d14c95f05b24.png" />
            </div>
         </div>
         <div className='download-container-lower'>
            <LowerPage />
         </div>
      </div>
   )
}

export default Download
