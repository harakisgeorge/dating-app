import React, {useState} from 'react'
import NavBar from '../NavBar/NavBar'
import LoginForm from '../LoginForm/LoginForm'
import LowerPage from '../LowerPage/LowerPage'

import "./MainPage.css"
const MainPage = () => {

   const [isShowLogin,setIsShowLogin] = useState(false);
 
   const handleLoginClick = () =>{
      setIsShowLogin((isShowLogin) => !isShowLogin)
   }

   return (
      <div>
         <div className="mainpage-container">
            <NavBar handleLoginClick={handleLoginClick}/>
            <div className="mainpage-center">
               <h1 className="mainpage-center_title">Swipe Right <sup className="superscript">R</sup> </h1>
               <button className="mainpage-center_button">CREATE ACCOUNT</button>
            </div>
         </div>
         <LowerPage Download={false} />
      </div>
   )
}

export default MainPage
