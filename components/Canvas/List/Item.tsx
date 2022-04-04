import React, { useState } from "react";
import useToggle from "../../../hooks/useToggle";
import getId from "../../getId";
import ColorPicker from "../../Picker/ColorPicker";
import { ChemicalOrganicFormula } from "../classes";
import Menu from "./Menu";

interface Props {
    item: ChemicalOrganicFormula;
    formulaList: ChemicalOrganicFormula[];
    setFormulaList: (formula: ChemicalOrganicFormula[]) => void;
}

function Item({item, formulaList, setFormulaList}:Props) {
    const [isMenu, toggleMenu] = useToggle();
    const [color, setColor] = useState(item.color);
    const [name, setName] = useState(item.name);


    const deleteFormula = (id: number) => () => setFormulaList(formulaList.filter(item => item.id !== id));


    const changeName = (e: React.ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value;
        item.name = value;
        setName(value);
        setFormulaList([...formulaList]);
    }


    const changeColor = (color: string) => {
        item.color = color;
        setColor(color);
        setFormulaList([...formulaList]);
    }
    return (
    <div className="canvas__list-item">
        <div className="canvas__list-item-container">
            <div className="canvas__list-item-flex">
                <svg className="canvas__list-item-svg" x="0" y="0" viewBox={"0 0 " + item.getViewBoxSize().width + " " + item.getViewBoxSize().height} >
                    <g fill="none" stroke={item.color} strokeWidth="2" dangerouslySetInnerHTML={{__html: item.getTemplate()}} />
                </svg>
                <div className="canvas__list-item-name">{name ? name : "id – " + item.id}</div>
            </div>
            <div className="canvas__list-item-flex">
                <button className="canvas__list-item-delete" onClick={deleteFormula(item.id)}>
                    <svg className="canvas__list-item-cross" x="0px" y="0px" viewBox="0 0 496.096 496.096">
                        <path d="M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686
                            L13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342
                            c-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31
                            l234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"/>
                    </svg>
                </button>
                <button onClick={toggleMenu}>
                    <svg className="canvas__list-item-dots" viewBox="0 0 16 16" fill="#000" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                </button>
            </div>
        </div>
        <Menu
          isMenu={isMenu}
          color={color}
          name={name}
          type={item.type}
          changeColor={changeColor}
          changeName={changeName} />
    </div>
    );
}

export default Item;