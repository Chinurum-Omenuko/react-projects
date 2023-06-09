import '.././assets/stylesheets/Navbar.css'
import Burger from '.././assets/images/burger.svg'
import Hamburger from './Hamburger';
import { useState } from 'react';



function Navbar() {
    return(
    <>
        <nav class="flex flex-row justify-between">
            <div class="logo">
                <a href="./index.html">Chinurum Omenuko</a>
            </div>
            <ul>
                <a href="http://">About</a>
                <a href="http://">Projects</a>
                <a href="http://">Contact</a>
            </ul>
            <div className="hamburger-icon">
                <img src={Burger} alt="" srcset="" />
            </div>
        </nav>

        <Navbar />

    </>
    );
}

export default Navbar