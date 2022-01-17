import React from 'react'
import "./Modal.css"
const Modal = ({ handleClose, show, children }) => {
   const showHideClassName = show ? "modal display-block" : "modal display-none";
 
   return (
     <div className={showHideClassName}>
   
       <section className="modal-main">
       <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
         {/*
			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Sign up</button>
				</form>
			</div> */}

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>
         <button type="button" onClick={handleClose}>
           Close
         </button>
       </section>
     </div>
   );
 };

export default Modal
