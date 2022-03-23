import React from "react";
import getId from "../getId";
import { Cell } from "./items";

interface Props {
    cells: Cell[];
    createHint: (e: React.PointerEvent, data: Cell) => void;
}

function ItemsContainer({cells, createHint}:Props) {
    const wrapper = (e: React.PointerEvent, data: Cell) => {
        const target = e.target as HTMLElement;
        function mobile() {
            document.body.removeEventListener("pointerdown", mobile);
            target.classList.remove("solubility-table__item_active");
        }
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            target.classList.add("solubility-table__item_active");
            document.body.addEventListener("pointerdown", mobile);
        }
        createHint(e, data);
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
                      onPointerEnter={(e: React.PointerEvent) => wrapper(e, cell)}>
                        {cell.solubility}
                    </div>
                );
            })}
       </div>
    )
}

export default ItemsContainer;