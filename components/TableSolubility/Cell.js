import React from "react";


export default function Cell({ html, sol, st, fun }) {
    let cls;
    switch(sol) {
        case "Р": cls = "soluble";break;
        case "Н": cls = "insoluble";break;
        case "М": cls = "slightly-soluble";break;
        default: cls = "decomposes";
    }
    return(
        <td className={"cell "+cls} style={st} onMouseOver={(e) => fun(e, html)}>{ sol }</td>
    )
}