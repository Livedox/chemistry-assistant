import React, { ChangeEvent, useState } from "react";
import { ChemicalOrganicFormula, TextChemicalOrganicFormula } from "./classes";
import moveConstructor, { IMoveConstructorProps } from "./moveConstructor";

interface IProps {
    organicFormula: ChemicalOrganicFormula | TextChemicalOrganicFormula;
    organicFormulaList: ChemicalOrganicFormula[];
    setOrganicFormulaList: (value: React.SetStateAction<ChemicalOrganicFormula[]>) => void;
}


export default function OrganicFormula({organicFormula, organicFormulaList, setOrganicFormulaList}:IProps) {
    const [inputResizeValue, setInputResizeValue] = useState("");
    const [inputScaleValue, setInputScaleValue] = useState("");

    interface IMoveProps {
        shiftX: number;
        shiftY: number;
    }

    const moveOrganicFormula = moveConstructor<IMoveProps>(start, move, end);
    function start(e: MouseEvent | globalThis.MouseEvent | React.MouseEvent | TouchEvent) {
        e.preventDefault();
        const clientX = e.type === "mousedown" ? (e as MouseEvent).clientX : (e as TouchEvent).touches[0].clientX;
        const clientY = e.type === "mousedown" ? (e as MouseEvent).clientY : (e as TouchEvent).touches[0].clientY;
        const parent = (e.currentTarget as HTMLElement).parentElement!.getBoundingClientRect();
        const el = e.currentTarget as HTMLElement;
        const shiftX = clientX - el.getBoundingClientRect().left + parent.left;
        const shiftY = clientY - el.getBoundingClientRect().top + parent.top;
        el.classList.add("canvas__organic-formula_moved");
        return { element: el, data: {shiftX, shiftY} }
    }

    function move(e: MouseEvent | TouchEvent, props: IMoveConstructorProps<IMoveProps>) {
        const pageX = e.type === "mousemove" ? (e as MouseEvent).pageX : (e as TouchEvent).touches[0].pageX;
        const pageY = e.type === "mousemove" ? (e as MouseEvent).pageY : (e as TouchEvent).touches[0].pageY;
        organicFormula.setPosition(pageX - props.data.shiftX, pageY - props.data.shiftY);
        props.element.style.left = organicFormula.getPosition().x + "px";
        props.element.style.top = organicFormula.getPosition().y + "px";
    }

    function end(props: IMoveConstructorProps<IMoveProps>) {
        organicFormulaList.forEach(item => {
            if(item.id !== organicFormula.id) {
                const nearestPoint = organicFormula.getCoordinatesToNearestPointOrNull(item.getPosition(), item.getPoints());
                if(!nearestPoint) return;

                organicFormula.toNearestPoint(nearestPoint);
                props.element.style.left = organicFormula.getPosition().x + "px";
                props.element.style.top = organicFormula.getPosition().y + "px";
            }
        }); 

        document.addEventListener("mousedown", removeClass);
        function removeClass(e: MouseEvent) {
            document.removeEventListener("mousedown", removeClass);
            if(!props.element.contains(e.target as HTMLElement)) props.element.classList.remove("canvas__organic-formula_moved");
        }
    }

    function resize(size: number) {
        setInputScaleValue("");      
        setOrganicFormulaList(organicFormulaList.map(item => {
            if(item.id === organicFormula.id) item.resize(size + organicFormula.getScale());
            return item;
        }));
    }

    function turn(turn: number) {
        setInputResizeValue("");
        setOrganicFormulaList(organicFormulaList.map(item => {
            if(item.id === organicFormula.id) item.turn(turn + organicFormula.getRotation());
            return item;
        })); 
    }

    function inputResize(e: ChangeEvent) {
        const val = (e.currentTarget as HTMLInputElement).value;
        const num = parseFloat(val);
        setInputScaleValue(val);
        if(isNaN(num)) {
            return;
        }
        setOrganicFormulaList(organicFormulaList.map(item => {
            if(item.id === organicFormula.id) item.resize(num);
            return item;
        }));
    }

    function inputTurn(e: ChangeEvent) {
        const val = (e.currentTarget as HTMLInputElement).value;
        const num = parseFloat(val);
        setInputResizeValue(val);
        if(isNaN(num)) {
            return;
        }
        setOrganicFormulaList(organicFormulaList.map(item => {
            if(item.id === organicFormula.id) item.turn(num);
            return item;
        }));
    }

    function deleteOrganicFormula(id: number) {
        setOrganicFormulaList(organicFormulaList.filter(item => item.id !== id));
    }

    let organicFormulaClass = "canvas__organic-formula " + "id" + organicFormula.id + " organic-formula ";
    organicFormulaClass += organicFormula.active ? "canvas__organic-formula_active " : "";
    organicFormulaClass += organicFormula.type === "text" ? "canvas__organic-formula_text ": "";
    return(
        <div
            className={organicFormulaClass}
            style={{
                left: organicFormula.getPosition().x + "px",
                top: organicFormula.getPosition().y + "px",
                width: organicFormula.getSize().width + "px",
                height: organicFormula.getSize().height + "px",
            }}
            onTouchStart={moveOrganicFormula}
            onMouseDown={moveOrganicFormula}
            data-id={organicFormula.id}
        >
            <div className="organic-formula__editor" onMouseDown={(e) => e.stopPropagation()}>
                <input placeholder={organicFormula.getRotation() + "°"} className="organic-formula__input" value={inputResizeValue} onChange={inputTurn} />
                <input placeholder={+organicFormula.getScale().toFixed(4) + ""} className="organic-formula__input" value={inputScaleValue} onChange={inputResize}  />
                <div className="organic-formula__sign" onClick={() => turn(-6)}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M4,7L2.5,5.5C3.5,3.5,5.6,2,8,2c3.3,0,6,2.7,6,6c0,3.3-2.7,6-6,6c-1.8,0-3.4-0.8-4.5-2.1L2,13.2
                        C3.4,14.9,5.6,16,8,16c4.4,0,8-3.6,8-8s-3.6-8-8-8C5,0,2.4,1.6,1.1,4.1L0,3l0,4H4z"/>
                    </svg>
                </div>
                <div className="organic-formula__sign" onClick={() => turn(6)}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path>
                    </svg>
                </div>
                <div className="organic-formula__sign" onClick={() => resize(-0.1)}>
                    <svg viewBox="0 0 512 512">
                        <path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"/>
                    </svg>
                </div>
                <div className="organic-formula__sign" onClick={() => resize(0.1)}>
                    <svg x="0px" y="0px" viewBox="0 0 512 512">
                        <path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
                            v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z" />
                    </svg>
                </div>
                <div className="organic-formula__sign" onClick={() => deleteOrganicFormula(organicFormula.id)}>
                    <svg x="0px" y="0px" viewBox="0 0 496.096 496.096">
                        <path d="M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686
                            L13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342
                            c-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31
                            l234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"/>
                    </svg>
                </div>
            </div>
            <svg
                style={{transform: `rotate(${organicFormula.getRotation()}deg)`}}
                x="0" y="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${organicFormula.getViewBoxSize().width} ${organicFormula.getViewBoxSize().height}`}
            >
                <g fill="none" strokeWidth="2" stroke="#000" dangerouslySetInnerHTML={{__html: organicFormula.getTemplate()}} />
            </svg>
        </div>
    );
}