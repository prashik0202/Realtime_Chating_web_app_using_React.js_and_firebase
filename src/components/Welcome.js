import React from "react";
import { auth } from "../firebase"; // importing auth
import { GoogleAuthProvider , signInWithRedirect } from "firebase/auth";

import GoogleButton from 'react-google-button'

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to MyChat App</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={200} height={200} />
      <p></p>
      <GoogleButton 
      type="dark"
      onClick={googleSignIn}
      / >
      <p>Made with ❤️</p>
    </main>
  );
};

export default Welcome;
