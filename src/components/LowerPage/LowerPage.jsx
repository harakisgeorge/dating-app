import React, {useState,useEffect} from 'react'
import "./LowerPage.css"
import apple_picture from "../../../src/assets/apple_store.png"
import google_picture from "../../../src/assets/google_store.svg"

import { FaFacebook,FaTwitter,FaInstagram,FaLinkedinIn } from 'react-icons/fa';
const LowerPage = ({Download}) => {
    const [isDownload,setisDownload] = useState(false);

   useEffect(() => {
      console.log(Download)
      if(Download){
         setisDownload(true)
      }else{
         setisDownload(false)
      }
    } );   
   return (
      <div className="lowerpage-container">
         <section className="story-slider">

         {isDownload ===false && (
               <div className="slider-container">
               
                <div className="slide">
                   <h4>Courtney & Miranda</h4>
                   <div className="slide-underline"> </div>
                   <p>Thanks to Tinder I have found the love of my life and we are to be married. 
                   After going on a few dates and having a few fun nights I came across Miranda.
                    After reading her profile I couldn’t resist swiping right after reading her final sentence... 
                    ‘Looking for my super babe for life.’ 
                   After talking for about a week we went out on our first date and I knew there was something special about her!</p>
                </div>
                
                <div className="slide">
                <h4>George & Ghoul</h4>
                   <div className="slide-underline"> </div>
 
                   <p>Thanks to Tinder I have found the love of my life and we are to be married. 
                   After going on a few dates and having a few fun nights I came across Miranda.
                    After reading her profile I couldn’t resist swiping right after reading her final sentence... 
                    ‘Looking for my super babe for life.’ 
                   After talking for about a week we went out on our first date and I knew there was something special about her!</p>
                </div>
 
                <div className="slide">
                <h4>Cersei & Jaime</h4>
                   <div className="slide-underline"> </div>
 
                   <p>Thanks to Tinder I have found the love of my life and we are to be married. 
                   After going on a few dates and having a few fun nights I came across Miranda.
                    After reading her profile I couldn’t resist swiping right after reading her final sentence... 
                    ‘Looking for my super babe for life.’ 
                   After talking for about a week we went out on our first date and I knew there was something special about her!</p>
                </div>
                
             </div>
              )}
            


            <div className='footer_and_extra-info'>
            {isDownload ===true && (
                 <div className='download-text'>
                 <h3>Supported Platforms and Devices</h3>
                 <ul>
                       <li> Tinder is currently available on iOS, Android, and HMS devices. 
                       Along with our mobile apps, you can visit Tinder.com to use Tinder for Web.</li>
                       <li>
                       We also offer a lightweight version of Tinder you can take anywhere and everywhere 
                       - download Tinder Lite from the Google Play store.
                       </li>
                       <li>
                       Tinder currently supports iOS 12.0 and up, Android 7.0 and up, 
                       and the latest versions of all major web browsers (Chrome, Firefox, Safari, Edge, etc.).  
                       </li>
                 </ul>
              </div>
            )}
            
               <div className="footer">
                  <div className="footer-part1">
                     <h5>LEGAL</h5>
                     <ul>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Intellectual Property</a></li>

                     </ul>
                  </div>
                  <div className="footer-part2">
                     <h5>CAREERS</h5>
                     <ul>
                        <li><a href="#">Careers Portal</a></li>
                        <li><a href="#">Tech Blog</a></li>
                     </ul>
                  </div>
                  <div className="footer-part3">
                     <h5>SOCIAL</h5>
                     <ul>
                        <li><a href="#"><FaFacebook /> </a></li>
                        <li><a href="#"><FaTwitter /> </a></li>
                        <li><a href="#"><FaInstagram /> </a></li>
                        <li><a href="#"><FaLinkedinIn /> </a></li>

                     </ul>
                  </div>
                  <div className="footer-part4">
                     <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Destinations</a></li>
                        <li><a href="#">Press Room</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Promo code</a></li>

                     </ul>
                  </div>
               </div>
               <div className='underline'></div>
               <div className="extra-info">
                  <div className="extra_info-part1">
                     <h3 className='extra_info-part1-item'>GET THE APP!</h3>
                     <img className="store_picture extra_info-part1-item" src={apple_picture} />
                     <img className="store_picture extra_info-part1-item" src={google_picture} />
                  </div>
                  <div className="extra_info-part2">
                     <p>Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual, 
                        you need to be on Tinder. With over 55 billion matches made, it’s the place to be to meet your next best match. 
                        Let’s be real, the dating landscape looks very different today, as most people are meeting online. 
                        With Tinder, the world’s most popular free dating app, 
                        you have millions of other single people at your fingertips and they’re all ready to meet someone like you. 
                        Whether you’re straight or in the LGBTQIA community, Tinder’s here to bring you all the sparks.</p>
                     <p>There really is something for everyone on Tinder. Want to get into a relationship? You got it.
                        Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? 
                        Tinder U’s got you covered. Tinder isn’t your average dating site — it’s the most diverse dating app, where adults of all 
                        backgrounds and experiences are invited to make connections, memories, and everything in between.</p>
                  </div>
               </div>
               <div className='underline'></div>
               <div className='undernote'>
                  <div>FAQ / Safety Tips / Terms / Cookie Policy / Privacy Settings</div>
                  <div>© 2022 Match Group, LLC, All Rights Reserved.</div>

               </div>
            </div>
         </section>
      </div>
   )
}

export default LowerPage
