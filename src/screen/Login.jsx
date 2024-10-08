import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleSigninWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("Token =>", token);
        const user = result.user;
        console.log("User =>", user);
        Navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const handleSigninWithEmailAndPassword = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...
        Navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="my-10">
      <form className="flex flex-col items-center">
        <Input
          isRequired
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          label="Email"
          size="lg"
          defaultValue="junior@nextui.org"
          className="w-1.5/2 sm:w-2/3 py-5 self-center"
        />
        <Input
          isRequired
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          label="Password"
          size="lg"
          defaultValue="junior@nextui.org"
          className="w-1.5/2 sm:w-2/3 py-5 self-center"
        />
        <Button
          color="primary"
          className="w-1/2"
          onClick={handleSigninWithEmailAndPassword}
        >
          Log In
        </Button>
        <h2>or</h2>
        <Button
          color="primary"
          className="w-1/2"
          onClick={handleSigninWithGoogle}
        >
          Sign in with Google
        </Button>
        <Link to="/signup" className="my-2">
          <span className="text-center text-blue-700 ">
            I have not an account
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
