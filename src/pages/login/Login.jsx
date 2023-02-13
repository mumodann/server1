import React from 'react'
import "./login.scss"

export default function Login() {
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
            <img
            className="logo" 
            src="https://imgs.search.brave.com/im3vXFCGLKyNekT_kUe1uQRCYMxcEHHrc0Y8wIdlZyo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGVjaGRhaWx5LmNv/bS5hdS9iMi93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNS8wMy9O/ZXRmbGl4X0xvZ29f/UHJpbnRfRm91ckNv/bG9yQ01ZSy5wbmc" alt="" />
            </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="email or phone number"/>
                <input type="password" placeholder="password"/>
                <button className="loginButton">Sign In</button>
                <span>New to Netflix ? <b>Sign up now</b> </span>
                <small>
                    This page is protected by google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>
                </small>
            </form>
        </div>
    </div>
  )
}
