import React from "react";
import templates, { ITemplateOrganicFormula } from "./templatesOrganicFormula";

interface Props {
    addOrganicFormula: (template: ITemplateOrganicFormula) => void;
}


export default function FormulaSelection({addOrganicFormula}:Props) {
    let id = 0;
    return(
        <div className="canvas__formula-selection">
            <div className="canvas__formula-selection-container">
                {templates.map(item => {
                    return <div className="canvas__create-formula" onClick={(e) => {e.stopPropagation();addOrganicFormula(item)}} key={"asd" + id++}>
                        <svg viewBox={`0 0 ${item.viewBox ? item.viewBox.width + " " + item.viewBox.height : "100 100"}`}>
                            <g strokeWidth={2} fill="none" dangerouslySetInnerHTML={{__html: item.svg}} />
                        </svg>
                    </div>
                })}
            </div>
        </div>
    );
}