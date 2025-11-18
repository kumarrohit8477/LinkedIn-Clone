import React from "react";
import "./LoginPage.css";
import Navbar from "../components/Navbar";

const LoginPage = () => {
   return (
      <>
         <Navbar />
         <div className="login-container">
            <div className="login-box">
               <h1>Sign in</h1>
               <p>Stay updated on your professional world</p>

               <form className="login-form">
                  <input type="email" placeholder="Email or Phone" required />
                  <input type="password" placeholder="Password" required />

                  <a href="#" className="forgot-link">Forgot password?</a>

                  <button type="submit" className="signin-btn">Sign in</button>
               </form>

               <div className="or-divider">
                  <span>or</span>
               </div>

               <button className="google-btn">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
                  Sign in with Google
               </button>

               <p className="join-now-text">
                  New to LinkedIn? <a href="#">Join now</a>
               </p>
            </div>

            <div className="login-illustration">
               <img
                  src="https://static.licdn.com/aero-v1/sc/h/dkfub4sc7jgzg3o31flfr91rv"
                  alt="LinkedIn Illustration"
               />
            </div>
         </div>
      </>
   );
};

export default LoginPage;
