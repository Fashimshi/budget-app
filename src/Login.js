import React, { useState } from "react";
import { signInWithGoogle, logout } from "./firebase";

function Login({ setUser }) {
  const [user, setLocalUser] = useState(null);

  const handleLogin = async () => {
    const user = await signInWithGoogle();
    if (user) {
      setLocalUser(user);
      setUser(user);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
}

export default Login;
