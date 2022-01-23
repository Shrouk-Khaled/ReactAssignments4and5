import React from 'react';
import './contactMe.css'
// import Contactme from './contactMe/contactMe.js';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class Contactme extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>
                <div className='col-12 div1'>
                    {/* <img src=''></img> */}
                    <div className='inside-div'>
                        <h1>Katie Goarge</h1>
                        <h2>Web Developer & Designer</h2>
                        <Button>Contact Me</Button>
                    </div>
                </div>
            </>
        );
    }
}

export default Contactme;
