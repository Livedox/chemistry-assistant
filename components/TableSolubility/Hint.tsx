import { Cell } from "./items";

interface Props {
    active: boolean;
}

function Hint({active}:Props) {
    return (
    <div className={"solubility-table__hint " + (active ? "solubility-table__hint_active" : "")}>
        <div className="solubility-table__hint-container">
            <h3 className="solubility-table__hint-title">LiOH</h3>
            <p className="solubility-table__hint-text">Гидроксид лития</p>
            <p className="solubility-table__hint-color">Цвет: В разработке</p>
        </div>
        
    </div>);
}

export default Hint;