import React, { useContext, useEffect, useState } from "react";
import Picker from "../Picker/ColorPicker";
import { ISettingPeriodicTable, IColor, IColorOptions } from "../interface";
import Context from "../Context/ContextSetting";

interface IBlocksColor {
    class: keyof IColorOptions;
    type: keyof IColor;
    color: string;
}

interface IProps {
    callback: (newSetting: ISettingPeriodicTable) => void;
}

let setting:ISettingPeriodicTable = {};

const SettingPeriodicTable:React.FC<IProps> = ({callback}) => {
    let counter = 0;
    const context = useContext(Context);
    const [isOpacity, setOpactiy] = useState(false);
    const [hidden, setHidden] = useState<any>({});
    const [numberActiveElement, setNumberActiveElement] = useState(0);
    const [blocksColor, setBlocksColor] = useState<IBlocksColor[]>([
        {class: "s", type: "background", color: "#fe83b5"},
        {class: "p", type: "background", color: "#ffd737"},
        {class: "d", type: "background", color: "#5ca7e0"},
        {class: "fTop", type: "background", color: "#90cd8e"},
        {class: "fBottom", type: "background", color: "#78bd62"},
        {class: "s", type: "color", color: "#000"},
        {class: "p", type: "color", color: "#000"},
        {class: "d", type: "color", color: "#000"},
        {class: "fTop", type: "color", color: "#000"},
        {class: "fBottom", type: "color", color: "#000"}
    ]);
    const updateColor = (color:string) => {
        setBlocksColor(blocksColor.map((item, i)=> {
            if(numberActiveElement === i) {
                item.color = color;
                if(!setting.color) setting.color = {};
                if(!setting.color![item.class]) setting.color![item.class] = {};
                setting.color![item.class]! = {...setting.color![item.class]!, [item.type]: color};
            }
            return item;
        }));
        updateLocalStorage();
        callback({...setting});
    }

    function setHiddenElems(name: string) {
        hidden[name] = !hidden[name];
        setHidden(hidden);
        setting = {...setting, hidden};
        callback(setting);
        updateLocalStorage();
    }

    function setHighlightedElems(name: string) {
        setting = {...setting, highlight:name};
        callback(setting);
        updateLocalStorage();
    }

    function toggleDisplay(e:React.MouseEvent) {
        (e.currentTarget as HTMLElement).classList.toggle("sizing-block_active");
        setting = {...setting, mobileIsWidth: !setting.mobileIsWidth};
        callback(setting);
        updateLocalStorage();
    }

    function updateLocalStorage() {
        localStorage.setItem("periodicTable", JSON.stringify(setting));
    }

    function toDefault() {
        setting = {};
        setHidden({});
        updateLocalStorage();
        callback(setting);
        setBlocksColor(blocksColor.map((item, i) => {
            if(i === 0) item.color = "#fe83b5";
            if(i === 1) item.color = "#ffd737";
            if(i === 2) item.color = "#5ca7e0";
            if(i === 3) item.color = "#90cd8e";
            if(i === 4) item.color = "#78bd62";
            if(i > 4) item.color = "#000";
            return item;
        }));
    }

    useEffect(() => {
        setting = JSON.parse(localStorage.getItem("periodicTable") ?? "{}");
        setHidden(setting.hidden ? setting.hidden : {});
        let cls:keyof IColorOptions;
        for(cls in setting.color) {
            for(const typ in setting.color![cls]) {
                setBlocksColor(blocksColor.map((item) => {
                    if(item.class === cls && item.type === typ) item.color = setting.color![cls]![typ] ?? "#000";
                    return item;
                }));
            }
        }
    }, []);
    return (
        <>
            <div className={"setting " + (isOpacity ? "setting_opacity " : "") + (context.settingActive.active ? "setting_active " : "")}>
                <div className="setting__top-container">
                    <div className="color-picker-container">
                        <Picker callback={updateColor} />
                    </div>
                    <div className="setting__color-block-container">
                        <div className="setting__color-block-column">
                            {blocksColor.slice(0, 5).map((item, i) => {
                                return (
                                <div
                                    className={
                                        `setting__color-block-background
                                        ${numberActiveElement === i ? " active" : ""}`
                                    }
                                    style={{background: item.color}}
                                    key={counter++}
                                    onClick={() => setNumberActiveElement(i)}
                                >
                                </div>)
                            })}
                        </div>
                        <div className="setting__color-block-column">
                            {blocksColor.slice(5, 10).map((item, i) => {
                                return (
                                <div
                                    className={
                                        `setting__color-block-text
                                        ${(numberActiveElement === i + 5)  ? " active" : ""}`
                                    }
                                    style={{color: item.color}}
                                    key={counter++}
                                    onClick={() => setNumberActiveElement(i+5)}
                                >
                                T
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
                    
                <div className="setting__excretion-block-container">
                    <div>Выделить элементы </div>
                    <select className="setting__select" onChange={(e) => setHighlightedElems(e.target.value)} value={setting.highlight || ""}>
                        <option value="">Ничего</option>
                        <option value="metal-highlighted">Металлы</option>
                        <option value="no-metal-highlighted">Неметаллы</option> 
                    </select>
                </div>
                <div className="setting__hidden-block-container">
                    <div><label className="setting__label"><input type="checkbox" checked={hidden.mass} onClick={() => setHiddenElems("mass")}/><span> Скрыть массу</span></label></div>
                    <div><label className="setting__label"><input type="checkbox" checked={hidden.number} onClick={() => setHiddenElems("number")}/><span> Скрыть номер</span></label></div>
                    <div><label className="setting__label"><input type="checkbox" checked={hidden.nameLa} onClick={() => setHiddenElems("nameLa")}/><span> Скрыть название на латинском</span></label></div>
                    <div><label className="setting__label"><input type="checkbox" checked={hidden.nameRu} onClick={() => setHiddenElems("nameRu")}/><span> Скрыть название на русском</span></label></div>
                    <div><label className="setting__label"><input type="checkbox" checked={hidden.radiation} onClick={() => setHiddenElems("radiation")}/><span> Скрыть знак радиации</span></label></div>
                    <div><label className="setting__label"><input type="checkbox" checked={hidden.oxidation} onClick={() => setHiddenElems("oxidation")}/><span> Скрыть окисление</span></label></div>
                </div>
                <div className="setting__bottom-container">
                    <button onClick={toDefault} className="setting__button-default">По умолчанию</button>
                    <svg onClick={() => {setOpactiy(!isOpacity)}} x="0px" y="0px" viewBox="0 0 12 12" className="setting__button-opacity">
                        <path d="M6,0c0,0-4,5.685-4,8.211C2,10.305,3.791,12,6,12s4-1.695,4-3.789C10,5.685,6,0,6,0z"/>
                    </svg>  
                </div> 
            </div>
            <div className={"sizing-block " + (setting.mobileIsWidth ? "sizing-block_active" : "")} onClick={toggleDisplay}>
                <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#000"
                    viewBox="0 0 175 208">
                    <path d="M80.5-8.5"/>
                    <path d="M0.5,207.5h68v-27h-41c0,0,0,1,0-41h-27C0.5,207.5,0.5,207.5,0.5,207.5z"/>
                    <path d="M0.5,0.5l0,68h27l0-41c0,0-1,0,41,0v-27C0.5,0.5,0.5,0.5,0.5,0.5z"/>
                    <path d="M61.1-3"/>
                    <path d="M174.5,207.5v-68h-27v41c0,0,1,0-41,0v27C174.5,207.5,174.5,207.5,174.5,207.5z"/>
                    <path d="M174.5,0.5l-68,0l0,27l41,0c0,0,0-1,0,41l27,0C174.5,0.5,174.5,0.5,174.5,0.5z"/>
                </svg>
            </div>
        </>
    )
}

export default SettingPeriodicTable;