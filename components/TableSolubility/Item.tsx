import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Cell } from "./items";

interface Props {
    cell: Cell;
    createHint: (e: React.PointerEvent | React.MouseEvent, data: Cell) => void;
}

function Item({cell, createHint}: Props) {
    const [isMobile, setMobile] = useState(false);

    let classAdditional = "";
    if(cell.solubility === "Р") classAdditional = "solubility-table__item_soluble";
    if(cell.solubility === "М") classAdditional = "solubility-table__item_slightly-soluble";
    if(cell.solubility === "Н") classAdditional = "solubility-table__item_insoluble";
    if(cell.solubility === "-") classAdditional = "solubility-table__item_decomposes";

    const wrapper = (e: React.PointerEvent | React.MouseEvent) => {
        createHint(e, cell);
    }
    let tempItem: HTMLDivElement | null = null;
    const wrapperMobile = (e: React.PointerEvent | React.MouseEvent) => {
        if(tempItem) tempItem.classList.remove("solubility-table__item_active");
        tempItem = e.target as HTMLDivElement;
        tempItem.classList.add("solubility-table__item_active");
        console.log(tempItem);
        createHint(e, cell);
    }

    useEffect(() => {
        setMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));
    });
    return(
        <div
          className={"solubility-table__item " + classAdditional}
          onPointerEnter={isMobile ? undefined : wrapper}
          onClick={isMobile ? wrapperMobile : undefined}>
            {cell.solubility}
        </div>
    );
}

export default Item;