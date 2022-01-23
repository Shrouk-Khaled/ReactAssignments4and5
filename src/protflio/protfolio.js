import React from 'react';
import './protfolio.css'
// import Contactme from './contactMe/contactMe.js';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class Protfolio extends React.Component{
    constructor(){
        super();
    }
    render(){
        const arr = [["Web-Design","colorDiv"], ["Mobile-Application", "colorDiv1"], ["Logo-design", "colorDiv"],
                     ["Web-Design", "colorDiv1"], ["Mobile-Application", "colorDiv"], ["Logo-design", "colorDiv1"]];
        return(
            <>
                <div className='row protofDiv p-4'>
                    <h1>Protfolio</h1>
                    {
                        arr.map((protfolio)=>{
                            return(
                                <div className='dynamic-card card-shadow col-4 py-2 '>
                                <div className={protfolio[1]}>
                                    <div className="card-body p-5">
                                        <h4 className="card-title text-Div">{protfolio[0]}</h4>
                                        <hr/>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    }
                   

                </div>
            </>
        );
    }
}

export default Protfolio;
