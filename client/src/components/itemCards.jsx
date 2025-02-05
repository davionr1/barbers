import './itemCards.scss'
import Home from "./home"
import "./home.scss"
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom"
import { useState } from 'react'


const Cards = ({ isMod }) => (
    <>
        <div className='cards-container'>

            {isMod && (
                <div className="add-stock">
                    <a href>+</a>
                </div>
            )}
            {/* <img src="https://wahlusa.com/media/catalog/product/7/9/79470_lithium_pro_cordless_clipper.pt01.jpg?optimize=medium&fit=bounds&height=700&width=700&canvas=700:700" /> */}
            
            <div className="card">
                <div className="card-background"></div>
                <div className="card-image">
                    <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
                </div>
                <div className="card-description">wahl clippers</div>
                <div className="card-review">5 stars</div>
                <div className="card-price">$76.00</div>
                <div className="card-addCart"><button>Add cart</button></div>
                {isMod && (
                    <div className="card-mod-control">
                        Increase/Decrease Stock
                        <input type='number' min="-999" max="999" />
                    </div>
                )}

            </div>

            <div className="card">
                <div className="card-image">
                    <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
                </div>
                <div className="card-description">wahl clippers</div>
                <div className="card-review">5 stars</div>
                <div className="card-price">$76.00</div>
                <div className="card-addCart"><button>Add cart</button></div>

            </div>
            <div className="card">
                <div className="card-image">
                    <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
                </div>
                <div className="card-description">wahl clippers</div>
                <div className="card-review">5 stars</div>
                <div className="card-price">$76.00</div>
                <div className="card-addCart"><button>Add cart</button></div>

            </div>
            <div className="card">
                <div className="card-image">
                    <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
                </div>
                <div className="card-description">wahl clippers</div>
                <div className="card-review">5 stars</div>
                <div className="card-price">$76.00</div>
                <div className="card-addCart"><button>Add cart</button></div>

            </div>
            <div className="card">
                <div className="card-image">
                    <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
                </div>
                <div className="card-description">wahl clippers</div>
                <div className="card-review">5 stars</div>
                <div className="card-price">$76.00</div>
                <div className="card-addCart"><button>Add cart</button></div>

            </div>
            <div className="card">
                <div className="card-image">
                    <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
                </div>
                <div className="card-description">wahl clippers</div>
                <div className="card-review">5 stars</div>
                <div className="card-price">$76.00</div>
                <div className="card-addCart"><button>Add cart</button></div>

            </div>
            <div className="card">
                <div className="card-image">
                    <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
                </div>
                <div className="card-description">wahl clippers</div>
                <div className="card-review">5 stars</div>
                <div className="card-price">$76.00</div>
                <div className="card-addCart"><button>Add cart</button></div>

            </div>
            <div className="card">
                <div className="card-image">
                    <img src="https://www.wahlpro.com/media/catalog/product/b/a/baldingclipper-hero-3000x3000-min.jpg?optimize=medium&fit=bounds&height=200&width=200&canvas=200:200" />
                </div>
                <div className="card-description">wahl clippers</div>
                <div className="card-review">5 stars</div>
                <div className="card-price">$76.00</div>
                <div className="card-addCart"><button>Add cart</button></div>

            </div>
        </div>
    </>
)
export default Cards
