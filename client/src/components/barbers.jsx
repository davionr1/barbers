import Home from "./home";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom"
import BarbersCards from "./barbersCards";

const Barbers = ({ isMod }) => {
    return (
        <>
            <div className="barbers-container">
                <BarbersCards/>
            </div>
        </>
    )
}
export default Barbers