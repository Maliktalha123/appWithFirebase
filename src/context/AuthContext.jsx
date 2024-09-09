import { Spinner } from "@nextui-org/react";
import React, { Children, createContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth/cordova";

export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: true,
    userInfo: {},
  });
  const [loading, setLoading] = useState(true);
  function onAuthChanged(user) {
    if (user) {
      console.log("User => ", user);
      setUser({ isLogin: true, userInfo : {
        email : user?.email,
        photoUrl : user?.photoURL
      } });
    } else {
      setUser({ isLogin: false, userInfo: {} });
    }
    setLoading(false);
  }
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthChanged);
    return subscriber;
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {loading ? (
        <div className="w-full h-96 flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
