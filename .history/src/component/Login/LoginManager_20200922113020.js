import * as firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { userContext } from "../../App";
import firebaseConfig from './firebase.config';
 
 export const initializeLoginFramwork = () =>{
  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }
}
 

export const continueWithGoogle = () =>{
    let  provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider).then(res=> {
        const {displayName,email,photoURL} = res.user;
        
        const googleUser = {
            isLogin : true,
            name : displayName,
            email:email,
            photoURL: photoURL,
            success:true
        }
        return googleUser;
    }).catch((error)=> {
        console.log(error);
        
    });

}

export const continueWithFacebook = ()=>{
    let provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider).then((result)=> {
        const {displayName,email,photoURL} = result.user;
        const facebookUser = {
            isLogin : true,
            name : displayName,
            email:email,
            photoURL: photoURL,
            success:true
        }
        return facebookUser;
  
      }).catch(function(error) {
         console.log(error);
      });
}


  export const createAnAccountWithEmailAndPassword = (firstName, lastName, email, password) =>{
      return firebase.auth().createUserWithEmailAndPassword(email, password).then(res=>{
        const newUser =res.user;
         newUser.error ='';
         newUser.success = true;
         updateUserInfo(firstName+" "+lastName);
         verifyEmail();
         return newUser;
      })
      .catch((error) =>{
        let errorMessage = error.message;
        const newUser = {};
        newUser.error = errorMessage;
        newUser.success = false;
        return newUser;
      });

  }

  export const signInWithEmailAndPassword = (email, password) =>{
 
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res=>{
      const newUser = res.user;
      newUser.error = '';
      newUser.success = true;
      return newUser;
    })
    .catch((error) => {
      let errorMessage = error.message;
      const newUser = {};
      newUser.error = errorMessage;
      newUser.success = false;
     return newUser;
    });
  
  }

  const updateUserInfo = (name) =>{
    const  user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
    }).then(() =>{
    
    }).catch((error)=> {
     
    });
  }
  

  const verifyEmail = () =>{
      let user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
    
   }).catch(function(error) {
   
   });
  }

  export const resetPassword = (email) =>{
    let auth = firebase.auth();
  
    auth.sendPasswordResetEmail(email).then(function() {
     
    }).catch(function(error) {
    
    });
  }