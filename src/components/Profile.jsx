import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);

  console.log("User ...........",user)

  return <div>This is profile</div>;
};

export default Profile;
