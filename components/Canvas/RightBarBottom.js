import React from "react";
import BarItem from "./BarItem";

export default function RightBarHead({ items, toggleSelect, remove }) {
    return (
        <div id="right-bar-bottom">
            {items.map( (item, i) => {
                return (<BarItem item={item} toggleSelect={toggleSelect} i={i} remove={remove} key={item.id + "bar"} />);
            })}
        </div> 
    )
}