import drawVector from "./drawVector";
import React from "react";

export default function SVGItem({ fun, data, rotate }) {
    let h, w;
    if(data.name === "text") {
        w = data.w;
        h = 30;           
    } else if(data.name === "custom") {
        w = data.w;
        h = data.h;
    } else {
        data.size = data.size || {};
        w = data.size.w || 100;
        h = data.size.h || 100;
    }
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" class="chemical-structure">
        <g transform="rotate(${rotate || 0}, ${w/2}, ${h/2})" style="stroke:black;stroke-width:2;fill:none">
            ${data.name !== "custom" ? drawVector[data.name](data) : data.data.firstChild.innerHTML}
        </g> 
    </svg>`
    return(<div dangerouslySetInnerHTML={{__html: svg}} onMouseDown={fun} onTouchStart={!data.isMenu ? fun : null} style={{width:"100%",height:"100%"}} />);
}