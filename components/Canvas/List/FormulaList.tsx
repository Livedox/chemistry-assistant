import useToggle from "../../../hooks/useToggle";
import getId from "../../getId";
import { ChemicalOrganicFormula } from "../classes";
import Item from "./Item";

interface Props {
    formulaList: ChemicalOrganicFormula[],
    setFormulaList: (formula: ChemicalOrganicFormula[]) => void,
    toggleDownload: () => void,
    toggleUpload: () => void,
}

function FormulaList({formulaList, setFormulaList, toggleDownload, toggleUpload}:Props) {
    const [isActive, toggleActive] = useToggle();
    const toggleDownloadWrapper = () => {
        if(formulaList.length) toggleDownload();
    }
    return(
        <div className={"canvas__list " + (isActive ? "canvas__list_active":"")}>
            <div className="canvas__list-buttons">
                <button className="canvas__list-button" onClick={toggleDownloadWrapper}>Скачать</button>
                <button className="canvas__list-button" onClick={toggleUpload}>Добавить</button>
            </div>
            <div className="canvas__list-container">
                {formulaList.map(item => {
                    return <Item formulaList={formulaList} item={item} setFormulaList={setFormulaList} key={"f"+item.id} />
                })}
            </div>
            <button
              className={"canvas__list-toggle " + (isActive ? "canvas__list-toggle_active":"")}
              onClick={toggleActive}>
                <span>&#10095;</span>
            </button>
        </div>
    );
}

export default FormulaList;