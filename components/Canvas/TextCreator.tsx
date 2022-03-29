import { ChangeEvent, useState } from "react";
import getId from "../getId";

interface Props {
    isActive: boolean;
    addFormulaText: (text: string) => void;
}

type fontCase = "up" | "normal" | "down";

interface PartText {
    fontCase: fontCase;
    text: string;
}

function TextCreator({isActive, addFormulaText}: Props) {
    const [formulaLabeling, setFormulaLabeling] = useState<Map<number, fontCase>>(new Map());
    const [formula, setFormula] = useState("");


    const setWrapperFormula = (e: ChangeEvent) => {
        const value = (e.currentTarget as HTMLInputElement).value;
        setFormula(value);
        formulaLabeling.forEach((_, key) => {
            if(key > value.length) formulaLabeling.delete(key);
        });
        setFormulaLabeling(formulaLabeling);
        console.log(formulaLabeling);
    }


    const setCase = (fontCase: fontCase) => () => {
        setFormulaLabeling(formulaLabeling.set(formula.length, fontCase));
    }
    

    const add = () => {
        if("formula") addFormulaText("formula");
    }


    function getProcessedFormula(formula: string, formulaLabeling: Map<number, fontCase>) {
        let copy = formula;
        let fontCase: fontCase = "normal";
        let temp: PartText[] = [];
        let count = 0;
        formulaLabeling.forEach((value, key) => {
            temp.push({text: copy.slice(0, key-count), fontCase});
            copy = copy.slice(key-count, copy.length);
            console.log(copy);
            fontCase = value;
            count += key;
        });
        temp.push({text: copy, fontCase});
        return temp;
    }
    return(
        <div className={"text-creator " + (isActive ? "text-creator_active " : "")}>
            <div className="text-creator__container">
                <div className="text-creator__inner">
                    <div className="text-creator__buttons">
                        <button className="text-creator__button" onClick={setCase("normal")}>Стандартный регистр</button>
                        <button className="text-creator__button" onClick={setCase("up")}>Верхний регистр</button>
                        <button className="text-creator__button" onClick={setCase("down")}>Нижний регистр</button>
                        
                    </div>
                    <div className="text-creator__input-container">
                        <div className="text-creator__">
                            <input
                                placeholder="Введите формулу"
                                className="text-creator__input"
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
                        <input type="submit" value="Создать" onClick={add} className="text-creator__submit" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextCreator;