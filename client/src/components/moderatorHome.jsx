import Home from './home.jsx'
import './home.scss'
import Cards from "./itemCards.jsx";
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom"
const ModeratorHome = ({isMod}) => {
    console.log("test");
    return (
        
            <div className="container">
                

                <div className="navbar">
                    <div className="title"><Link to="/shop">Barbers & Clippers</Link></div>
                    <ul className="shop">
                        {/* <li><Link to="/shop">Shop</Link></li> */}
                        {/* <li><Link to="/barbers">Barbers</Link></li> */}
                    </ul>
                    {isMod && <div className="show-moderator">Mod View</div>}
                    <ul className="icons">
                        {/* <li><Link to="/signIn">sign in</Link></li> */}
                        <li>
                            <input type="text" placeholder="Find our items and barbers" />
                        </li>
                        {/* <li><Link to="/cart">cart</Link></li> */}
                    </ul>
                    <div className="home-background">
                        <div className="current-page">Shop</div>
                        <div className="cards-section">
                            {/* {isMod ? <Cards isMod={true} /> : <Cards />

                            } */}
                        </div>
                    </div>
                </div>
               


            </div>
        

                        )}
export default ModeratorHome