import React, { ChangeEvent, useEffect, useState } from "react";
import getId from "../getId";
import { fontCase, PartText } from "./classes";

interface Props {
    isActive: boolean;
    addFormulaText: (parts: PartText[]) => void;
}

function TextCreator({isActive, addFormulaText}: Props) {
    const [activeCase, setActiveCase] = useState<fontCase>("normal");
    const [formulaLabeling, setFormulaLabeling] = useState<Map<number, fontCase>>(new Map());
    const [formula, setFormula] = useState("");


    const setWrapperFormula = (e: ChangeEvent) => {
        const value = (e.currentTarget as HTMLInputElement).value;
        setFormula(value);
        formulaLabeling.forEach((_, key) => {
            if(key > value.length) {
                setActiveCase("normal");
                formulaLabeling.delete(key);
            }
        });
        setFormulaLabeling(formulaLabeling);
    }


    const defocus = (e: React.MouseEvent) => e.preventDefault();
    const setCase = (fontCase: fontCase) => (e: React.MouseEvent) => {
        e.preventDefault();
        setFormulaLabeling(formulaLabeling.set(formula.length, fontCase));
        setActiveCase(fontCase);
    }
    

    const add = () => {
        const parts = getProcessedFormula(formula, formulaLabeling);
        if(parts) addFormulaText(parts);
    }


    function getProcessedFormula(
      formula: string,
      formulaLabeling: Map<number, fontCase>
    ) {
        let copy = formula;
        let fontCase: fontCase = formulaLabeling.get(0) || "normal";
        let temp: PartText[] = [];
        let count = 0;
        formulaLabeling.forEach((value, key) => {
            const text = copy.slice(0, key-count);
            if(text) {
                temp.push({text, fontCase});
                copy = copy.slice(key-count);
                fontCase = value;
                count = key;
            } 
        });
        if(copy) temp.push({text: copy, fontCase});
        return temp;
    }


    const inputDown = (e: React.KeyboardEvent) => {
        const changeCase = (c: fontCase) => {
            e.preventDefault();
            setActiveCase(c);
            setFormulaLabeling(formulaLabeling.set(formula.length, c));
        }
        if(e.shiftKey && e.code === "Digit1") changeCase("normal");
        if(e.shiftKey && e.code === "Digit2") changeCase("up");
        if(e.shiftKey && e.code === "Digit3") changeCase("down");
        if(e.code === "Enter") add();
    }
    return(
        <div className={"text-creator " + (isActive ? "text-creator_active " : "")}>
            <div className="text-creator__buttons">
                <div>
                    {["normal", "up", "down"].map(item =>
                        <button
                            className={"text-creator__button " + (activeCase === item ? "text-creator__button_active":"")}
                            onMouseDown={defocus}
                            onClick={setCase(item as fontCase)}
                            key={getId()}
                        >
                            x
                            {item === "up" ? <sup>2</sup>: ""}
                            {item === "down" ? <sub>2</sub>: ""}
                        </button>
                    )}
                </div>
                <button className="text-creator__submit" onClick={add}>Добавить</button>
            </div>
            <div className="text-creator__input-container">
                <div className="text-creator__input-outer">
                    <input
                        placeholder="Введите формулу"
                        className="text-creator__input"
                        onKeyDown={inputDown}
                        value={formula}
                        onChange={setWrapperFormula}
                    />
                    <div className="text-creator__preview">
                        {getProcessedFormula(formula, formulaLabeling).map(item => {
                            if(item.fontCase === "up") return <sup key={getId()}>{item.text}</sup>
                            if(item.fontCase === "down") return <sub key={getId()}>{item.text}</sub>
                            return <span key={getId()}>{item.text}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextCreator;