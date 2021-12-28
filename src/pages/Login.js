import React from 'react'
import {auth, provider} from '../firebase/config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = ({setIsAuth}) => {

    let navigate = useNavigate()

    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider) 
          localStorage.setItem('isAuth', true);  
            setIsAuth(true)
            navigate('/')
    }
    



    return (
        <div className="loginPage" >
           <p>Sign in with Google to continue</p> 
           <button
           onClick={signInWithGoogle} 
           className="login-with-google-btn">
               Sign in with Google
           </button>
        </div>
    )
    }

export default Login
