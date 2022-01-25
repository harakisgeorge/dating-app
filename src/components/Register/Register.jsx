import React, {useState} from 'react'
import "./Register.css"
import axios from "axios"; 
const Register = () => {

   const [gender,setGender] = useState("male");
   const [firstName,setfirstName] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [age,setAge] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();

      const user = {
         gender : gender,
         firstName: firstName,
         email: email,
         password: password,
         age: age
      }
      console.log(user)
      axios.post('http://localhost:5000/users/add/',  user)
      .then(res=>{
        console.log(res);
        console.log(res.data);
      })
      console.log(user)

   }

      {/*pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" */ }

   return (
      <div className='container'>
         <h3>CREATE ACCOUNT</h3>
         <form className='form' onSubmit={handleSubmit}>
         <div className='login-Col'>
            <div className='login-Row'>
               <p>First Name</p>
               <input 
                     placeholder='e.g George' 
                     type='text'
                     value={firstName}
                     onChange={(e) => setfirstName(e.target.value)}/>
            </div>
            <div className='login-Row'>
               <p>Gender</p>
               <div className="wrapper">
               <select 
                     className="option option-1" 
                     value={gender} 
                     name="gender" 
                     id="genders"
                     onChange={(e)=>setGender(e.target.value)}
                     >
                     <option value="male">Male</option>
                     <option value="female">Female</option>

               </select>

                </div>
            </div>
            <div className='login-Row'>
               <p>Email Address</p>
               <input 
                     placeholder='e.g placeholder@placeholder.com' 
                     type='text'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='login-Row'>
               <p>Password</p>
               <input type="password" 
                      id="psw" 
                      name="psw" 
                       title="Must contain at least one number and one uppercase and lowercase letter,
                      and at least 8 or more characters" 
                      required 
                      onChange={(e) => setPassword(e.target.value)}/>

            </div>
            <div className='login-Row'>
               <p>Age</p>
               <input 
                     placeholder='e.g 24' 
                     type='text'
                     value={age}
                     onChange={(e) => setAge(e.target.value)}/>
            </div>
            </div>
         <button className="mainpage-center_button"><span >SUBMIT</span></button>
         </form>
      </div>
   )
}

export default Register
