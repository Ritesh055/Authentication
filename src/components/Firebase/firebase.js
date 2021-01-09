import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA1QuixAdlhcQvFFASjXj49PcG3SgPmV8s",
  authDomain: "my-react-firebase-app-38559.firebaseapp.com",
  projectId: "my-react-firebase-app-38559",
  storageBucket: "my-react-firebase-app-38559.appspot.com",
  messagingSenderId: "334736610790",
  appId: "1:334736610790:web:89539c74cc7271d2f67227",
  measurementId: "G-DNGTDRQ7XB"
};

  class Firebase{
    constructor(){
      app.initializeApp(config);
      this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailandPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
    
    doSignOut = () => this.auth.signOut();
    
    doPasswordReset = email =>this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
       this.auth.currentUser.updatePassword(password);
  }

  export default Firebase;