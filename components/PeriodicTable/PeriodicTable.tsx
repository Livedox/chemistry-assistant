import ChemicalElement from "../Test/ChemicalElement";
import chemicalElements from "../Test/chemicalElements";
import getId from "../getId";
import Context from "../Context/ContextSettingPeriodicTabe";
import ContextElement from "../Context/ContextElement";
import { useContext, useMemo, useState } from "react";
import chemicalData from "./chemicalData";
import Link from "next/link";

export default function Table() {
    const context = useContext(Context);
    context.hidden = context.hidden ? context.hidden : {};
    const ctxElement = useContext(ContextElement);
    const [element, setElement] = useState(ctxElement.element);
    const value = useMemo(
        () => ({ element, setElement }),
        [element]
    );

    let classTable = "periodic-table ";
    if(context.hidden.mass) classTable += "periodic-table_no-mass ";
    if(context.hidden.number) classTable += "periodic-table_no-number ";
    if(context.hidden.radiation) classTable += "periodic-table_no-radiation ";
    if(context.hidden.nameLa) classTable += "periodic-table_no-name-la ";
    if(context.hidden.nameRu) classTable += "periodic-table_no-name-ru ";
    if(context.hidden.oxidation) classTable += "periodic-table_no-oxidation ";
    if(context.highlight) classTable += `periodic-table_${context.highlight} `;
    if(!context.mobileIsWidth) classTable += "periodic-table_height";
    return (
    <>
    <ContextElement.Provider value={value}>
    <div className={classTable}>
        <div className="periodic-table__period-container">
            {[1, 2, 3, 4, 5, 6, 7].map((item: number) => <div className="periodic-table__period" key={"k"+item}>{item}</div>)}
        </div>
        <div className="periodic-table__main-container">
            <div className="periodic-table__row">
                <Link href="./info/alkaline"><a className="periodic-table__link"><div className="periodic-table__group">1</div></a></Link>
                <div className="periodic-table__group">18</div>
            </div>
            <div className="periodic-table__row">
                <div className="periodic-table__row-inner">
                    <ChemicalElement element={chemicalElements[0]} />
                    <Link href="./info/alkaline-earth"><a className="periodic-table__link"><div className="periodic-table__group">2</div></a></Link>
                </div>
                <div className="periodic-table__row-inner">
                    <div className="periodic-table__group">13</div>
                    <div className="periodic-table__group">14</div>
                    <div className="periodic-table__group">15</div>
                    <Link href="./info/chalcogene"><a className="periodic-table__link"><div className="periodic-table__group">16</div></a></Link>
                    <Link href="./info/halogen"><a className="periodic-table__link"><div className="periodic-table__group">17</div></a></Link>
                    <ChemicalElement element={chemicalElements[1]} />
                </div>
            </div>
            <div className="periodic-table__row">
                <div className="periodic-table__row-inner">
                    <ChemicalElement element={chemicalElements[2]} />
                    <ChemicalElement element={chemicalElements[3]} />
                </div>
                <div className="periodic-table__row-inner">
                    {chemicalElements.slice(4, 10).map((item) => <ChemicalElement element={item} key={getId()} />)}
                </div>
            </div>
            <div className="periodic-table__row">
                <ChemicalElement element={chemicalElements[10]} />
                <ChemicalElement element={chemicalElements[11]} />
                <div className="periodic-table__group">3</div>
                <div className="periodic-table__group">4</div>
                <div className="periodic-table__group">5</div>
                <div className="periodic-table__group">6</div>
                <div className="periodic-table__group">7</div>
                <div className="periodic-table__group">8</div>
                <div className="periodic-table__group">9</div>
                <div className="periodic-table__group">10</div>
                <div className="periodic-table__group">11</div>
                <div className="periodic-table__group">12</div>
                {chemicalElements.slice(12, 18).map((item) => <ChemicalElement element={item} key={getId()} />)}
            </div>
            <div className="periodic-table__row">
                {chemicalElements.slice(18, 36).map((item) => <ChemicalElement element={item} key={getId()} />)}
            </div>
            <div className="periodic-table__row">
                {chemicalElements.slice(36, 54).map((item) => <ChemicalElement element={item} key={getId()} />)}
            </div>
            <div className="periodic-table__row">
                {chemicalElements.slice(54, 57).map((item) => <ChemicalElement element={item} key={getId()} />)}
                {chemicalElements.slice(71, 86).map((item) => <ChemicalElement element={item} key={getId()} />)}
            </div>
            <div className="periodic-table__row">
                {chemicalElements.slice(86, 89).map((item) => <ChemicalElement element={item} key={getId()} />)}
                {chemicalElements.slice(103, 118).map((item) => <ChemicalElement element={item} key={getId()} />)}
            </div>
            <div className="periodic-table__row-bottom periodic-table__row-bottom_top">
                <div className="periodic-table__row-inner">
                    {chemicalElements.slice(57, 71).map((item) => <ChemicalElement element={item} key={getId()} />)}
                </div>
            </div>
            <div className="periodic-table__row-bottom">
                <div className="periodic-table__row-inner">
                    {chemicalElements.slice(89, 103).map((item) => <ChemicalElement element={item} key={getId()} />)}
                </div>
            </div>
        </div>  
    </div>
    <div className="legend">
        <ChemicalElement element={{...element, class: element.class + " chemical-element_legend"}} />
        <div className="legend__content">
            <div>
                <div dangerouslySetInnerHTML={{__html: chemicalData[element.symbol as keyof typeof chemicalData].info as string}}></div>
                <div className="legend__link">
                    <Link href={`./info/${element.symbol}`}>
                        <a>Подробнее ➝</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </ContextElement.Provider>
    
    
    </>
    )
}