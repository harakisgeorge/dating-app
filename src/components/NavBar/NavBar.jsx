import React, {useState} from 'react'
import {FaBurn} from "react-icons/fa"
import {ImEarth} from "react-icons/im"
import Modal from "../Modal/Modal.jsx"
import "./NavBar.css"
const NavBar = ({handleLoginClick}) => {
   const [show,setShow] = useState(false);


   const hideModal = () =>{
      setShow(false);
   }

   const showModal = () =>{
      setShow(true);
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
         <Modal show={show} handleClose={hideModal}>
          <p>Modal</p>
        </Modal>
         <ul className="navBar-rightside">
            <li> <a  href="#"><ImEarth /> ENGLISH</a></li>
            <li> <a  onClick={showModal} className="loginicon" href="#">Log in</a></li>
         </ul>
      </section>
   )
}

export default NavBar
