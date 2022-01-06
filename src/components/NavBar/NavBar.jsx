import React from 'react'
import {FaBurn} from "react-icons/fa"
import {ImEarth} from "react-icons/im"
import "./NavBar.css"
const NavBar = ({handleLoginClick}) => {

   const handleClick = () =>{
      handleLoginClick()
   }

   return (
      <section className="navBar-container">
         <ul className="navBar-leftside">
            <li> <a><FaBurn /> Tindarz </a></li>
            <li> <a href="#">Products</a></li>
            <li> <a href="#">Learn</a></li>
            <li> <a href="#">Safely</a></li>
            <li> <a href="#">Support</a></li>
            <li> <a href="#">Download</a></li>

         </ul>

         <ul className="navBar-rightside">
            <li> <a  href="#"><ImEarth /> ENGLISH</a></li>
            <li> <a  onClick={handleClick} className="loginicon" href="#">Log in</a></li>
         </ul>
      </section>
   )
}

export default NavBar
