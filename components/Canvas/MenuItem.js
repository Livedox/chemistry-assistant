import React from "react";
import SVGItem from "./SVGItem";

export default function MenuItem({ fun, data }) {
    data.isMenu = true;
    return (
        <div className={"menu-item " + data.name}>
            <SVGItem fun={fun} data={data} rotate={data.rotate || 0} />
        </div>
    )
}