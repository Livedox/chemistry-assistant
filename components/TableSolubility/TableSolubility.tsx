import React, { useState } from "react";
import useToggle from "../../hooks/useToggle";
import getId from "../getId";
import Hint from "./Hint";
import items from "./items";
import ItemsContainer from "./ItemsContainer";

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
    const [isHintActive, toggleHint] = useToggle();
    function createHint(e: React.MouseEvent) {
        //Native is faster than react 
        const hint = document.querySelector<HTMLElement>(".solubility-table__hint")!;
        const target = e.target as HTMLElement;
        hint.style.left = target.getBoundingClientRect().left+15 + "px";
        hint.style.top = target.getBoundingClientRect().top + "px";
    }
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
                        <div className="solubility-table__main">
                            {items.map(cells => {
                                return <ItemsContainer createHint={createHint} cells={cells} key={getId()} />
                            })}
                        </div>
                    </div>
                </div>
                <Hint active={isHintActive} data={items[0][1]}/>
            </div>
        </>
    )
}