import React from "react";

export default function EditorChemicalStructure({ changeSize, rotate, isActiveRotate }) {
    return(
        <div id="editor-chemical-structure">
            <div className="left-deg" onClick={ (e) => rotate(e, -6) } style={isActiveRotate ? {display: "none"} : null}></div>
            <div className="right-deg" onClick={ (e) => rotate(e, 6) } style={isActiveRotate ? {display: "none"} : null}></div>
            <div className="minus" onClick={ (e) => changeSize(e, -0.1) }>
                <svg viewBox="0 0 512 512">
                    <path d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z"/>
                </svg>
            </div>
            <div className="plus" onClick={ (e) => changeSize(e, 0.1) }>
                <svg x="0px" y="0px" viewBox="0 0 512 512">
                    <path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
                        v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z" />
                </svg>
            </div>
        </div>
    )
}