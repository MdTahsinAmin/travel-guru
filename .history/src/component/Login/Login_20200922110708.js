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
import { continueWithFacebook, continueWithGoogle, createAnAccountWithEmailAndPassword, initializeLoginFramwork} from './LoginManager';
import { userContext } from '../../App';
import { useForm } from 'react-hook-form';
import Header from '../Header/Header';

firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
}));



const Login = () => {
     initializeLoginFramwork();
    
    const { register, errors, handleSubmit,watch } = useForm({
        mode: "onChange"
    });
    const password = useRef({});
    password.current = watch("password", "");
    
    

    const history = useHistory();

    const location = useLocation();

     
    let { from } = location.state || { from: { pathname: "/" } };

    let { extra } = location.state || { extra: { pathname: "/signIn" } };


       
    const [loginUser, setLoginUser] = useContext(userContext);
    console.log(loginUser);
    const classes = useStyles();

    const googleSignIn = () =>{
        let newUser ={...loginUser};
        continueWithGoogle().then(res=>{
            const login = {...newUser,...res};
            setLoginUser(login);
             history.replace(from);
        })
    }

   const facebookSignIn = () =>{
         let newUser ={...loginUser};
        continueWithFacebook().then(res=>{
            const login = {...newUser,...res};
            setLoginUser(login);
             history.replace(from);
        })
   }

    const onSubmit =  data => {
       const {firstName,lastName,email,password,password_repeat} = data;
         let newUser ={...loginUser};
       createAnAccountWithEmailAndPassword(firstName,lastName,email,password).then(res=>{
                const login = {...newUser,...res};
                setLoginUser(login);
                if(loginUser.success){
                    history.replace(extra);
                }
       })
    };
    return (
        <div className='container'>
            <div className='form-box'>
            <h4 style={{marginLeft:'25px'}}>Create an account</h4>
             <div className ='input-group'>
             <form onSubmit={e => e.preventDefault()}>
             <label htmlFor="firstName"></label>
                <input
                   className='input-fields'
                    name="firstName"
                    placeholder="First Name"
                    ref={register({
                    required: "this is a required",
                    minLength: {
                        value: 2,
                        message: "Min length is 2"
                    }
                    })}
                    required   />
      {errors.firstName && <p className='error-show'>{errors.firstName.message}</p>}

         <label htmlFor="lastName"></label>
            <input
                className='input-fields'
                name="lastName"
                placeholder="Last Name"
                ref={register({
                required: "this is required",
                minLength: {
                    value: 2,
                    message: "Min length is 2"
                }
                })}
                required />
      {errors.lastName && <p className='error-show'>{errors.lastName.message}</p>}

      <label htmlFor="email"></label>
      <input
        className='input-fields'
        name="email"
        placeholder="example@gmail.com"
        type="email"
        ref={register({
          required: "this is required",
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Invalid email address"
          }
        })}
       required/>
      {errors.email && <p className='error-show'>{errors.email.message}</p>}
            <label></label>
            <input
                className='input-fields'
                name="password"
                type="password"
                placeholder="Password"
                ref={register({
                required: "You must specify a password",
                minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters"
                }
                })}
                required />
            {errors.password && <p className='error-show'>{errors.password.message}</p>}
            
            <label></label>
            <input
                className='input-fields'
                name="password_repeat"
                placeholder="Confirmed Password"
                type="password"
                ref={register({
                validate: value =>
                    value === password.current || "The passwords do not match"
                })}
                required />
            {errors.password_repeat && <p className='error-show'>{errors.password_repeat.message}</p>}
            {!loginUser.success && <p className='error-shows'>{loginUser.error}</p>}
           <input className='submit-btn' type="submit" value='Create an account' onClick={handleSubmit(onSubmit)} />
    </form>
            <p style={{marginLeft:'50px'}}>Already have an account.<Link  style={{color:'#F9A51A'}}to='/signIn'>Login</Link></p>
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