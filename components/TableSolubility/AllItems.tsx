import React from "react";
import getId from "../getId";
import { Cell } from "./items";
import ItemsContainer from "./ItemsContainer";

interface Props {
    items: Cell[][];
    createHint: (e: React.PointerEvent | React.MouseEvent, data: Cell) => void;
}

function AllItems({items, createHint}: Props) {
    return(
        <>
            {items.map(cells => {
                return <ItemsContainer createHint={createHint} cells={cells} key={getId()} />
            })}
        </>);
}

export default React.memo(AllItems);