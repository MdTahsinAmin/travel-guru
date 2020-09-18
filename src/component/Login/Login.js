import React, { useContext, useRef, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import './Login.css'
import googleLogo from '../../Icon/google.png'
import facebookLogo from '../../Icon/fb.png'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { continueWithFacebook, continueWithGoogle, initializeLoginFramwork} from './LoginManager';
import { userContext } from '../../App';
import { useForm } from 'react-hook-form';

firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
}));



const Login = () => {
    const { register, errors, handleSubmit } = useForm({});
     const password = useRef({});
     
    const history = useHistory();

    const location = useLocation();
     
    let { from } = location.state || { from: { pathname: "/" } };
       
    const [loginUser, setLoginUser] = useContext(userContext);
    
   
   
    const classes = useStyles();
    
    initializeLoginFramwork();

    const googleSignIn = () =>{
        continueWithGoogle().then(res=>{
             setLoginUser(res);
             history.replace(from);
        })
    }

   const facebookSignIn = () =>{
        continueWithFacebook().then(res=>{
            setLoginUser(res);
            history.replace(from);
        })
   }

   const onSubmit =  (data) => {
       
   };

    return (
        <div className='container'>
            <div className='form-box'>
            <h4 style={{marginLeft:'25px'}}>Create an account</h4>
             <div className ='input-group'>
             <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="firstName">First Name</label>
        <input
            name="firstName"
            placeholder="Bill"
            ref={register({
            required: "this is a required",
            maxLength: {
                value: 2,
                message: "Max length is 2"
            }
            })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label htmlFor="lastName">Last Name</label>
        <input
            name="lastName"
            placeholder="Luo"
            ref={register({
            required: "this is required",
            minLength: {
                value: 2,
                message: "Min length is 2"
            }
            })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <label htmlFor="email">Email</label>
        <input
            name="email"
            placeholder="bluebill1049@hotmail.com"
            type="text"
            ref={register({
            required: "this is required",
            pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address"
            }
            })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label>Password</label>
        <input
            name="password"
            type="password"
            ref={register({
            required: "You must specify a password",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
            })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label>Repeat password</label>
        <input
            name="password_repeat"
            type="password"
            ref={register({
            validate: value =>
                value === password.current || "The passwords do not match"
            })}
        />
        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

        <input type="submit" onClick={handleSubmit(onSubmit)} />
    </form>
                 <p style={{marginLeft:'75px'}}>Already have an account.<Link  style={{color:'#F9A51A'}}to='/signIn'>Login</Link></p>
               
             </div>
             <div className='googleOrFb'>
              <Button  onClick={googleSignIn} variant="outlined"><Avatar  className='avater' alt="Cindy Baker" src={googleLogo}  className={classes.small}/> Google </Button>
              <Button onClick={facebookSignIn} variant="outlined"><Avatar  className='avater' alt="Cindy Baker" src={facebookLogo} className={classes.small} /> Facebook</Button>
            </div>
            </div>
        </div>
    );
};

export default Login;