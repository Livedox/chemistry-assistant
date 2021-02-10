import CalculatorResult from "./CalculatorResult";
import { useState } from "react";

const atomicMass = { 
    H: 1.00794,He: 2.0026,Li: 6.941,Be: 9.0122,B: 10.811,C: 12.0107,
    N: 14.0067,O: 15.9994,F: 18.9984,Ne: 20.1797,Na: 22.9897,Mg: 24.305,
    Al: 26.9815,Si: 28.0855,P: 30.9738,S: 32.066,Cl: 35.45,Ar: 39.948,
    K: 39.0983,Ca: 40.078,Sc: 44.9559,Ti: 47.867,V: 50.9415,Cr: 51.9961,
    Mn: 54.938,Fe: 55.845,Co: 58.9332,Ni: 58.6934,Cu: 63.546,Zn: 65.38,
    Ga: 69.723,Ge: 72.63,As: 74.9216,Se: 78.96,Br: 79.904,Kr: 83.798,
    Rb: 85.4678,Sr: 87.62,Y: 88.9059,Zr: 91.224,Nb: 92.9064,Mo: 95.96,
    Tc: 97.907,Ru: 101.07,Rh: 102.9055,Pd: 106.42,Ag: 107.8682,Cd: 112.411,
    In: 114.818,Sn: 118.71,Sb: 121.76,Te: 127.6,I: 126.9045,Xe: 131.29,
    Cs: 132.9055,Ba: 137.327,La: 138.9055,Hf: 178.49,Ta: 180.9479,W: 183.84,
    Re: 186.207,Os: 190.23,Ir: 192.217,Pt: 195.084,Au: 196.966,Hg: 200.59,
    Tl: 204.3833,Pb: 207.2,Bi: 208.9804,Po: 208.98,At: 210,Rn: 222,Fr: 223,
    Ra: 226.0254,Ac: 227.0278,Rf: 261,Db: 262,Sg: 263,Bh: 267,Hs: 269,Mt: 278,
    Ds: 281,Rg: 281,Cn: 262,Nh: 283,Fl: 289,Mc: 289,Lv: 293,Ts: 294,Og: 294,
}


const sumValueByKey = (...rest) => rest.reduce( ( result, current ) => {
    for(let key in current){
        let value = current[key];        
        if(result[key] === undefined){
            result[key] = value;
        }else{
            result[key].mass += value.mass;
            result[key].amount += value.amount;
        }
    }    
    return result;
}, {} );


export default function Calculator({isCalculatorActive, toggleCalculator}) {
    function moveCalculator(e) {
        document.body.style.userSelect = "none";
        const calculator = e.currentTarget.parentNode;
        let shiftX = e.clientX - calculator.getBoundingClientRect().left;
        let shiftY = e.clientY - calculator.getBoundingClientRect().top;        
        moveAt(e.pageX, e.pageY);

        function moveAt(pageX, pageY) {
            let left = pageX - shiftX;
            let top = pageY - shiftY;
            const docWidth = document.documentElement.clientWidth;
            const docHeight = document.documentElement.clientHeight;
            const minLeft = docWidth < 460 || docHeight > docWidth ? 0 : 50;
            const minTop = docWidth < 460 || docHeight > docWidth ? 50 : 0;
            if(left > docWidth - calculator.clientWidth) {
                left = docWidth - calculator.clientWidth;
            }
            if(left < minLeft) {
                left = minLeft;
            }  
            if(top > docHeight - calculator.clientHeight) {
                top = docHeight - calculator.clientHeight;
            }    
            if(top < minTop) {
                top = minTop;
            }        
            calculator.style.left = left + "px";
            calculator.style.top = top + "px";
        } 

        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }
        document.addEventListener("mousemove", onMouseMove);
        window.onmouseup = function() {
            document.removeEventListener("mousemove", onMouseMove);
            window.onmouseup = null;
            document.body.style.userSelect = "auto";
        };
    }


    function calculateMolarMass(str) {
        let arr = str.split(/([)(*])|\[|\]|([A-Z][a-z]*)|(\d+)/g).filter(Boolean);
        let multipl = !isNaN(+arr[0]) ? +arr[0] : 1;
        let resultElements = calculate(arr, multipl);
        let result = 0;
        for(let key in resultElements) {
            result += resultElements[key].mass;
        }
        result = Number(result.toFixed(5));
        return {result, resultElements: Object.entries(resultElements)};

        
        function calculate(arr, multipl) {
            let resultObj = {};
            while(arr.includes("(")) {
                let firstI = arr.indexOf("(");
                let lastI = arr.indexOf(")");
                let mult = !isNaN(+arr[lastI+1]) ? +arr[lastI + 1] : 1;
                let sliceArr = arr.splice(firstI, lastI-firstI+1).slice(1, -1);
                if(mult !== 1) arr.splice(firstI, 1);
                resultObj = sumValueByKey(calculate(sliceArr, multipl * mult), resultObj);
            }

            while(arr.includes("*")) {
                let i = arr.indexOf("*");
                let mult = !isNaN(+arr[i+1]) ? +arr[i + 1] : 1;
                arr.splice(i, 1);
                if(mult !== 1) arr.splice(i, 1);
                resultObj = sumValueByKey(calculate(arr.splice(i), multipl * mult), resultObj);         
            }

            let obj = {};
            for(let i = 0; i < arr.length; i++) {
                if(isNaN(+arr[i])) {
                    let mass = !isNaN(+arr[i+1]) ? +arr[i+1]*multipl*atomicMass[arr[i]] : multipl*atomicMass[arr[i]];
                    let amount = !isNaN(+arr[i+1]) ? +arr[i+1]*multipl : multipl;
                    mass = Number(mass.toFixed(5));
                    let Ar = atomicMass[arr[i]];
                    let temporaryObj = {};
                    temporaryObj[arr[i]] = {mass, amount, Ar};
                    obj = sumValueByKey(obj, temporaryObj);
                }
            }
            
            return sumValueByKey(obj, resultObj);
        }
    }


    const [value, setValue] = useState("");
    const [substance, setSubstance] = useState("Введите формулу");
    const [mass, setMass] = useState("");
    const [resultElements, setResultElements] = useState([]);


    function handleChange(event) {
        setValue(event.target.value);
    }


    function changeSubstance() { 
        let result = calculateMolarMass(value);
        setSubstance(value);
        setMass(result.result);
        setResultElements(result.resultElements);
        setValue("");
    }


    return(
        <div id="calculator" className={isCalculatorActive ? "active" : ""}>
            <div id="calculator-top" onMouseDown={moveCalculator} >
                <svg id="calculator-close" onClick={toggleCalculator} height="329pt" viewBox="0 0 329.26933 329" width="329pt"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
            </div>
            <div id="calculator-content">
                <div id="calculator-container-input">
                    <input value={value} onChange={handleChange} id="calculator-input" placeholder={substance} />
                    <button onClick={changeSubstance} id="calculator-button">Рассчитать</button>
                </div>
                <div id="calculator-result">{isNaN(mass) ? "Неверный ввод" : mass === "" ? "" : "Молярная масса соединения " + mass}</div>
                {!isNaN(mass) && mass !== "" ? 
                    <CalculatorResult resultElements={resultElements} />
                 : (
                    <div style={{textAlign: "center"}}>
                        <h5 style={{fontSize: "1.2rem", marginBottom: "15px"}}>Введите формулу вещества чтобы рассчитать его молярную массу</h5>
                        <h5 style={{ marginBottom: "10px"}}>Пишите корректно</h5>
                        <table style={{width: "100%"}}>
                            <tbody>
                                <tr style={{textAlign: "center"}}><td>C2H5OH</td><td>CaCl*6H2O</td></tr>
                                <tr><td>H2O</td><td>Cu(OH)2</td></tr>
                                <tr><td>Na2SO4</td><td>K4[Fe(CN)6]</td></tr>
                            </tbody>
                        </table>
                    </div>
                )}
                
            </div>
        </div>
    )
}