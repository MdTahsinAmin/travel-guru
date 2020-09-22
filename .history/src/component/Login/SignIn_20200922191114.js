import { Avatar, Button, makeStyles } from '@material-ui/core';
import React, { useContext, useRef, useState } from 'react';
import './SignIn.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import googleLogo from '../../Icon/google.png'
import facebookLogo from '../../Icon/fb.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { continueWithFacebook, continueWithGoogle, initializeLoginFramwork, signInWithEmailAndPassword,resetPassword } from './LoginManager';
import { userContext } from '../../App';
import { useForm } from 'react-hook-form';
const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
}));
const SignIn = () => {

    const { register, errors, handleSubmit,watch } = useForm({
        mode: "onChange"
    });
    const password = useRef({});

    const history = useHistory();

    const location = useLocation();
     
    let { from } = location.state || { from: { pathname: "/hotelInformation" } };
    let { extra } = location.state || { extra: { pathname: "/home" } };


    const [loginUser, setLoginUser] = useContext(userContext);

    const classes = useStyles();
   
    initializeLoginFramwork();
   
    const [errorMessage , setErrorMessage] = useState(false);
    
    //console.log(loginUser);
   

    const googleSignIn = () =>{
        let newUser ={...loginUser};
        continueWithGoogle().then(res=>{
            const login = {...newUser,...res};
            setLoginUser(login);
            if(loginUser.destination){
             history.replace(from);
            }
            else{
                history.replace(extra);
                alert('Please Fulfil The Booking Form')
            }
        })
    }

   const facebookSignIn = () =>{
     let newUser ={...loginUser};
        continueWithFacebook().then(res=>{
            const login = {...newUser,...res};
            setLoginUser(login);
            if(loginUser.destination){
             history.replace(from);
            }
            else{
                history.replace(extra);
                alert('Please Fulfil The Booking Form')
            }
        })
   }

   const onSubmit =  data =>{
       const {email, password} =data;
       let newUser ={...loginUser};
       newUser.email = email
       signInWithEmailAndPassword(email, password).then(res =>{
                const login = {...newUser,...res};
                setLoginUser(login);
                if((loginUser.destination) && (login.emailVerified||loginUser.emailVerified)){
                  history.replace(from);
                }
                else if(!(loginUser.destination)&&((login.emailVerified||loginUser.emailVerified))){
                    history.replace(extra);
                }
                else{
                   
                   if((login.emailVerified||loginUser.emailVerified)){
                     setErrorMessage(false);
                      history.replace(location.state);
                   }
                   else if(!(login.emailVerified||loginUser.emailVerified)){
                    setErrorMessage(true);
                   }
                   else{
                       history.replace(location.state);
                   }
                }
                
       })
   }
   //console.log(loginUser);
   


    return (
        <div className='container sigIn-section'>
           <div className='input-box'>
            <h4 style={{marginLeft:'25px'}}>Login</h4>
             <div className ='input-group'>
                 <form onSubmit={e => e.preventDefault()}>
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
        <label htmlFor='password'></label>
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
                <div className='d-flex justify-content-between checkBo'>
                    <div>
                    <input className='checkbox-light' type="checkbox" name="rememberMe" id=""/>
                    <label style={{fontWeight: '500'}} htmlFor="rememberMe">Remember Me</label>
                    </div>
                    <div>
                    <Link onClick={()=>{resetPassword(loginUser.email);alert('Reset Password link sent')}} className='forgetPassword' style={{color:'#F9A51A'}}>Forget Password</Link>
                    </div>
                </div>
                 {(errorMessage) &&<p className='error-shows' style={{textAlign: 'center',marginRight:'9px'}}>Please Verify Your Email</p>}
                     <input type="submit" className='submit-btn' value="Login" onClick={handleSubmit(onSubmit)} />
                 </form>
                 {!loginUser.success && <p className='error-shows'>{loginUser.error}</p>}
                 <p style={{marginLeft:'5px',marginTop:'5px',display:'inline'}}> Don't have an account.<Link  style={{color:'#F9A51A'}}to='/login'>Sign Up</Link></p>
             </div>
             <div className='anotherGoogleOrFb'>
              <Button  onClick={googleSignIn} variant="outlined"><Avatar  className='avater' alt="Cindy Baker" src={googleLogo}  className={classes.small}/> Google </Button>
              <Button  onClick={facebookSignIn} variant="outlined"><Avatar  className='avater' alt="Cindy Baker" src={facebookLogo} className={classes.small} /> Facebook</Button>
            </div>
            </div>
        </div>
    );
};

export default SignIn;