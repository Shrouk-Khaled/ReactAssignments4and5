import React from 'react';
import Button from 'react-bootstrap/Button'
// import CSVLink from 
import './aboutMe.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Aboutme extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>
                <div className='row aboutDiv'>
                  <div className='rightDiv col-3 p-5'>
                    <h1>About Me</h1>
                  </div>
                  <div className='leftDiv col-9 py-3'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo beatae tempora amet at animi pariatur, excepturi deserunt dolorem eveniet iste 
                        earum dolore veritatis, velit natus architecto repellendus, tempore maxime neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo beatae tempora amet at animi pariatur, excepturi deserunt dolorem eveniet iste 
                        earum dolore veritatis, velit natus architecto repellendus, tempore maxime neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo beatae tempora amet at animi pariatur, excepturi deserunt dolorem eveniet iste 
                        earum dolore veritatis, velit natus architecto repellendus, tempore maxime neque.
                    </p>
                    <Button>DOWNLOAD</Button>
                  </div>
                  
                </div>
            </>
        );
    }
}

export default Aboutme;
