import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const tokenExpiration = localStorage.getItem('tokenExpiration');
      const currentTime = Date.now();

      if (currentTime < tokenExpiration) {
        // Token is valid, set token and loggedIn state
        setToken(storedToken);
        setIsLoggedIn(true);
      } else {
        // Token expired, clean up
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiration');
        setToken(null);
        setIsLoggedIn(false);
      }
    }
  }, []); // Runs once on mount

  // Log the current token whenever it changes (for debugging purposes)
  useEffect(() => {
    console.log('Current token:', token);
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      const tokenExpiration = Date.now() + 3 * 60 * 60 * 1000; // 3 hours
      localStorage.setItem('token', data.token);
      localStorage.setItem('tokenExpiration', tokenExpiration);
      setToken(data.token);
      setIsLoggedIn(true);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };
  
  const logout = async () => {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
      });
      setIsLoggedIn(false);
      setToken(null);
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };