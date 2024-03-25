import React, { Fragment, useState } from 'react';
import './Navbar.css';

const Navbar = () => {

    const [addCss, setAddCss] = useState({light: true, navBackground: {backgroundColor: "rgba(0, 0, 0, .85)", color: "white"}, logoCss: {}, toggleBtnCss: {backgroundColor: "white"}, title: "Switch to dark Mode", circleCss: {}, sunIconCss: {display: "block", color: "white"}, moonIconCss: {display: "none", color: "white"}});

    const toggleMode = () => {
        if (addCss.light) {
            setAddCss({
                light: false,
                navBackground: {backgroundColor: "white", color: "black"},
                logoCss: {color: "black"},
                toggleBtnCss: {backgroundColor: "black"},
                title: "Switch to light Mode",
                circleCss: {marginLeft: "60%", backgroundColor : "white"}, 
                sunIconCss: {display: "none", color: "black"}, 
                moonIconCss: {display: "block", color: "black"}
            });
            document.body.style.backgroundColor = "rgba(0, 0, 0, .85)";
            document.getElementById("note").style.backgroundColor = "black";
            document.getElementById("note").style.boxShadow = "0 0 1rem rgb(255, 255, 255)";
            document.getElementById("title-input").style.backgroundColor = "black";
            document.getElementById("content-input").style.backgroundColor = "black";
            document.getElementById("title-input").style.color = "white";
            document.getElementById("content-input").style.color = "white";
            document.getElementById("circle").style.boxShadow = "0 0 1rem rgb(255, 255, 255)";
            document.getElementById("circle").style.color = "white";
        } else {
            setAddCss({
                light: true, 
                navBackground: {backgroundColor: "rgba(0, 0, 0, .85)", color: "white"},
                logoCss: {},
                toggleBtnCss: {backgroundColor: "white"},
                title: "Switch to dark Mode",
                circleCss: {}, 
                sunIconCss: {display: "block", color: "white"}, 
                moonIconCss: {display: "none", color: "black"}
            });
            document.body.style.backgroundColor = "white";
            document.getElementById("note").style.backgroundColor = "white";
            document.getElementById("note").style.boxShadow = "0 0 1rem rgb(0, 0, 0, 0.5)";
            document.getElementById("title-input").style.backgroundColor = "white";
            document.getElementById("content-input").style.backgroundColor = "white";
            document.getElementById("title-input").style.color = "black";
            document.getElementById("content-input").style.color = "black";
            document.getElementById("circle").style.boxShadow = "0 0 1rem rgb(0, 0, 0, 0.5)";
            document.getElementById("circle").style.color = "black";
        }
    }

    return (
        <Fragment>
            <nav style={addCss.navBackground}>
                <h1 style={addCss.logoCss}>Notes</h1>
                <div className='toggle-btn' style={addCss.toggleBtnCss} title={addCss.title}>
                    <div className='circle' onClick={toggleMode} style={addCss.circleCss}>
                        <i class="fa-solid fa-sun" style={addCss.sunIconCss}></i>
                        <i class="fa-solid fa-moon" style={addCss.moonIconCss}></i>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;