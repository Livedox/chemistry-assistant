import React, { useState } from "react";
type percent = number;


const HSV = {
    hue: 0,
    saturation: 1,
    value: 1,
}


interface IProps {
    callback: (newColor:string) => void;
}


const ColorPicker:React.FC<IProps> = ({callback}) => {
    const CIRCLE_WIDTH_PERCENT:percent = 4.7;
    const CIRCLE_HEIGHT_PERCENT:percent = 4.7;
    const LINE_HEIGHT_PERCENT:percent = 2;
    
    let [value, setValue] = useState("");
    let [color, setColor] = useState("#ff0000");
    let [gradientColor, setGradientColor] = useState("#ff0000");


    function processInput(e: React.KeyboardEvent) {
        if((/^#[0-9A-F]{6,8}$/i.test(value) || /^#([0-9A-F]{3}){1,2}$/i.test(value)) && e.charCode === 13) {
            setColor(value);
            callback(value);
            setValue("");   
        }
    }


    function moveCircle(e: React.MouseEvent) {
        const parent = (e.target as HTMLElement).parentElement!.getBoundingClientRect();
        const circle = e.currentTarget as HTMLElement;
        const shiftX = e.clientX - circle.getBoundingClientRect().left + parent.left;
        const shiftY = e.clientY - circle.getBoundingClientRect().top + parent.top;

        function onMouseMove(e: any) {
            let x:percent = (e.pageX - shiftX)*100/parent.width;
            let y:percent  = (e.pageY - shiftY)*100/parent.height;

            updateCircleAndColor(circle, x, y);
        }

        document.addEventListener("mousemove", onMouseMove);

        window.onmouseup = function () {
            document.removeEventListener("mousemove", onMouseMove);
            window.onmouseup = null;
        };
    }

    function clickPicker(e: React.MouseEvent) {
        const elem = e.currentTarget as HTMLElement;
        const coords = elem.getBoundingClientRect();
        const circle:HTMLElement = elem.querySelector(".color-picker__circle")!;

        let x:percent = ((e.pageX-coords.left)*100)/coords.width-CIRCLE_WIDTH_PERCENT/2;
        let y:percent  = ((e.pageY-coords.top)*100)/coords.height-CIRCLE_HEIGHT_PERCENT/2;

        updateCircleAndColor(circle, x, y);
    }

    function updateCircleAndColor(circle: HTMLElement, x: percent, y: percent) {
        // Checking for coordinates less than acceptable
        if (x < 0) x = 0;
        if (y < 0) y = 0;

        // Checking for coordinates more than acceptable
        if (x > 100-CIRCLE_WIDTH_PERCENT) x = 100-CIRCLE_WIDTH_PERCENT;
        if (y > 100-CIRCLE_HEIGHT_PERCENT) y = 100-CIRCLE_HEIGHT_PERCENT;


        circle.style.left = x + "%";
        circle.style.top = y + "%";

        //Changes the color of the circle when it drops below 50% of the height
        if ( y > 50 ) circle.style.borderColor = "#fff";
        else          circle.style.borderColor = "#000";

        HSV.saturation = x/(100-CIRCLE_WIDTH_PERCENT);
        HSV.value = 1 - y/(100-CIRCLE_HEIGHT_PERCENT);
        const newColor = hsvToHex(HSV.hue, HSV.saturation, HSV.value);
        setColor(newColor);
        callback(newColor);
    }


    function moveLine(e: React.MouseEvent) {
        const parent = (e.target as HTMLElement).parentElement!.getBoundingClientRect();
        const line = e.currentTarget as HTMLElement;
        let shiftY = e.pageY - line.getBoundingClientRect().top + parent.top;

        function onMouseMove(e: any) {
            let y:percent  = (e.pageY - shiftY)*100/parent.height;

            updateLine(line, y);
        }

        document.addEventListener("mousemove", onMouseMove);

        window.onmouseup = function () {
            document.removeEventListener("mousemove", onMouseMove);
            window.onmouseup = null;
        };
    }

    function clickLine(e: React.MouseEvent) {
        const elem = e.currentTarget as HTMLElement;
        const coords = elem.getBoundingClientRect();
        const line:HTMLElement = elem.querySelector(".color-picker__line")!;
        let y:percent  = ((e.pageY-coords.top)*100)/coords.height-LINE_HEIGHT_PERCENT/2;
        updateLine(line, y);
    }

    function updateLine(line: HTMLElement, y:percent) {
        // Checking for coordinates less than acceptable
        if (y < 0) y = 0;

        // Checking for coordinates more than acceptable
        if (y > 100-LINE_HEIGHT_PERCENT) y = 100-LINE_HEIGHT_PERCENT;

        line.style.top = y + "%";

        HSV.hue = 1 - y/(100-LINE_HEIGHT_PERCENT);
        setGradientColor(hsvToHex(HSV.hue, 1, 1));
    }


    function hsvToHex(h:number, s:number, v:number) {
        let r:number, g:number, b:number;
      
        const i = Math.floor(h * 6);
        const f = h * 6 - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);
      
        switch (i % 6) {
          case 0: r = v, g = t, b = p; break;
          case 1: r = q, g = v, b = p; break;
          case 2: r = p, g = v, b = t; break;
          case 3: r = p, g = q, b = v; break;
          case 4: r = t, g = p, b = v; break;
          case 5: r = v, g = p, b = q; break;
        }

        function toHex(a:number):string {
            const str = Math.round(a * 255).toString(16);
            return str.length > 1 ? str : "0" + str; 
        }

        return "#" + toHex(r!) + toHex(g!) + toHex(b!);
    }


    return (
        <>
        <div className="color-picker">
            <div className="color-picker__container-gradient">
                <div
                    className="color-picker__gradient"
                    style={{
                        backgroundColor: gradientColor,
                        background: `linear-gradient(to bottom, rgba(0,0,0,0), #000),
                                    linear-gradient(to right, rgba(0,0,0,0), ${gradientColor})`
                    }}
                    onClick={clickPicker}
                >
                    <div
                        className="color-picker__circle"
                        onMouseDown={moveCircle}
                        onClick={(e) => e.stopPropagation()}
                    ></div>
                </div>
                <div className="color-picker__rainbow" onClick={clickLine}>
                    <div
                        className="color-picker__line"
                        onMouseDown={moveLine}
                        onClick={(e) => e.stopPropagation()}
                    >
                    </div>
                </div>
            </div>
            <input
                className="color-picker__input"
                placeholder={color}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={processInput}
            />
        </div>
        </>
    )
}

export default ColorPicker;