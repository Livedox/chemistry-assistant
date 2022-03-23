import React from "react";
import getId from "../getId";
import Item from "./Item";
import { Cell } from "./items";

interface Props {
    cells: Cell[];
    createHint: (e: PointerEvent, data: Cell) => void;
}

function ItemsContainer({cells, createHint}:Props) {
    return (
        <div className="solubility-table__items-container">
            {cells.map(cell => {
                let classAdditional = "";
                if(cell.solubility === "Р") classAdditional = "solubility-table__item_soluble";
                if(cell.solubility === "М") classAdditional = "solubility-table__item_slightly-soluble";
                if(cell.solubility === "Н") classAdditional = "solubility-table__item_insoluble";
                if(cell.solubility === "-") classAdditional = "solubility-table__item_decomposes";
                return (
                    <Item cell={cell} createHint={createHint} />
                );
            })}
       </div>
    )
}

export default ItemsContainer;