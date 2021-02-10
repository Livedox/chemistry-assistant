import React from "react";
import SVGItem from "./SVGItem";


export default function BarItem({ item, toggleSelect, i, remove }) {
    const [active, setActive] = React.useState(false);
    function toggle(i) {
        toggleSelect(i);
        setActive(!active);
    }
    return(
        <div className={active ? "bar-item active" : "bar-item"} onClick={() => toggle(i)}>
            <div style={{display: "flex"}}>
                <div style={{maxWidth: "40px", marginRight: "10px", overflow:  "hidden"}}>
                    <div style={{height: "20px"}}>
                        <SVGItem data={item} width="auto" />
                    </div>
                </div>
                <div className="bar-name">{item.name}</div>
            </div>
            <div className="bar-item-menu">           
                <div className="bar-delete" onClick={(e) => {e.stopPropagation();remove(i)}}>
                    <svg x="0px" y="0px" viewBox="0 0 496.096 496.096">
                        <path d="M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686
                            L13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342
                            c-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31
                            l234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}