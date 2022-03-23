import React from "react";
import getId from "../getId";
import { Cell } from "./items";

interface Props {
    cells: Cell[];
    createHint: (e: React.PointerEvent, data: Cell) => void;
}

let tempItem: HTMLElement | null = null;
function ItemsContainer({cells, createHint}:Props) {
    const onTouchActive = (e: React.TouchEvent) => {    
        if(tempItem) {
            tempItem.classList.remove("solubility-table__item_active");
            tempItem.removeEventListener("touchend", touchEnd);
        }
        tempItem = e.target as HTMLElement;
        tempItem.addEventListener("touchend", touchEnd);
        function touchEnd(e: TouchEvent) {
            tempItem!.classList.add("solubility-table__item_active");
        }
    }
    return (
        <div className="solubility-table__items-container">
            {cells.map(cell => {
                let classAdditional = "";
                if(cell.solubility === "Р") classAdditional = "solubility-table__item_soluble";
                if(cell.solubility === "М") classAdditional = "solubility-table__item_slightly-soluble";
                if(cell.solubility === "Н") classAdditional = "solubility-table__item_insoluble";
                if(cell.solubility === "-") classAdditional = "solubility-table__item_decomposes";
                return (
                    <div
                      className={"solubility-table__item " + classAdditional}
                      key={getId()}
                      onPointerEnter={(e: React.PointerEvent) => createHint(e, cell)}
                      onTouchStart={onTouchActive}>
                        {cell.solubility}
                    </div>
                );
            })}
       </div>
    )
}

export default ItemsContainer;