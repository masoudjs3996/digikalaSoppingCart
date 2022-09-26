import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";


const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  // in here we say when component did mount get item from localstorage and set in our state
  // this welp us after then load we hav data  
  useEffect(() =>{
    const userData = JSON.parse(localStorage.getItem("authState" )) || false;
    setAuth(userData)
  },[])

  // in here we add data in local storage and this use effect most after then top useeffect
  useEffect(() =>{
    const data = JSON.stringify(auth)
    localStorage.setItem("authState",data)
  },[auth])
  return (
    <>
      <AuthContext.Provider value={auth}>
        <AuthContextDispatcher.Provider value={setAuth}>
          {children}
        </AuthContextDispatcher.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;

// every were we want access to the this state we call this function 
export const useAuth = () => useContext(AuthContext)
// evrey were we want to set state call this function 
export const useAuthActions = () => useContext(AuthContextDispatcher)