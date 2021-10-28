import { useContext, useEffect, useState } from "react";
import Picker from "../components/Picker/ColorPicker";
import { ISettingPeriodicTable, IColor, IColorOptions } from "../components/interface";
import Context from "../components/Context/ContextSettingPeriodicTabe";

interface IBlocksColor {
    class: keyof IColorOptions;
    type: keyof IColor;
    color: string;
}

let setting:ISettingPeriodicTable = {};

export default function SettingPeriodicTable() {
    let counter = 0;
    let context = useContext(Context);
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
                if(!setting[item.class]) setting[item.class] = {};
                setting[item.class]![item.type] = color;
            }
            return item;
        }));
        localStorage.setItem("periodicTable", JSON.stringify(setting));
        context = setting;
    }
    useEffect(() => {
        setting = JSON.parse(localStorage.getItem("periodicTable") ?? "{}");
        context = setting;
    }, []);
    return (
        <>
            <div className="setting">
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
        </>
    )
}