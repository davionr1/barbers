import { useState, useEffect } from "react";
import "./home.scss"
import Cards from "./itemCards.jsx";
import Barbers from "./barbers.jsx";
import SignIn from "./signIn.jsx";
import Cart from "./cart.jsx";
import Shop from "./shop.jsx";
import { BrowserRouter, Routes, Route, NavLink, } from "react-router-dom"
const password = import.meta.env.VITE_PASSWORD

const Home = (className, children, props) => {

    //mimic kinapparel website and have the images fadein on load

    // const IfUserIsMod = (e) => {
    //     const input = e.target.value
    //     if (input === password) {
    //         console.log("is mod");
    //         setIsMod(true)
    //     }
    //     else {
    //         console.log("not mod");
    //         setIsMod(false)
    //     }

    // }
    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     IfUserIsMod(e)
    // }

    return (
        <div>
            <>
                <div className="container">
                    <div className={`navbar ${className}`}>
                        <div className="title">
                            <NavLink to="/shop" className="link">Barbers & Clippers</NavLink>
                        </div>
                        <ul className="shop">
                            <li><NavLink to="/shop" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")} >Shop</NavLink></li>
                            <li><NavLink to="/barbers" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>Barbers</NavLink></li>
                            {/* <li><NavLink to="/shop" id="shop" className="link" >Shop</NavLink></li>
                            <li><NavLink to="/barbers" className="link" id="barbers" >Barbers</NavLink></li> */}
                        </ul>
                        {/* {isMod && <div className="show-moderator">Mod View</div>} */}
                        <ul className="icons">
                            <li><NavLink to="/signIn" className="link" >Sign In</NavLink></li>
                            <li>
                                <input type="text" placeholder="Find our items and barbers" />
                            </li>
                            <li><NavLink to="/cart" className="link" >Cart</NavLink></li>
                        </ul>
                    </div>
                    {/* {<Shop />} */}
                    {/* <div className="home-background">
                        
                        <div className="current-page">Shop</div> 
                         <div className="cards-section"> 
                        
                             {isMod ? <Cards isMod={true} /> : <Cards />}
                        </div>
                        
                    </div> */}
                </div>
            </>
        </div >
    )


}
export default Home 