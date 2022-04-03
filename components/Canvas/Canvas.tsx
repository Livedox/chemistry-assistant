import React, { MouseEvent, useMemo, useRef, useState } from "react";
import { getNumberId } from "../getId";
import FormulaSelection from "./FormulaSelection";
import { ChemicalOrganicFormula, TextChemicalOrganicFormula, ICoords, ISize, CustomOrganicFormula, PartText } from "./classes";
import moveConstructor, { IMoveConstructorProps } from "./moveConstructor";
import OrganicFormula from "./Formula/OrganicFormula";
import { ITemplateOrganicFormula } from "./templatesOrganicFormula";
import FormulaList from "./List/FormulaList";
import TextCreator from "./TextCreator";
import useToggle from "../../hooks/useToggle";
import Upload from "./UploadAndDownload/Upload";
import Download from "./UploadAndDownload/Download";


export default function Canvas() {
    const [formulaList, setFormulaList] = useState<ChemicalOrganicFormula[]>([]);
    const [isTextCreator, toggleTextCreator] = useToggle();


    const [isDownload, toggleDownload] = useToggle();
    const [isUpload, toggleUpload] = useToggle();

    interface ISelectBlock {
        coords: DOMRect;
        canvSelectBlock: HTMLElement;
        shiftX: number;
        shiftY: number;
    }
    
    interface IMoveSelectBlock {
        shiftX: number;
        shiftY: number;
        left: number;
        top: number;
    }
    
    
    function createSelectBlock(e: React.MouseEvent | TouchEvent): IMoveConstructorProps<ISelectBlock> {
        const props = createProps();
        setStartStyleToSelectBlock(props);
        return props;


        function setStartStyleToSelectBlock(props: IMoveConstructorProps<ISelectBlock> ) {
            props.data.canvSelectBlock.style.left = props.data.shiftX + "px";
            props.data.canvSelectBlock.style.top = props.data.shiftY + "px";
            props.data.canvSelectBlock.style.width = "0px";
            props.data.canvSelectBlock.style.height = "0px";
        }


        function createProps() {
            const canvSelectBlock = document.querySelector(".canvas__select-block")! as HTMLElement;
            const shiftEl = document.querySelector(".canvas__container-organic-formula")! as HTMLElement;
            const coords = shiftEl.getBoundingClientRect();
            const clientX = e.type === "mousedown" ? (e as MouseEvent).clientX : (e as TouchEvent).touches[0].clientX;
            const clientY = e.type === "mousedown" ? (e as MouseEvent).clientY : (e as TouchEvent).touches[0].clientY;
            const shiftX = clientX - coords.left;
            const shiftY = clientY - coords.top;
            return {
                element: shiftEl,
                data: { coords, canvSelectBlock, shiftX, shiftY }
            };
        }   
    }
    
    function moveSelectBlock(e: globalThis.MouseEvent | TouchEvent, props: IMoveConstructorProps<ISelectBlock>) {
        const pageX = e.type === "mousemove" ? (e as globalThis.MouseEvent).pageX : (e as TouchEvent).touches[0].pageX;
        const pageY = e.type === "mousemove" ? (e as globalThis.MouseEvent).pageY : (e as TouchEvent).touches[0].pageY;
        const moveX = pageX - props.data.shiftX - props.data.coords.left;
        const moveY = pageY - props.data.shiftY - props.data.coords.top;

        const left = props.data.shiftX + (moveX < 0 ? moveX : 0);
        const top = props.data.shiftY + (moveY < 0 ? moveY : 0);

        if(Math.abs(moveX) > 20 || Math.abs(moveY) > 20) {
            props.data.canvSelectBlock.classList.add("canvas__select-block_active");
        }
        

        setSize();
        setCoords();

        function setSize() {
            props.data.canvSelectBlock.style.width = Math.abs(moveX) + "px";
            props.data.canvSelectBlock.style.height = Math.abs(moveY) + "px";
        }

        function setCoords() {
            props.data.canvSelectBlock.style.left = left + "px";
            props.data.canvSelectBlock.style.top = top + "px";
        }
    }
    
    function hideOrAddEventSelectBlock(props: IMoveConstructorProps<ISelectBlock>) {   
        const coords = createCoordinatesAndActivateIfIntersection(); 
        const activeOrganicFormulaList: ChemicalOrganicFormula[] = createActiveOrganicFormulaList();

        // At least one element is active
        if(coords.length) {     
            createMoveFunctionForSelectBlock();
        } else {
            deleteActiveClass();
        }

        function createCoordinatesAndActivateIfIntersection() {
            const width = parseFloat(props.data.canvSelectBlock.style.width);
            const height = parseFloat(props.data.canvSelectBlock.style.height);
            const x = parseFloat(props.data.canvSelectBlock.style.left);
            const y = parseFloat(props.data.canvSelectBlock.style.top);

            const coords: (ICoords & ISize)[] = [];
            const newOrganicFormulaList = formulaList.map(item => {
                if(item.checkIntersectionWithRectangle(x, y, width, height)) {
                    coords.push({...item.getPosition(), ...item.getSize()});
                    item.active = true;
                }
                return item;
            })

            setFormulaList(newOrganicFormulaList);
            return coords;
        }
        
        
        function createActiveOrganicFormulaList() {
            const activeOrganicFormulaList: ChemicalOrganicFormula[] = [];
            formulaList.forEach(item => {
                if(item.active) activeOrganicFormulaList.push(item);
            });
            return activeOrganicFormulaList
        }

        function deleteActiveClass() {
            activeOrganicFormulaList.forEach(item => item.active = false);
            setFormulaList([...formulaList]);
            props.data.canvSelectBlock.classList.remove("canvas__select-block_active");
        }

        function createMoveFunctionForSelectBlock() {
            const minMaxCoords = createMinMaxCoords();
            setSizeByElements();      
    
            function createMinMaxCoords() {
                const minMaxCoords = {
                    minX: 100000000,
                    minY: 100000000,
                    maxX: -100000000,
                    maxY: -100000000
                }
                coords.forEach(item => {
                    if(item.x < minMaxCoords.minX) minMaxCoords.minX = item.x;
                    if(item.width + item.x > minMaxCoords.maxX) minMaxCoords.maxX = item.width + item.x;
                    if(item.y < minMaxCoords.minY) minMaxCoords.minY = item.y;
                    if(item.height + item.y > minMaxCoords.maxY) minMaxCoords.maxY = item.height + item.y;
                });
                return minMaxCoords;
            }

            function setSizeByElements() {
                props.data.canvSelectBlock.style.left = minMaxCoords.minX + "px";
                props.data.canvSelectBlock.style.top = minMaxCoords.minY + "px";
                props.data.canvSelectBlock.style.width = minMaxCoords.maxX - minMaxCoords.minX + "px";
                props.data.canvSelectBlock.style.height = minMaxCoords.maxY - minMaxCoords.minY + "px";
            } 
            
            function start(e: MouseEvent | TouchEvent) {
                e.stopPropagation();
                const shiftX = e.type === "mousedown" ? (e as MouseEvent).clientX : (e as TouchEvent).touches[0].clientX;
                const shiftY = e.type === "mousedown" ? (e as MouseEvent).clientY : (e as TouchEvent).touches[0].clientY;
                const left = props.data.canvSelectBlock.getBoundingClientRect().left - shiftX - props.data.coords.left;
                const top = props.data.canvSelectBlock.getBoundingClientRect().top - shiftY - props.data.coords.top;
                return {element: props.data.canvSelectBlock, data: {shiftX, shiftY, left, top}};
            }
    
            function move(e: globalThis.MouseEvent | TouchEvent, props: IMoveConstructorProps<IMoveSelectBlock>) {
                const pageX = e.type === "mousemove" ? (e as globalThis.MouseEvent).pageX : (e as TouchEvent).touches[0].pageX;
                const pageY = e.type === "mousemove" ? (e as globalThis.MouseEvent).pageY : (e as TouchEvent).touches[0].pageY;
                props.element.style.left = pageX + props.data.left + "px";
                props.element.style.top = pageY + props.data.top + "px";
                activeOrganicFormulaList.forEach((item, i) => {
                    item.setPosition(pageX - props.data.shiftX + coords[i].x, pageY - props.data.shiftY + coords[i].y);
                    const organicFormula = document.querySelector(`.canvas__organic-formula.id${item.id}`) as HTMLElement;
                    organicFormula.style.left = item.getPosition().x + "px";
                    organicFormula.style.top = item.getPosition().y + "px";
                });
            }
    
            function end(props: IMoveConstructorProps<IMoveSelectBlock>) {
                props.element.removeEventListener("mousedown", moveFunction);
                deleteActiveClass();
            }
            const moveFunction = moveConstructor<IMoveSelectBlock>(start, move, end);
            props.data.canvSelectBlock.addEventListener("mousedown", moveFunction);
            props.data.canvSelectBlock.addEventListener("touchstart", moveFunction);
        }
    }

    function addOrganicFormula(template: ITemplateOrganicFormula) {
        setFormulaList([...formulaList, new ChemicalOrganicFormula(template.type, template.svg, template.points, template.viewBox)]);
    }

    function addCustomFormula(formula: CustomOrganicFormula) {
        setFormulaList([...formulaList, formula]);
    }

    const addFormulaText = (parts: PartText[]) => setFormulaList(
        [...formulaList, new TextChemicalOrganicFormula(parts)]
    );

    return(
        <>
        <div className="canvas">
            
            <div className="canvas__main-container">
                <FormulaList
                  formulaList={formulaList}
                  setFormulaList={setFormulaList}
                  toggleUpload={toggleUpload}
                  toggleDownload={toggleDownload}/>
                <div className="canvas__container-organic-formula">
                    <div className="canvas__move-block" onTouchStart={moveConstructor<ISelectBlock>(createSelectBlock, moveSelectBlock, hideOrAddEventSelectBlock)} onMouseDown={moveConstructor<ISelectBlock>(createSelectBlock, moveSelectBlock, hideOrAddEventSelectBlock)} />
                    <div className="canvas__select-block" />
                    {formulaList.map(item => {
                        return <OrganicFormula organicFormula={item} formulaList={formulaList} setOrganicFormulaList={setFormulaList} key={item.id} />
                    })}
                </div>
                <FormulaSelection toggleTextCreator={toggleTextCreator} addOrganicFormula={addOrganicFormula} />
            </div>
            <TextCreator isActive={isTextCreator} addFormulaText={addFormulaText} />       
        </div>
        <Download isDownload={isDownload} toggleDownload={toggleDownload} formulaList={formulaList} />
        <Upload isUpload={isUpload} toggleUpload={toggleUpload} addCustomFormula={addCustomFormula} />
        </>
    )
}