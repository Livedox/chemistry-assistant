import React, { ChangeEvent, useState } from "react";
import { ChemicalOrganicFormula, TextChemicalOrganicFormula } from "../classes";
import Item from "../List/Item";
import moveConstructor, { IMoveConstructorProps } from "../moveConstructor";
import Editor from "./Editor";

interface IProps {
    organicFormula: ChemicalOrganicFormula;
    organicFormulaList: ChemicalOrganicFormula[];
    setOrganicFormulaList: (value: React.SetStateAction<ChemicalOrganicFormula[]>) => void;
}


export default function OrganicFormula({organicFormula, organicFormulaList, setOrganicFormulaList}:IProps) {
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
            <Editor setFormulaList={setOrganicFormulaList} formulaList={organicFormulaList} item={organicFormula} />
            <svg
                style={{transform: `rotate(${organicFormula.angle}deg)`}}
                x="0" y="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${organicFormula.getViewBoxSize().width} ${organicFormula.getViewBoxSize().height}`}
            >
                <g fill="none" strokeWidth="2" stroke={organicFormula.color} dangerouslySetInnerHTML={{__html: organicFormula.getTemplate()}} />
            </svg>
        </div>
    );
}