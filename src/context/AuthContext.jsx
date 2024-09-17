import { Spinner } from "@nextui-org/react";
import React, { Children, createContext, useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth/cordova";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: true,
    userInfo: {},
  });
  const [loading, setLoading] = useState(true);
  async function onAuthChanged(user) {
    if (user) {
      console.log("User => ", user);
      const docRef = doc(db, "users", user.uid);
      const userInfo = await getDoc(docRef);
      console.log("userInfo->", userInfo.data());
      setUser({
        isLogin: true,
        ...userInfo.data(),
      });


      // setUser({ isLogin: true, userInfo : {
      //   email : user?.email,
      //   photoUrl : user?.photoURL,
      //   userId : user?.uid

      // } });
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
