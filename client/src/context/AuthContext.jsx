import { useState, createContext, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth.js";
import Cookies from 'js-cookie'

export const AuthContext = createContext();

export const useAuth = () => {

    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])

    const signup = async (userData) => {
        try {
            const res = await registerRequest(userData);
            setUser(res.data);
            setAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data);
        }
    };

    const signin = async (userData) =>{
        try {
            const res = await loginRequest(userData);
            setUser(res.data)
            setAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    useEffect(()=>{

        if(errors.length>0){
            const timer = setTimeout(()=>{
                setErrors([])
            },5000)

            return () => clearTimeout(timer)
        }

    },[errors])


    useEffect(()=>{
        async function checkLogin (){
            const cookies = Cookies.get();

        
            if(!cookies.token) {
                setAuthenticated(false)
                return setUser(null)   
            }

            try {
                const res = await verifyTokenRequest(cookies.token)
                if(!res.data) setAuthenticated(false)

                setAuthenticated(true)
                setUser(res.data) 
            } catch (error) {
                setAuthenticated(false)
                setUser(null)
            }
            
            
        }
        checkLogin()

    }, [])


    return (
        <AuthContext.Provider value={{ signup, signin ,user, isAuthenticated, errors}}>
            {children}
        </AuthContext.Provider>
    );
};
