import { useEffect, useRef } from "react";
import { Cell } from "./items";

interface Props {
    cell: Cell;
    createHint: (e: PointerEvent, data: Cell) => void;
}

function Item({cell, createHint}: Props) {
    const itemRef = useRef<HTMLDivElement>(null);

    let classAdditional = "";
    if(cell.solubility === "Р") classAdditional = "solubility-table__item_soluble";
    if(cell.solubility === "М") classAdditional = "solubility-table__item_slightly-soluble";
    if(cell.solubility === "Н") classAdditional = "solubility-table__item_insoluble";
    if(cell.solubility === "-") classAdditional = "solubility-table__item_decomposes";


    useEffect(() => {
        const wraper = (e: PointerEvent) => {
            createHint(e, cell);
        }
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            itemRef.current!.addEventListener("pointerdown", wraper);
        } else {
            itemRef.current!.addEventListener("pointerenter", wraper);
        }
    }, []);
    return(
        <div ref={itemRef} className={"solubility-table__item " + classAdditional}>
            {cell.solubility}
        </div>
    );
}

export default Item;