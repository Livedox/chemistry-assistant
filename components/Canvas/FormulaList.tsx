import getId from "../getId";
import { ChemicalOrganicFormula } from "./classes";

interface Props {
    formulaList: ChemicalOrganicFormula[],
    deleteFormula: (id: number) => void,
    toggleDownload: () => void,
    toggleUpload: () => void,
}

function FormulaList({formulaList, deleteFormula, toggleDownload, toggleUpload}:Props) {
    return(
        <div className="canvas__list">
            <div className="canvas__list-buttons">
                <button className="canvas__list-button" onClick={toggleDownload}>Скачать</button>
                <button className="canvas__list-button" onClick={toggleUpload}>Добавить</button>
            </div>
            <div className="canvas__list-container">
                {formulaList.map(item => {
                    return (
                    <div className="canvas__list-item" key={getId()}>
                        <svg x="0" y="0" viewBox={"0 0 " + item.getViewBoxSize().width + " " + item.getViewBoxSize().height} >
                            <g fill="none" stroke="#000" strokeWidth="2" dangerouslySetInnerHTML={{__html: item.getTemplate()}} />
                        </svg>
                        <div className="canvas__list-item-name">{item.name ? item.name : "id – " + item.id}</div>
                        <div style={{flexGrow: 1}}/>
                        <div className="canvas__list-item-delete" onClick={() => deleteFormula(item.id)}>
                            <svg x="0px" y="0px" viewBox="0 0 496.096 496.096">
                                <path d="M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686
                                    L13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342
                                    c-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31
                                    l234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"/>
                            </svg>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default FormulaList;