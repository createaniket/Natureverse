import React from 'react'
import './Footer.css'
import {Link } from 'react-router-dom'
import {SiNetlify} from 'react-icons/si'
import {FaUser} from 'react-icons/fa'
import {AiFillMail} from 'react-icons/ai'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'

const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className='containerfooter'>
              
                <div className="lefter">

                <ul className="socials">
                    <li><Link href="#"><i class="fa fa-github"></i></Link></li>
                    <li><Link href="#"><i class="fa fa-linkedin-square"></i></Link></li>

                    <li><Link href="#"><i class="fa fa-linke-square" ><SiNetlify className='net-use' /></i></Link></li>
                    <li><Link href="#"><i  class="fa fa-linke-square"> <FaUser className='net-use'  /></i></Link></li>
                </ul>
                    
                </div>

                <div className='middle'>

                  <p>Copyright &copy; 2022 createaniket</p>
                    
                </div>


                <div className='righter'>
                    <div className="contactfooter">
                      <p id='contactheadingfooter'>Contact</p>
                      <p id='phone'><AiFillMail />  +91 6392347125 </p>
                      <p id='mail'><BsFillTelephoneInboundFill />  aniketpratapsingh7310@gmail.com</p>
                      </div>

                </div>
            </div>
        </div>
    )
}

export default Footer