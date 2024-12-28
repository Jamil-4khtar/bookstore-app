import React from 'react'
import { BiBookHeart, BiBell, BiSolidUserCircle } from "react-icons/bi";
import { IoDiamondSharp } from "react-icons/io5";
import "../styles/Navbar.css"


function Navbar() {
    return (
        <nav>
            <div id='left'>
                <img src={process.env.PUBLIC_URL + "/image.png"} alt="Logo" />
                <p>Kaezen<span>BOOKS</span></p>
            </div>
            <div id='center'>
                <form>
                    <input
                        type='text'
                        placeholder='Search your book'
                    />
                    <button>Search</button>
                </form>
            </div>
            <div id='right'>
                <BiBookHeart />
                <BiBell/>
                <IoDiamondSharp />
                <BiSolidUserCircle/>
            </div>
        </nav>
    )
}

export default Navbar

