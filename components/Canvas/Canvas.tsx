import React, { MouseEvent, useRef, useState } from "react";
import { getNumberId } from "../getId";
import AddOrganicFormulaBlock from "./AddOrganicFormulaBlock";
import { ChemicalOrganicFormula, TextChemicalOrganicFormula, ICoords, ISize, CustomChemicalOrganicFormula } from "./classes";
import moveConstructor, { IMoveConstructorProps } from "./moveConstructor";
import OrganicFormula from "./OrganicFormula";
import { ITemplateOrganicFormula } from "./templatesOrganicFormula";

export default function Canvas() {
    let id = 0;
    const [organicFormulaList, setOrganicFormulaList] = useState<ChemicalOrganicFormula[]>([]);
    const [value, setValue] = useState("");
    const [openModal, setModal] = useState(false);
    
    const uploadFileRef = useRef(null);

    const [previewSVG, setPreviewSVG] = useState("Ничего нет");
    const [openDownloadModal, setOpenDownloadModal] = useState(false);
    const [openUploadModal, setOpenUploadModal] = useState(false);
    const [inputFileMessage, setInputFileMessage] = useState("");
    const [downloadSetting, setDownloadSetting] = useState({
        name: "",
        type: "svg",
        width: 100,
        height: 100,
        topSVG: "",
        rawSVG: "",
        viewBoxWidth: 100,
        viewBoxHeight: 100,
    });

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
            const el = e.currentTarget as HTMLElement;
            const coords = el.getBoundingClientRect();
            const clientX = e.type === "mousedown" ? (e as MouseEvent).clientX : (e as TouchEvent).touches[0].clientX;
            const clientY = e.type === "mousedown" ? (e as MouseEvent).clientY : (e as TouchEvent).touches[0].clientY;
            const shiftX = clientX - el.getBoundingClientRect().left;
            const shiftY = clientY - el.getBoundingClientRect().top;
            return {
                element: el,
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
            const newOrganicFormulaList = organicFormulaList.map(item => {
                if(item.checkIntersectionWithRectangle(x, y, width, height)) {
                    coords.push({...item.getPosition(), ...item.getSize()});
                    item.active = true;
                }
                return item;
            })

            setOrganicFormulaList(newOrganicFormulaList);
            return coords;
        }
        
        
        function createActiveOrganicFormulaList() {
            const activeOrganicFormulaList: ChemicalOrganicFormula[] = [];
            organicFormulaList.forEach(item => {
                if(item.active) activeOrganicFormulaList.push(item);
            });
            return activeOrganicFormulaList
        }

        function deleteActiveClass() {
            activeOrganicFormulaList.forEach(item => item.active = false);
            setOrganicFormulaList([...organicFormulaList]);
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
        setOrganicFormulaList([...organicFormulaList, new ChemicalOrganicFormula(getNumberId(), template.type, template.svg, template.points, template.viewBox)]);
    }

    function deleteOrganicFormula(id: number) {
        setOrganicFormulaList(organicFormulaList.filter(item => item.id !== id));
    }

    function addOrganicFormulaText() {
        setOrganicFormulaList([...organicFormulaList, new TextChemicalOrganicFormula(getNumberId(), value)]);
        setValue("");
    }

    function changeInputFileMessage() {
        const input = uploadFileRef!.current! as HTMLInputElement;
        if(!input.files) return;
        if(!input.files.length) return;
        const file = input.files[0];
        setInputFileMessage(file.name);
    }

    function openModalAndCreatePreview() {
        if(!organicFormulaList.length) return;

        const points: number[][] = [];
        const coords = getMinMaxCoords();
        const width = coords.maxX-coords.minX;
        const height = coords.maxY-coords.minY;
        const rawSVG = getMainSVG();
        const topSVG = `<svg class="CA_SVG" points="${points.join(" ")}" `+
                       `version="1.1" xmlns="http://www.w3.org/2000/svg" `+
                       `xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" `+
                       `stroke-width="2" stroke="#000" x="0" y="0" `+
                       `viewBox="0 0 ${width} ${height}" `;
        const previewSVG = topSVG + `width="${width}" height="${height}">`+rawSVG;

        setPreviewSVG(previewSVG);
        setOpenDownloadModal(true);
        setDownloadSetting({...downloadSetting, width, height, viewBoxWidth:width, viewBoxHeight: height, topSVG ,rawSVG});


        function getMinMaxCoords() {
            const coords = {
                minX: 100000,
                minY: 100000,
                maxX: -1000000,
                maxY: -1000000
            }
            organicFormulaList.forEach(item => {
                const position = item.getPosition();
                const size = item.getSize();

                if(item.type === "text" || item.type === "custom") {
                    if(item.size.width > item.size.height) {
                        item.size.height = item.size.width;
                    } else {
                        item.size.width = item.size.height;
                    }
                }

                if(coords.minX > position.x) coords.minX = position.x;
                if(coords.minY > position.y) coords.minY = position.y;
                if(coords.maxX < position.x + size.width) coords.maxX = position.x+ size.width;
                if(coords.maxY < position.y + size.height) coords.maxY = position.y + size.height;
            })

            return coords;
        }

        function getMainSVG() {
            const uniqId = (new Date()).getTime().toString();
            let mainSVG = `<mask id="сlip${uniqId}"><rect x="0" y="0" width="100%" height="100%" fill="#fff" />`;
            let custom = "";
            let mask = "";
            let svg = "";
            let text = "";
            organicFormulaList.forEach(item => {
                const x = +(item.getPosition().x - coords.minX).toFixed(5);
                const y = +(item.getPosition().y - coords.minY).toFixed(5);
                const widthViewBox = item.getViewBoxSize().width;
                const heightViewBox = item.getViewBoxSize().height;
                const width = item.getSize().width;
                const height = item.getSize().height;
                if(item.type === "text") {
                    mask += `<rect x="${x}" y="${y}" width="${width}" height="22" fill="#000" stroke-width="0" rx="5" ry="5"></rect>`;
                    text += `<svg transform="rotate(${item.getRotation()} ${x+width/2} ${y+height/2})" x="${x}" y="${y}"  viewBox="0 0 ${widthViewBox} ${heightViewBox}" width="${width}" height="${height}">${item.getRawTemplate()}</svg>`;
                } else if(item.type === "custom") {
                    custom += `<svg transform="rotate(${item.getRotation()} ${x+width/2} ${y+height/2})" x="${x}" y="${y}"  viewBox="0 0 ${widthViewBox} ${heightViewBox}" width="${width}" height="${height}">${item.getRawTemplate()}</svg>`;
                } else {
                    svg += `<svg transform="rotate(${item.getRotation()} ${x+width/2} ${y+height/2})" x="${x}" y="${y}"  viewBox="0 0 ${widthViewBox} ${heightViewBox}" width="${width}" height="${height}">${item.getRawTemplate()}</svg>`;
                }
                item.getPoints().forEach(itemPoint => {
                    if(points.every(point => {
                        return itemPoint[0]+x !== point[0] || itemPoint[1]+y !== point[1];
                    })) {
                        points.push([itemPoint[0]+x, itemPoint[1]+y]);
                    }
                });
            })
            mainSVG += `${mask}</mask><svg>${text}</svg>${custom}<svg mask="url(#сlip${uniqId})">${svg}</svg></svg>`;
            return mainSVG;
        }
    }

    function download() {
        try{
            const width = downloadSetting.width;
            const height = downloadSetting.height;
            const finaleSVG = downloadSetting.topSVG+`width="${width}" height="${height}">`+downloadSetting.rawSVG;
            if(downloadSetting.type === "svg") {
                downloadSVG();
            } else {
                downloadPNG();
            }
            
            function downloadSVG() {
                downloadFile("svg", window.URL.createObjectURL(new Blob([finaleSVG])));
            }

            function downloadPNG() {
                const image = new Image();
                image.src = "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent(finaleSVG)));
                image.onload = function() {
                    const canvas = document.createElement("canvas");
                    canvas.width = image.width;
                    canvas.height = image.height;
                    const context = canvas.getContext("2d");
                    context!.drawImage(image, 0, 0);
                
                    downloadFile("png", canvas.toDataURL("image/png"));
                }
            }

            function downloadFile(type: "svg" | "png", url: string) {
                const a = document.createElement("a");
                a.download = (downloadSetting.name || "formula") + "." + type;
                a.href = url;
                document.body.appendChild(a);
                a.click();
                a.remove();
            }
        } catch(e) {
            alert("Ошибка загрузки (Загрузка в IE не работает, обновите браузер)" + e);
        }  
    }

    function upload() {
        function processSvgAndAddFormula(file: File) {
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function() {
                const result = reader.result as string;

                const widthMatch = result.match(/width="(\d*.\d+)"/);
                const width = widthMatch ? +widthMatch[1] : 100;

                const heightMatch = result.match(/height="(\d*.\d+)"/);
                const height = heightMatch ? +heightMatch[1] : 100;

                const pointsMatch = result.match(/points="(.*?)"/);
                const points: number[][] = [];
                if(result.includes("CA_SVG") && pointsMatch) {
                    pointsMatch[1].split(" ").forEach(item => {
                        const point = item.split(",");
                        points.push([+point[0], +point[1]]);
                    })
                }

                setOrganicFormulaList([
                    ...organicFormulaList,
                    new CustomChemicalOrganicFormula(getNumberId(), result, points, {width, height}, file.name)
                ]);
            }
        }
        function processImgAndAddFormula(file: File) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function() {
                const img = new Image();
                img.src = reader.result as string;
                img.onload = function () {
                    const template = `<svg><image width="100%" height="100%" xlink:href="${reader.result}"></image></svg>`;
                    const width = img.width < 400 ? img.width : 400;
                    const height = img.height < 400 ? img.height : 400;
                    setOrganicFormulaList([
                        ...organicFormulaList,
                        new CustomChemicalOrganicFormula(getNumberId(), template, [], {width, height}, file.name)
                    ]);
                };              
            }  
        }
        const input = uploadFileRef!.current! as HTMLInputElement;
        if(!input.files) return;
        if(!input.files.length) return;


        const file = input.files[0];
        if(file.type === "image/svg+xml") {
            processSvgAndAddFormula(file);
        } else {
            processImgAndAddFormula(file);
        }
    }
    return(
        <>
        <div className="canvas">
            <div className="canvas__select-block" />
            <div className="canvas__main-container">
                <div className="canvas__container-organic-formula">
                    <div className="canvas__move-block" onTouchStart={moveConstructor<ISelectBlock>(createSelectBlock, moveSelectBlock, hideOrAddEventSelectBlock)} onMouseDown={moveConstructor<ISelectBlock>(createSelectBlock, moveSelectBlock, hideOrAddEventSelectBlock)} />
                    {organicFormulaList.map(item => {
                        return <OrganicFormula organicFormula={item} organicFormulaList={organicFormulaList} setOrganicFormulaList={setOrganicFormulaList} key={id++} />
                    })}
                </div>
                {organicFormulaList.length ?
                <div className="canvas__list">
                    <div className="canvas__list-container">
                        {organicFormulaList.map(item => {
                            return (
                            <div className="canvas__list-item" key={id++}>
                                <svg x="0" y="0" viewBox={"0 0 " + item.getViewBoxSize().width + " " + item.getViewBoxSize().height} >
                                    <g fill="none" stroke="#000" strokeWidth="2" dangerouslySetInnerHTML={{__html: item.getTemplate()}} />
                                </svg>
                                <div className="canvas__list-item-name">{item.name ? item.name : item.id}</div>
                                <div style={{flexGrow: 1}}/>
                                <div className="canvas__list-item-delete" onClick={() => deleteOrganicFormula(item.id)}>
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
                </div> : ""
                }
                
                <AddOrganicFormulaBlock addOrganicFormula={addOrganicFormula} />
            </div>
            <div className="canvas__download" onClick={openModalAndCreatePreview}>Down</div>
            <div className="canvas__import" onClick={() => setOpenUploadModal(true)}>Imprt</div>
            <div className="canvas__open-modal-add-text" onClick={() => setModal(!openModal)}>T</div>
            <div className={"canvas__modal-add-text " + (openModal ? "canvas__modal-add-text_active " : "")}>
                <div className="canvas__modal-add-text-container">
                    <div className="canvas__modal-add-text-inner">
                        <div className="canvas__modal-add-text-input-container">
                            <input
                                placeholder="Введите формулу"
                                className="canvas__modal-add-text-input"
                                value={value}
                                onChange={(e) => setValue((e.currentTarget as HTMLInputElement).value)}
                            />
                            <input type="submit" value="Создать" onClick={addOrganicFormulaText} className="canvas__modal-add-text-submit" />
                        </div>
                        <h4>Примечание</h4>
                        <p className="m">Для верхнего и нижнего регистра используйте $+{"{Верхний регистр}"} и $-{"{Нижний регистр}"}</p>
                        <p className="m canvas__example-modal-add-text">H$+{"{1}"}$-{"{2}"} = 
                            <svg x="0" y="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 22">
                                <g>
                                    <text x="50%" textAnchor="middle" y="17" strokeWidth="0" fill="black" fontFamily="Arial">
                                        <tspan dy="0" style={{fontSize: "18px"}}>H</tspan>
                                        <tspan dy="-7" style={{fontSize: "14px"}}>1</tspan>
                                        <tspan dy="10" style={{fontSize: "14px"}}>2</tspan>
                                    </text>
                                </g>
                            </svg>
                        </p>
                    </div>
                </div>
                <div className="canvas__modal-add-text-triangle" />
            </div>
            
        </div>
        <div className={"modal-download-canvas " + (openDownloadModal ? "modal-download-canvas_open" : "")} onClick={() => setOpenDownloadModal(false)}>
            <div className="modal-download-canvas__inner" onClick={(e) => e.stopPropagation()}>
                <div className="modal-download-canvas__svg-container">
                    <svg className="modal-download-canvas__svg" viewBox={`0 0 ${downloadSetting.viewBoxWidth} ${downloadSetting.viewBoxHeight}`} dangerouslySetInnerHTML={{__html: previewSVG}}/>
                </div>
                <div className="modal-download-canvas__bottom">
                    <div className="modal-download-canvas__setting">
                        <div className="modal-download-canvas__buttons">
                            <button
                                onClick={() => setDownloadSetting({...downloadSetting, type: "svg"})}
                                className={
                                    "modal-download-canvas__svg-button " +
                                    (downloadSetting.type === "svg" ? "modal-download-canvas__svg-button_active" : "")
                                }
                            >SVG</button>
                            <button
                                onClick={() => setDownloadSetting({...downloadSetting, type: "png"})}
                                className={
                                    "modal-download-canvas__png-button " +
                                    (downloadSetting.type === "png" ? "modal-download-canvas__png-button_active" : "")
                                }
                            >PNG</button>
                        </div>
                        
                        <input placeholder="имя" value={downloadSetting.name} onChange={(e) => setDownloadSetting({...downloadSetting, name: e.target.value})} />
                        <div className={
                            "modal-download-canvas__input-container " +
                            (downloadSetting.type !== "png" ? "modal-download-canvas__input-container_disable" : "")
                        }>
                            <input placeholder="ширина(px)" value={downloadSetting.width} onChange={(e) => setDownloadSetting({...downloadSetting, width: +e.target.value})} />
                            <input placeholder="высота(px)" value={downloadSetting.height} onChange={(e) => setDownloadSetting({...downloadSetting, height: +e.target.value})} />
                        </div>
                    </div>
                    <div className="modal-download-canvas__button">
                        <button className="modal-download-canvas__cancel-button" onClick={() => setOpenDownloadModal(false)}>Отмена</button>
                        <button className="modal-download-canvas__download-button" onClick={download}>Скачать</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={"modal-upload-canvas " + (openUploadModal ? "modal-upload-canvas_open" : "")} onClick={() => setOpenUploadModal(false)}>
            <div className="modal-upload-canvas__inner" onClick={(e) => e.stopPropagation()}>
                <div>
                    <input ref={uploadFileRef} type="file" className="modal-upload-canvas__input-file" id="modal-upload-canvas__input-file" accept="image/*" onChange={changeInputFileMessage} />
                    <label htmlFor="modal-upload-canvas__input-file" className="modal-upload-canvas__custom-input-file">
                        {inputFileMessage || "Выберите файл"}
                    </label>
                </div>
                <div className="modal-upload-canvas__buttons-container">
                    <button className="modal-upload-canvas__cancel-button" onClick={() => setOpenUploadModal(false)}>Отмена</button>
                    <button className="modal-upload-canvas__add-button" onClick={() => {setOpenUploadModal(false);upload()}}>Добавить</button>
                </div>
            </div>
        </div>
        </>
    )
}