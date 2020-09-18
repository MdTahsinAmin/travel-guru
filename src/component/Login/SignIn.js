import { Avatar, Button, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import './SignIn.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import googleLogo from '../../Icon/google.png'
import facebookLogo from '../../Icon/fb.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { continueWithFacebook, continueWithGoogle, initializeLoginFramwork } from './LoginManager';
import { userContext } from '../../App';
const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
}));
const SignIn = () => {
    
    const history = useHistory();

    const location = useLocation();
     
    let { from } = location.state || { from: { pathname: "/hotelInformation" } };


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




    return (
        <div className='container'>
           <div className='input-box'>
            <h4 style={{marginLeft:'25px'}}>Login</h4>
             <div className ='input-group'>
                 <form>
                     <input type="email"      className='input-fields'  name="email"      id=""  placeholder='Email address' required/> <br/>
                         
                     <input type="password"  className='input-fields'  name="password"   id=""  placeholder='Password' required/><br/>
                <div className='d-flex justify-content-between'>
                    <div>
                    <input className='checkbox-light' type="checkbox" name="rememberMe" id=""/>
                    <label style={{fontWeight: '500'}} htmlFor="rememberMe">Remember Me</label>
                    </div>
                    <Link style={{color:'#F9A51A'}}to='/forgetPassword'>Forget Password</Link>
                </div>
                     <input type="submit" className='submit-btn' value="Login"/>
                 </form>
                 <p style={{marginLeft:'75px'}}>Don't have an account.<Link  style={{color:'#F9A51A'}}to='/login'>Create an account</Link></p>
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