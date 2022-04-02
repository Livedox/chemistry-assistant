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
    return(
        <div className="canvas__list">
            <div className="canvas__list-buttons">
                <button className="canvas__list-button" onClick={toggleDownload}>Скачать</button>
                <button className="canvas__list-button" onClick={toggleUpload}>Добавить</button>
            </div>
            <div className="canvas__list-container">
                {formulaList.map(item => {
                    return <Item formulaList={formulaList} item={item} setFormulaList={setFormulaList} key={"f"+item.id} />
                })}
            </div>
        </div>
    );
}

export default FormulaList;