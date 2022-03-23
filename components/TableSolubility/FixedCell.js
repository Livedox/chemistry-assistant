import React from "react";

export default function HeaderCell({ el, sup, st }) {
    return(
        <th className="fixed-cell" style={st}>{ el }<sup>{ sup }</sup></th>
    )
}