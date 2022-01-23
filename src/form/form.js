import './form.css';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Formfun()
{
    const[user, setUser] = useState({
        name:"",
        Email:"",
        userName:"",
        password:"",
        confirmPass:""
    });

    const[error, setError] = useState({
        nameError:null,
        emailError:null,
        userNameError:null,
        passwordError:null,
        confirmPassError:null
    });

    const checkValidation=(e)=>
    {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

        if(e.target.name == "name")
        {
            setError({
                ...error,
                nameError: 
                    e.target.value.length == 0
                    ? "this field is required"
                    : null
            })
        }
        if(e.target.name == "Email")
        {
            const emailExpression = new RegExp("^[a-zA-Z0-9]{3,}@[a-zA-z]{3,}\.com$");
            setError({
                ...error,
                emailError: 
                    emailExpression.test(e.target.value)
                    ? null
                    : "this field is must be in a email format"
            })  
            // console.log(regExpression.test(e.target.value));
        }
        if(e.target.name == "userName")
        {
            const userNameExpression = new RegExp("^[a-zA-z]{5,}$");
            setError({
                ...error,
                userNameError: 
                    userNameExpression.test(e.target.value)
                    ? null
                    : "this field is must be in a userName format"
            })
        }
        if(e.target.name == "password")
        {
            // console.log(54);
            const passExpression = new RegExp("^(?=.*[a-z])(?=.*[A-z])(?=.*[0-9])(?=.*[-@-]).{5,}$");
            setError({
                ...error,
                passwordError: 
                    passExpression.test(e.target.value)
                    ? null
                    : "this field is must be in a password format"
            })
        }
        if(e.target.name == "confirmPass")
        {
            setError({
                ...error,
                confirmPassError: 
                    (e.target.value != user.password)
                    ? "the password is not a same"
                    : null
            })
        }
    }
    
    return(
        <>
            <div classNameName="container my-4">
            <div className="mb-3 offset-3 col-6 offset-3 ">
                <label for="inputPassword" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" name="name" className="form-control" onChange={(e)=>{checkValidation(e)}}/>
                    <small classNameName='text-danger'>{error.nameError}</small>
                </div>
            </div>       
            <div className="mb-3 offset-3 col-6 offset-3">
                <label for="inputPassword" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" name="Email" className="form-control" onChange={(e)=>{checkValidation(e)}} />
                    <small classNameName='text-danger'>{error.emailError}</small>
                </div>
            </div>
            <div className="mb-3 offset-3 col-6 offset-3">
                <label for="inputPassword" className="col-sm-2 col-form-label">User Name</label>
                <div className="col-sm-10">
                    <input type="text" name='userName' className="form-control" onChange={(e)=>{checkValidation(e)}}/>
                    <small classNameName='text-danger'>{error.userNameError}</small>
                </div>
            </div>
            <div className="mb-3 offset-3 col-6 offset-3">
                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="text" name="password" className="form-control" onChange={(e)=>{checkValidation(e)}}/>
                    <small classNameName='text-danger'>{error.passwordError}</small>
                </div>
            </div>
            <div className="mb-3 offset-3 col-6 offset-3">
                <label for="inputPassword" className="col-sm-4 col-form-label">Confirm Password</label>
                <div className="col-sm-10">
                    <input type="text" name='confirmPass' className="form-control" onChange={(e)=>{checkValidation(e)}}/>
                    <small classNameName='text-danger'>{error.confirmPassError}</small>
                    <Button classNameName='bg-success border-success my-2'>Register</Button>
                </div>
            </div>
            </div>
            
        </>
    );
}