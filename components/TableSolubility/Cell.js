import React from "react";


export default function Cell({ html, sol, st, fun }) {
    let cls;
    switch(sol) {
        case "Р": cls = "soluble";break;
        case "Н": cls = "insoluble";break;
        case "М": cls = "slightly-soluble";break;
        default: cls = "decomposes";
    }

    class A {
        constructor(sol, str) {
            this.sol = sol;
            this.str = str;
        }

        replaceAll = function(search, replace){
            this.str = this.str.split(search).join(replace);
            return this;
        }
    }


    const c = new A(sol, html);

    fun(c);

    return(
        <td className={"cell "+cls} style={st} onMouseOver={(e) => 1}>{ sol }</td>
    )
}