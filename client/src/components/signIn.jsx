import "./home.scss"
import Home from "./home";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom"
import "./signIn.scss"

const SignIn = ({ isMod }) => (
    <>
        <Home className="navbar"/>
        <div className="signIn-form-container">
            <div className="signIn-form">
                <div className="signIn-label">Sign In</div>
                <div className="email"> Email:
                    <input className="input-email"></input>
                </div>
                <div className="password"> Password:
                    <input className="input-password"></input>
                </div>
                <div className="signIn-button"><button>Sign in</button>

                </div>

                <div className="create-account"><button>Create Account</button>

                </div>
            </div>
        </div>
    </>
)
export default SignIn