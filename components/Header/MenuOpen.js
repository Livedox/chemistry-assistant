import React from "react";

export default function MenuOpen(props) {
    const [menuIconClass, setMenuIconClass] = React.useState("");

    function toggleMenu() {
        setMenuIconClass(menuIconClass ? "" : "menuexpanded");
        props.onChange();
    }

    return(
        <svg id="menu-icon" viewBox="0 0 900 900" onClick={toggleMenu} className={menuIconClass} >
            <g id="dashes">
                <path className="menu-icon-dash" id="dash-bottom" d="M145 609l609 0c74,0 74,111 0,111l-609 0c-74,0 -74,-111 0,-111z" />
                <path className="menu-icon-dash" id="dash-middle" d="M146 394c203,0 406,0 609,0 74,0 74,111 0,111 -203,0 -406,0 -609,0 -74,0 -74,-111 0,-111z" />
                <path className="menu-icon-dash" id="dash-top" d="M146 179l609 0c74,0 74,111 0,111l-609 0c-74,0 -74,-111 0,-111z" />
            </g>
        </svg>    
    );
}