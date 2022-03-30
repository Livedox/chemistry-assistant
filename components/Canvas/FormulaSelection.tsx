import * as React from "react";
import getId from "../getId";
import templates, { ITemplateOrganicFormula } from "./templatesOrganicFormula";

interface Props {
    addOrganicFormula: (template: ITemplateOrganicFormula) => void;
    toggleTextCreator: () => void;
}


export default function FormulaSelection({addOrganicFormula, toggleTextCreator}:Props) {
    return(
        <div className="canvas__formula-selection">
            <div className="canvas__formula-selection-container">
                <div className="canvas__toggler-text-editor" onClick={toggleTextCreator}>T</div>
                {templates.map(item => {
                    return <div className="canvas__create-formula" onClick={(e) => {e.stopPropagation();addOrganicFormula(item)}} key={getId()}>
                        <svg viewBox={`0 0 ${item.viewBox ? item.viewBox.width + " " + item.viewBox.height : "100 100"}`}>
                            <g strokeWidth={2} fill="none" dangerouslySetInnerHTML={{__html: item.svg}} />
                        </svg>
                    </div>
                })}
            </div>
        </div>
    );
}