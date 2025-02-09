import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthenticationContext = createContext(null);
const AuthProvider = (props) => {
  const { routes } = props || {};
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const handleRegister = (email, password) => {
    // setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const handleUpdateProfile = (name,photo) =>{
    setIsLoading(true);
    return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
  }

  const handleLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleLoginWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setIsLoading(false);

    return () => {
      unSubscribe();
    };
  });

  const authenticationData = {
    handleRegister,
    handleLogin,
    handleUpdateProfile,
    handleLoginWithGoogle,
    logOut,
    user,
    setUser,
    isLoading,
  };

  return (
    <AuthenticationContext.Provider value={authenticationData}>
      {routes}
    </AuthenticationContext.Provider>
  );
};

export default AuthProvider;
