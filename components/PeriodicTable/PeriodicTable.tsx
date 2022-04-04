import Context from "../Context/ContextSettingPeriodicTabe";
import ContextSetElement from "../Context/ContextSetElement";
import { useContext, useState, useCallback } from "react";
import MainContainer from "./MainContainer";
import Legend from "./Legend";


export default function Table() {
    const context = useContext(Context);
    context.hidden = context.hidden ? context.hidden : {};
    const [element, setElement] = useState({
        symbol: "Po",
        number: "84",
        ar: "208,98",
        oxidation: ["4"],
        nameRu: "Полоний",
        nameLa: "Polonium",
        radioactive: true,
        class: "p",
    });
    const memoizedSetElement = useCallback(setElement, []);

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
    <ContextSetElement.Provider value={memoizedSetElement}>
    <div className={classTable}>
        <div className="periodic-table__period-container">
            {[1, 2, 3, 4, 5, 6, 7].map((item: number) => <div className="periodic-table__period" key={"k"+item}>{item}</div>)}
        </div>
        <MainContainer />
    </div>
    <Legend element={element} />
    </ContextSetElement.Provider>
    </>
    )
}