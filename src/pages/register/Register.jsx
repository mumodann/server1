import React, { useRef, useState } from 'react'
import "./register.scss"

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = ()=>{
        setEmail(emailRef.current.value)
    }
    const handleFinish = ()=>{
        setPassword(passwordRef.current.value)
    }
  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
            <img
            className="logo" 
            src="https://imgs.search.brave.com/im3vXFCGLKyNekT_kUe1uQRCYMxcEHHrc0Y8wIdlZyo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGVjaGRhaWx5LmNv/bS5hdS9iMi93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNS8wMy9O/ZXRmbGl4X0xvZ29f/UHJpbnRfRm91ckNv/bG9yQ01ZSy5wbmc" alt="" />
            <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, Tv shows, and more </h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email or restart your membership.
            </p>{
                !email ? (
                <div className="input">
                    <input type = "email" placeholder="email address" ref={emailRef}/>
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div>
                ) : (
                <form className="input">
                    <input type = "password" placeholder="password" ref={passwordRef}/>
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                </form>
                )}            
        </div>
    </div>
  )
}
