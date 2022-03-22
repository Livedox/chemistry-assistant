import { Cell } from "./items";

interface Props {
    active: boolean;
    data: Cell;
}

function Hint({active, data}:Props) {
    return (
    <div className="solubility-table__hint">
        {data.formula}
    </div>);
}

export default Hint;