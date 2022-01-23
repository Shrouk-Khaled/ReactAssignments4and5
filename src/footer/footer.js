import React from 'react';
import './footer.css'
// import Contactme from './contactMe/contactMe.js';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faVoicemail} from "@fortawesome/free-solid-svg-icons";
import {faYoutube, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>
                <div className=' footerDiv'>
                    <div className='row insideFooter'>
                        <div className='rightFooter col-4 '>
                            <h4>Get In Touch</h4>
                            <p><FontAwesomeIcon icon={faVoicemail}></FontAwesomeIcon> shroukkhaled381@gmail.com</p>
                            <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 01144965828</p>
                        </div>
                        <div className='centerFooter col-4 '>
                            <Button>Contact me</Button>
                        </div>
                        <div className='leftFooter col-4'>
                            <div className='iconDiv'>
                            <span><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></span>
                            <span><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></span>
                            <span><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></span>
                            </div>
                            <p>made with love</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;
