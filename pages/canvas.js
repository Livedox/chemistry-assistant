import { useState, useRef } from "react";
import Editor from "../components/Canvas/EditorChemicalStructure";
import getId from "../components/getId";
import VectorBox from "../components/Canvas/VectorBox";
import MenuItem from "../components/Canvas/MenuItem";
import RightBarHead from "../components/Canvas/RightBarHead";
import RightBarBottom from "../components/Canvas/RightBarBottom";
import Layout from "../components/Header/Layout";
import Head from "next/head";

export default function Canvas() {
    const editorRef = useRef(null);
    const [isRightBar, setIsRightBar] = useState(true);
    function move(e) {
        e.preventDefault();
        const editor = editorRef.current;      
        document.body.style.userSelect = "none";
        const targ = e.currentTarget.parentNode;
        targ.classList.add("active");
        let shiftX, shiftY;
        if(e.type === "mousedown") {
            shiftX = e.clientX - targ.getBoundingClientRect().left + editor.getBoundingClientRect().left + 5;
            shiftY = e.clientY - targ.getBoundingClientRect().top + editor.getBoundingClientRect().top + 5;
        } else {
            shiftX = e.touches[0].clientX - targ.getBoundingClientRect().left + editor.getBoundingClientRect().left + 5;
            shiftY = e.touches[0].clientY - targ.getBoundingClientRect().top + editor.getBoundingClientRect().top + 5;
        }
               
        moveAt(e.pageX, e.pageY);

        function moveAt(pageX, pageY) {
            let left = pageX - shiftX;
            let top = pageY - shiftY;
            if(left > editor.clientWidth - targ.clientWidth) {
                left = editor.clientWidth - targ.clientWidth;
            }
            if(left < 0) {
                left = 0;
            }  
            if(top > editor.clientHeight - targ.clientHeight) {
                top = editor.clientHeight - targ.clientHeight;
            }    
            if(top < 0 ) {
                top = 0;
            }        
            targ.style.left = left + "px";
            targ.style.top = top + "px";
        } 

        function onMove(e) {
            let pageX, pageY;
            if(e.type === "mousemove") {
                pageX = e.pageX;
                pageY = e.pageY;
            } else {
                pageX = e.touches[0].pageX;
                pageY = e.touches[0].pageY;
            }
            moveAt(pageX, pageY);
        }
        document.addEventListener("mousemove", onMove);
        document.addEventListener("touchmove", onMove);
        window.addEventListener("mouseup", clear);
        window.addEventListener("touchend", clear);
        window.addEventListener("touchcancel", clear);   
        function clear() {        
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("touchmove", onMove);
            window.onmouseup = null;
            document.body.style.userSelect = "auto";
        }
        function deselect(e) {
            if(!targ.contains(e.target)) {
                targ.classList.remove("active");
                window.removeEventListener("mousedown", deselect);
            }
        }
        window.addEventListener("mousedown", deselect);
    }

    
    const [items, setItems] = useState([]);
    function createText(text) {
        const formula = text || document.querySelector(".formula-input").value;
        if(!formula) return;
        setItems([...items, {id: getId(), name: "text", value: {text: formula}}]);
    }
    function addDk234(name) {
        setItems([...items, {id: getId(), name, size: {w: 40, h: 40}}]);
    }
    function addLine(name, small) {
        setItems([...items, {id: getId(), name, small, size: {w: 50, h: 50}}]);
    }
    function addDk(name) {
        setItems([...items, {id: getId(), name, size: {w: 258, h: 140}}]);
    }
    function addItem(name) {
        setItems([...items, {id: getId(), name}]);
    }
    function toggleSelect(i) {
        document.querySelectorAll(".chemical-structure-block")[i].classList.toggle("select");
    }
    function remove(i) {
        const components = items.slice(0);
        components.splice(i, 1);
        setItems(components);
    }
    function download() {
        const svg = document.createElement("svg");
        const coords = getMinMaxCoords(document.querySelectorAll(".chemical-structure-block .chemical-structure"));
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("width", coords.right - coords.left);
        svg.setAttribute("height", coords.bottom - coords.top);
        svg.setAttribute("viewBox", `0 0 ${coords.right - coords.left} ${coords.bottom - coords.top}`);
        copy(document.querySelectorAll(".chemical-structure-block.text .chemical-structure"));
        copy(document.querySelectorAll(".chemical-structure-block:not(.text) .chemical-structure"));
        function copy(elements) {
            for(let i = 0; i < elements.length; i++) {
                let parent = elements[i].parentNode.parentNode;
                let left = (parseFloat(parent.style.left) || 0) - coords.left;
                let top =  (parseFloat(parent.style.top) || 0) - coords.top;
                const scale = parseFloat(parent.style.transform.match(/(\d+\.\d+)|(\d+)/g)) || 1;
                elements[i].setAttribute("x", left);
                elements[i].setAttribute("y", top);
                elements[i].setAttribute("width", elements[i].getAttribute("width")*scale);
                elements[i].setAttribute("height", elements[i].getAttribute("height")*scale);
                elements[i].setAttribute("class", "");
                svg.insertAdjacentElement("afterbegin", elements[i]);
            }
        }
        function getMinMaxCoords(elements) {
            const coords = {
                left: null,
                top: null,
                right: null,
                bottom: null
            }
            for(let i = 0; i < elements.length; i++) {
                const parent = elements[i].parentNode.parentNode;
                const left = parseFloat(parent.style.left) || 0;
                const top = parseFloat(parent.style.top) || 0;
                const scale = parseFloat(parent.style.transform.match(/(\d+\.\d+)|(\d+)/g)) || 1;
                const right = left + parent.clientWidth*scale;
                const bottom = top + parent.clientHeight*scale;
                if(coords.left === null || coords.left > left) coords.left = left;
                if(coords.top === null || coords.top > top) coords.top = top;
                if(coords.right === null || coords.right < right) coords.right = right;
                if(coords.bottom === null || coords.bottom < bottom) coords.bottom = bottom;
            }
            return coords;
        }
        let svgText = svg.outerHTML;
        const blob = new Blob([svgText.toString()]);
        const element = document.createElement("a");
        element.download = "w3c.svg";
        element.href = window.URL.createObjectURL(blob);
        element.click();
        element.remove();
        setItems([]);
    }
    const fileRef = useRef(null);
    function createCustomElement() {
        const file = fileRef.current.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function() {
            const parser = new DOMParser();
            const doc = parser.parseFromString(reader.result, "image/svg+xml");
            setItems([...items, {id: getId(), name: "custom", data: doc}]);
        }
    }
    return(
        <>
        <Head>
            <title>Редактор химических формул</title>
            <meta
                name="description"
                content="Редактор химических формул."
            />
            <meta
                name="keywords"
                content="Редактор, Химический редактор, Редактор химических формул, Редактор органических формул, Chemistry Assistant"
            />
        </Head>
        <Layout>
            <div id="editor" ref={editorRef}>
                <Editor />
                {items.map( item => {
                    return (<VectorBox fun={move} data={item} key={item.id}/>);
                })}
            </div>
            <div id="editor-menu">
                <div className="editor-menu-left">
                    <div className="editor-menu-left-top-content">
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                            <div style={{display: "flex"}}>
                                <div onClick={() => createText("CH")}>CH</div>
                            </div>
                            <div style={{display: "flex"}}>
                                <div onClick={() => createText("CH$-{2}")}>CH<sub>2</sub></div>
                            </div>
                            <div style={{display: "flex"}}>
                                <div onClick={() => createText("CH$-{3}")}>CH<sub>3</sub></div>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%", width: "70%"}}>
                            <div className="editor-menu-text-block">
                                <div onClick={() => createText("S")}>S</div>
                                <div onClick={() => createText("N")}>N</div>
                                <div onClick={() => createText("P")}>P</div>
                                <div onClick={() => createText("Cl")}>Cl</div>
                                <div onClick={() => createText("Br")}>Br</div>
                                <div onClick={() => createText("Ag")}>Ag</div>
                                <div onClick={() => createText("Na")}>Na</div>
                                <div onClick={() => createText("Zn")}>Zn</div>
                            </div>
                            <div className="editor-menu-text-block">
                                <div onClick={() => createText("OH")}>OH</div>
                                <div onClick={() => createText("COOH")}>COOH</div>
                                <div onClick={() => createText("CHO")}>CHO</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="editor-menu-left-bottom-content">
                        <div className="formula-container">
                            <input className="formula-input" placeholder="Введите формулу" />
                        </div>
                        <div className="button-container">
                            <button className="formula-enter" onClick={() => createText()}>Создать</button>
                            <button onClick={download} className="downoload-button">Экспорт</button>
                            <label htmlFor="files" className="import-button">Импорт</label>
                            <input id="files" type="file" onChange={createCustomElement} ref={fileRef} style={{visibility: "hidden"}} />
                        </div>
                    </div>          
                </div>
                <div className="editor-menu-right">
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", minWidth: "465px"}}>
                        <div style={{display: "flex", height: "45%"}}>
                            <MenuItem fun={() => addItem("d8")} data={{name: "d8"}} />
                            <MenuItem fun={() => addItem("d7")} data={{name: "d7"}} />
                            <MenuItem fun={() => addItem("d6")} data={{name: "d6"}} />
                            <MenuItem fun={() => addItem("d5")} data={{name: "d5"}} />
                            <MenuItem fun={() => addItem("d4")} data={{name: "d4"}} />
                            <MenuItem fun={() => addItem("d3")} data={{name: "d3"}} />
                            <MenuItem fun={() => addItem("dk5")} data={{name: "dk5"}} />
                            <MenuItem fun={() => addItem("dk6")} data={{name: "dk6"}} />
                            <MenuItem fun={() => addItem("dk7")} data={{name: "dk7"}} />
                        </div>
                        <div style={{display: "flex", height: "45%", justifyContent: "space-around"}}>
                            <MenuItem fun={() => addItem("c3_1")} data={{name: "c3_1"}} />
                            <MenuItem fun={() => addItem("c5_1")} data={{name: "c5_1"}} />
                            <MenuItem fun={() => addItem("c5_2")} data={{name: "c5_2"}} />
                            <MenuItem fun={() => addItem("c6_1")} data={{name: "c6_1"}} />
                            <MenuItem fun={() => addItem("c6_2")} data={{name: "c6_2"}} />
                            <MenuItem fun={() => addItem("c6_2_2")} data={{name: "c6_2_2"}} />
                            <MenuItem fun={() => addItem("c6_3")} data={{name: "c6_3"}} />
                            <MenuItem fun={() => addItem("c8_3")} data={{name: "c8_3"}} />
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-around", minWidth: "100px"}}>
                        <div style={{display: "flex", height: "45%"}}>
                            <MenuItem fun={() => addLine("line")} data={{name: "line", size: {w: 50, h: 50}}} />
                            <MenuItem fun={() => addLine("doubleLine")} data={{name: "doubleLine", size: {w: 50, h: 50}}} />
                            <MenuItem fun={() => addLine("tripleLine")} data={{name: "tripleLine", size: {w: 50, h: 50}}} />
                            <MenuItem fun={() => addLine("dashLine")} data={{name: "dashLine", size: {w: 50, h: 50}}} />
                        </div>
                        <div style={{display: "flex", height: "45%"}}>
                            <MenuItem fun={() => addLine("line", true)} data={{name: "line", small: true, size: {w: 50, h: 50}}} />
                            <MenuItem fun={() => addLine("doubleLine", true)} data={{name: "doubleLine", small: true, size: {w: 50, h: 50}}} />
                            <MenuItem fun={() => addLine("tripleLine", true)} data={{name: "tripleLine", small: true, size: {w: 50, h: 50}}} />
                        </div>                                             
                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%", minWidth: "21px"}}>
                        <div style={{display: "flex", height: "30%"}}>
                            <MenuItem fun={() => addDk234("dk2")} data={{name: "dk2", size: {w: 40, h: 40}}} />
                        </div>
                        <div style={{display: "flex", height: "30%"}}>
                            <MenuItem fun={() => addDk234("dk3")} data={{name: "dk3", size: {w: 40, h: 40}}} />
                        </div>
                        <div style={{display: "flex", height: "30%"}}>
                            <MenuItem fun={() => addDk234("dk4")} data={{name: "dk4", size: {w: 40, h: 40}}} />
                        </div>
                        
                        
                        
                    </div>
                    <div style={{display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-around", minWidth: "132px"}}>
                        <MenuItem fun={() => addDk("dk")} data={{name: "dk", size: {w: 258, h: 140}}} />
                        <MenuItem fun={() => addDk("dk1")} data={{name: "dk1", size: {w: 258, h: 140}}} />
                    </div>
                </div>
            </div>
            {items.length > 0 ? 
                (<div id="right-bar" className={isRightBar ? "active" : ""}>
                    <RightBarHead fun={setIsRightBar} isRightBar={isRightBar} />
                    <RightBarBottom items={items} toggleSelect={toggleSelect} remove={remove} />
                </div>) : null
            }
        </Layout>
        </>
    )
}