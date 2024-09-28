import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate;
  const loginUser = async (event) => {
    event.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/auths/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      setLoading(false);
    } else {
      alert("something went wrong");
    }
  };

   const logoutUser = () => {
     setAuthTokens(null);
     setUser(null);
     localStorage.removeItem("authTokens");
     setLoading(false);
     navigate("/login");
   };

  const updateToken = async () => {
    if (!authTokens) return;
    let response = await fetch("http://127.0.0.1:8000/auths/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: authTokens?.refresh,
      }),
    });

    let data = await response.json();

   if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      ()=>logoutUser();
    }
    if(loading)
      setLoading(false);
    
  };
// register below
const registerUser = async (event) => {
  event.preventDefault();
  let response = await fetch("http://127.0.0.1:8000/auths/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: event.target.username.value,
      password: event.target.password.value,
      email: event.target.email.value,
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
    }),
  });
};

 

  useEffect(() => {

    if (loading) {
      updateToken(); 
      setLoading(false); 
    }


    if (authTokens) {
      const interval = setInterval(() => {
        updateToken();
      }, 240000); 
      return () => clearInterval(interval); 
    }
  }, [authTokens,loading]); 

  let contextData = {
    loginUser: loginUser,
    logoutUser:logoutUser,
    authTokens: authTokens,
    user: user,
    registerUser:registerUser,

  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
