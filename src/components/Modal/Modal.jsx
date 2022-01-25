import React from 'react'
import "./Modal.css"
const Modal = ({ handleClose, show, children }) => {
   const showHideClassName = show ? "modal display-block" : "modal display-none";
 
   return (
     <div className={showHideClassName}>
   
       <section className="modal-main">
       <div class="main">  	      
        <h2 className='title'>LOGIN</h2>
          <div class="login">
            <form className="form">
              <label for="chk" aria-hidden="true">Login</label>
              <input className="input-email" type="email" name="email" placeholder="Email" required=""/>
              <input className="input-password" type="password" name="pswd" placeholder="Password" required=""/>
              <div className='buttons'>
                <button>Login</button>
                <button type="button" onClick={handleClose}>Close</button>
              </div>
            </form>
          </div>
	      </div>
         
       </section>
     </div>
   );
 };

export default Modal
