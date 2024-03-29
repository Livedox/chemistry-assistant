import React, { useCallback, useEffect, useState } from "react";
import getId from "../getId";
import AllItems from "./AllItems";
import ElectrochemicalVoltageSeriesMetals from "./ElectrochemicalVoltageSeriesMetals";
import Explanation from "./Explanation";
import Hint from "./Hint";
import items, { Cell } from "./items";


const leftHeaders: string[][] = [
    ["A/K", ""], ["OH", "-"], ["F", "-"], ["Cl", "-"], ["Br", "-"],
    ["I", "-"], ["S", "2-"], ["HS", "-"], ["SO₄", "2-"], ["HSO₄", "-"],
    ["SO₃","2-"], ["HSO₃","2-"], ["NO₃","-"], ["NO₂","-"], ["PO₄","3-"],
    ["HPO₄","2-"], ["CO₃","2-"], ["HCO₃","-"], ["CH₃COO","-"], ["SiO₃","2-"]
];

const topHeaders: string[][] = [
    ["H","+"], ["Li","+"], ["K","+"], ["Na","+"], ["NH₄","+"],
    ["Ba","2+"], ["Ca","2+"], ["Mg","2+"], ["Sr","2+"], ["Al","3+"],
    ["Cr","3+"], ["Fe","2+"], ["Fe","3+"], ["Mn","2+"], ["Zn","2+"],
    ["Ag","+"], ["Hg","2+"], ["Pb","2+"], ["Sn","2+"], ["Cu","2+"]
];

export default function SolubilityTable() {
    const [isHintActive, setHint] = useState(false);
    const hideHint = () => setHint(false);
    const activeHint = () => setHint(true);
    function createHint(e: React.PointerEvent | React.MouseEvent, data: Cell) {
        if(!data.formula) {
            hideHint();
            return;
        }
        if(!isHintActive) activeHint();//speed
        //Native is faster than react 
        const hint = document.querySelector<HTMLElement>(".solubility-table__hint")!;
        const target = e.target as HTMLElement;
        const coords = target.getBoundingClientRect();

        hint.querySelector<HTMLElement>(".solubility-table__hint-title")!.innerText = data.formula!;
        hint.querySelector<HTMLElement>(".solubility-table__hint-text")!.innerText = data.names!.join("\n");
        
        hint.style.top = coords.top + "px";
        if(coords.left + hint.clientWidth > window.innerWidth/1.2) {
            hint.style.left = coords.left-hint.clientWidth + "px";
            return;
        }
        hint.style.left = coords.left+coords.width + "px";
    }
    const memoizedCreateHint = useCallback(createHint, []);
    useEffect(() => {
        document.body.addEventListener("touchmove", hideHint);
        document.body.addEventListener("touchstart", hideHint);
    })
    return (
        <>
            <div className="solubility-table">
                <div className="solubility-table__container">
                    <div className="solubility-table__left-column">
                        {leftHeaders.map(item => {
                            return <div className="solubility-table__title" key={getId()}>{item[0]}<sup>{item[1]}</sup></div>
                        })}
                    </div>
                    <div className="solubility-table__wraper">
                        <div className="solubility-table__top-row">
                            {topHeaders.map(item => {
                                return <div className="solubility-table__item-title" key={getId()}>{item[0]}<sup>{item[1]}</sup></div>
                            })}
                        </div>
                        <div
                          className="solubility-table__main"
                          onMouseLeave={hideHint}>
                            <AllItems items={items} createHint={memoizedCreateHint} />
                        </div>
                    </div>
                </div>
                <Hint active={isHintActive}/>
            </div>
            <ElectrochemicalVoltageSeriesMetals />
            <Explanation />
        </>
    )
}