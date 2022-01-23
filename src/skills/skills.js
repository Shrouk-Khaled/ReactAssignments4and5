import React from 'react';
import './skills.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';


class Skills extends React.Component{
    constructor(){
        super();
       
    }
    render(){
        const arr = [["html",80], ["css",60], ["js",70], ["Bootstrap",70], ["react",50]];
        return(
            <>
                <div className='col-12 skillsDiv'>
                    {/* <img src=''></img> */}
                    <div className='divName m-2 py-2'>
                        <h1>Skills</h1>
                        <p className='mx-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo beatae tempora amet at animi pariatur, excepturi deserunt dolorem eveniet iste 
                        earum dolore veritatis, velit natus architecto repellendus, tempore maxime neque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo beatae tempora amet at animi pariatur, excepturi deserunt dolorem eveniet iste 
                        earum dolore veritatis, velit natus architecto repellendus, tempore maxime neque.
                        
                        </p>
                    </div>
                    <div className='contentDiv row'>
                        <div className='rightSkills col-5'>
                            <h3>My Skills</h3>
                            <hr/>
                            <p>web design</p>
                            <p>web design</p>
                            <p>web design</p>
                            <p>web design</p>
                           
                        </div>
                        <div className='leftSkills col-7'>
                            <ul>
                                {
                                    arr.map((skills)=>{
                                        return(
                                            <li>
                                                <p><ProgressBar variant='success' now = {skills[1]} label = {skills[0]}/></p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                           
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Skills;
