import Editor from "./EditorChemicalStructure";
import React from "react";
import SVGItem from "./SVGItem";

export default function VectorBox({ fun, data }) {
    const ref = React.useRef(null);
    const [degStart, setDegStart] = React.useState(data.rotate || 0);
    function rotate(e, deg) {
        e.preventDefault();
        setDegStart(degStart + deg);
    }
    
    function changeSize(e, size) {
        e.preventDefault();
        const current = ref.current;
        
        const scale = parseFloat(current.style.transform.match(/(\d+\.\d+)|(\d+)/g)) || 1;
        current.style.transform = `scale(${scale+size})`;
    }
    let w = 0, h;
    if(data.name === "text") {       
        const arr = data.value.text.split(/(\$\+{)|(\$-{)|(})/).filter(Boolean);
        const resultArr = [];
        for(let i = 0; i < arr.length; i++) {
            switch(arr[i]) {
                case "$+{": resultArr.push({type: "up", text: arr[++i]});break;
                case "$-{": resultArr.push({type: "bottom", text: arr[++i]});break;
                case "}": break;
                default: resultArr.push({type: "middle", text: arr[i]});
            }
        }
        resultArr.forEach( item => {
            switch(item.type) {
                case "up":
                case "bottom": w += 10 * item.text.length;break;
                default: w += 20 * item.text.length;
            }
        });
        data.w = w;
    }
    if(data.name === "custom") {
        w = +data.data.firstChild.getAttribute("width");
        h = +data.data.firstChild.getAttribute("height");
        data.w = w;
        data.h = h;
    }
    function getStyle() {
        if(data.name === "text") {
            return {width: w + "px"};
        } else if(data.name === "custom") {        
            return {
                width: w + "px",
                height: h + "px"
            }
        }
        return null;
    }
    
    return (
    <div ref={ref} className={(data.active ? "select " : "") + "chemical-structure-block " + data.name} style={getStyle()}>
        <SVGItem fun={fun} data={data} rotate={degStart} />
        <Editor changeSize={changeSize} rotate={rotate} isActiveRotate={data.name === "text" || data.name === "custom" ? true : false} />
    </div>
    );
}