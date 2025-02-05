import { useState, useEffect } from "react";
import "./home.scss"
import "./shop.scss"
import Cards from "./itemCards.jsx";
import Barbers from "./barbers.jsx";
import SignIn from "./signIn.jsx";
import Cart from "./cart.jsx";
import { Link } from 'react-router-dom';

const Shop = ({isMod}) => (
    <>
        <div className="shop-background">
            {/* <div className="current-page">Shop</div> */}
            <div className="cards-section">
                <Cards />
            </div>
        </div>
    </>
)

export default Shop